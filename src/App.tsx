import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Specialites from "./pages/Specialites"
import Equipes from "./pages/Equipes"
import Infos from "./pages/Infos"
import NotFound from "./pages/NotFound"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialites" element={<Specialites />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
