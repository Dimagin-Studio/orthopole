import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Specialites from "./pages/Specialites"
import NotFound from "./pages/NotFound"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialites" element={<Specialites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
