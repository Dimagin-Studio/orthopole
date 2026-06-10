import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import ScrollToTop from "./components/Scroll/ScrollToTop"
import PageTransition from "./components/Animations/PageTransition"
import { AnimatePresence } from "motion/react"
import Home from "./pages/Home"
import Specialites from "./pages/Specialites"
import Equipes from "./pages/Equipes"
import Infos from "./pages/Infos"
import MentionsLegales from "./pages/MentionsLegales"
import Politique from "./pages/Politique"
import NotFound from "./pages/NotFound"

export function App() {

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/specialites" element={<Specialites />} />
          <Route path="/equipes" element={<Equipes />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<Politique />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
