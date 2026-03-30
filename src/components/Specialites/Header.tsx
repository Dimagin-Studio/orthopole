import NavBar from "../NavBar/NavBar"
import Hero from "./Hero"

export default function Header() {
    return (
        <>
            <header className="w-full h-auto flex flex-col gap-[24px] md:gap-0">
                <NavBar />
                <Hero />
            </header>
        </>
    )
}