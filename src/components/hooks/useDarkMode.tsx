import { useCallback, useEffect, useState } from "react"

// « Night shift » : mode sombre de 20h00 à 6h59, mode clair de 7h00 à 19h59.
const DARK_START = 20 // heure (incluse) à partir de laquelle on passe en sombre
const DARK_END = 7 // heure (incluse) à partir de laquelle on repasse en clair

type Theme = "dark" | "light"
type Override = { value: Theme; auto: Theme }

const OVERRIDE_KEY = "theme-override"

function getAutoTheme(date = new Date()): Theme {
    const h = date.getHours()
    return h >= DARK_START || h < DARK_END ? "dark" : "light"
}

function readOverride(): Override | null {
    try {
        const raw = localStorage.getItem(OVERRIDE_KEY)
        if (!raw) return null
        const parsed = JSON.parse(raw) as Partial<Override>
        const valid = (v: unknown): v is Theme => v === "dark" || v === "light"
        if (valid(parsed.value) && valid(parsed.auto)) {
            return { value: parsed.value, auto: parsed.auto }
        }
    } catch {
        // localStorage indisponible ou JSON corrompu → on ignore
    }
    return null
}

// Le thème courant = l'override manuel tant que l'heure n'a pas encore basculé,
// sinon l'automatique. Quand l'auto change (20h ou 7h), l'override devient
// périmé et l'automatique reprend la main.
function resolveTheme(): Theme {
    const auto = getAutoTheme()
    const override = readOverride()
    if (override) {
        if (override.auto === auto) return override.value
        // override périmé → on nettoie
        try {
            localStorage.removeItem(OVERRIDE_KEY)
        } catch {
            // ignore
        }
    }
    return auto
}

export function useDarkMode() {
    const [theme, setTheme] = useState<Theme>(() => resolveTheme())

    // Applique la classe `.dark` sur <html>
    useEffect(() => {
        const root = document.documentElement
        if (theme === "dark") root.classList.add("dark")
        else root.classList.remove("dark")
    }, [theme])

    // Recalcule régulièrement pour basculer même si la page reste ouverte,
    // et au retour de visibilité de l'onglet.
    useEffect(() => {
        const tick = () => {
            const next = resolveTheme()
            setTheme((prev) => (prev === next ? prev : next))
        }
        const id = window.setInterval(tick, 60_000)
        const onVisibility = () => {
            if (!document.hidden) tick()
        }
        document.addEventListener("visibilitychange", onVisibility)
        return () => {
            window.clearInterval(id)
            document.removeEventListener("visibilitychange", onVisibility)
        }
    }, [])

    const toggle = useCallback(() => {
        setTheme((prev) => {
            const next: Theme = prev === "dark" ? "light" : "dark"
            try {
                // On mémorise l'auto au moment du choix : l'override restera
                // valable jusqu'au prochain basculement horaire.
                localStorage.setItem(
                    OVERRIDE_KEY,
                    JSON.stringify({ value: next, auto: getAutoTheme() } satisfies Override)
                )
            } catch {
                // ignore
            }
            return next
        })
    }, [])

    return {
        isDark: theme === "dark",
        toggle,
    }
}
