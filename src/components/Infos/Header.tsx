import NavBar from "../NavBar/NavBar"
import Hero from "./Hero"

export default function Header() {
    return (
        <>
            <header className="w-full h-auto flex flex-col gap-[24px] md:gap-0 bg-[#E9DECE] dark:bg-[#172D47]">
                <NavBar />
                <Hero />
            </header>
        </>
    )
}