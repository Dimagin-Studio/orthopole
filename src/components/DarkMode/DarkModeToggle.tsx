import { Moon, Sun } from "lucide-react"
import { useDarkMode } from "../hooks/useDarkMode"
import { Switch } from "../ui/switch"

type Props = {
    isHome: boolean;
    isDark: boolean;
    toggle: () => void;
}

export function DarkModeToggle({ isHome, isDark, toggle }: Props) {
    return (
        <div className="dark-mode-toggle flex items-center gap-2">
            {/* Icône Soleil (jaune en light, gris en dark) */}
            <Sun
                size={20}
                className={isDark ? "text-gray-400" : "text-yellow-500"}
            />
            {/* Switch pour basculer entre light/dark */}
            <Switch
                checked={isDark}
                onCheckedChange={toggle}
                aria-label="Basculer le mode sombre"
                className={`cursor-pointer
                    ${isHome}
                        ? "data-[state=checked]:bg-[#b8cae2]"
                        : "data-[state=checked]:bg-[#2d5183]"
                `}
            />
            {/* Icône Lune (bleu en dark, gris en light) */}
            <Moon
                size={20}
                className={isDark ? "text-blue-400" : "text-gray-400"}
            />
        </div>
    );
}