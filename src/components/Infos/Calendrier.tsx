import { useEffect, useRef } from "react"

const IFRAME_SRC = "https://rdv.i-agenda.net/ORTHOWATERLOO/index.php"
const RESIZER_SRC = "https://rdv.i-agenda.net/resscom/jquery/iframe-resizer/iframeResizer.min.js"

declare global {
    interface Window {
        iFrameResize?: (...args: unknown[]) => unknown
    }
}

function loadResizerScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined") return resolve()
        if (window.iFrameResize) return resolve()
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${RESIZER_SRC}"]`)
        if (existing) {
            existing.addEventListener("load", () => resolve())
            existing.addEventListener("error", () => reject(new Error("Failed to load iframe-resizer")))
            return
        }
        const script = document.createElement("script")
        script.src = RESIZER_SRC
        script.async = true
        script.addEventListener("load", () => resolve())
        script.addEventListener("error", () => reject(new Error("Failed to load iframe-resizer")))
        document.head.appendChild(script)
    })
}

export default function Calendrier() {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return

        const params = new URLSearchParams(window.location.search)
        const tp = params.get("tp")
        const id = params.get("id")

        if (tp && id) {
            const url = new URL(IFRAME_SRC)
            url.searchParams.set("tp", tp)
            url.searchParams.set("id", id)
            iframe.src = url.toString()
        } else {
            iframe.src = IFRAME_SRC
        }

        let cancelled = false
        loadResizerScript()
            .then(() => {
                if (cancelled) return
                try {
                    window.iFrameResize?.({ checkOrigin: false, heightCalculationMethod: "lowestElement" }, iframe)
                } catch {
                    /* noop */
                }
            })
            .catch(() => {
                /* on garde l'iframe affichée même si le resizer ne charge pas */
            })

        return () => {
            cancelled = true
        }
    }, [])

    return (
        <section id="prise-de-rdv" className="px-[24px] md:px-[48px] py-[64px] md:py-[96px] mx-auto max-w-[1100px] w-full flex flex-col gap-[24px] min-h-[calc(100vh-76px)]">
            <div className="flex flex-col gap-[12px] text-center md:text-left">
                <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4] w-fit mx-auto md:mx-0">
                    PRISE DE RENDEZ-VOUS EN LIGNE
                </p>
                <h2 className="text-3xl md:text-5xl leading-[1.4] tracking-tight">Identifiez-vous ou créez votre compte</h2>
                <p className="font-[Outfit] text-sm md:text-base leading-[1.6] max-w-[720px] mx-auto md:mx-0">
                    Pour prendre rendez-vous, connectez-vous à votre espace patient ci-dessous. Si vous n'avez pas
                    encore de compte, vous pouvez en demander la création directement depuis ce module.
                </p>
            </div>

            <iframe
                ref={iframeRef}
                id="frmPrpi"
                title="Prise de rendez-vous Orthopole"
                scrolling="no"
                style={{ width: "100%", border: 0 }}
            />
        </section>
    )
}
