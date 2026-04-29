import NavBar from "../NavBar/NavBar"
import Hero from "./Hero"

export default function Header() {
    return (
        <header className="w-full h-auto flex flex-col">
            <NavBar />
            <Hero />
        </header>
    )
}