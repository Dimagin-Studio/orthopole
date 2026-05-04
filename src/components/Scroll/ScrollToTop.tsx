import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const NAVBAR_OFFSET = 76;

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "instant" });
            return;
        }

        const timeout = setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [pathname, hash]);

    return null;
}