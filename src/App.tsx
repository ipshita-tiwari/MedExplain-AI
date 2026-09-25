import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "@/pages/Landing"
import Login from "@/pages/Login"
import PillarInfo from "@/pages/PillarInfo"
import PlaceholderPage from "@/pages/PlaceholderPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info/:slug" element={<PillarInfo />} />
        <Route
          path="/features"
          element={
            <PlaceholderPage
              title="Features"
              description="A closer look at MedExplain AI's explainability, uncertainty, and clinical-workflow tools is coming to this page."
            />
          }
        />
        <Route
          path="/how-it-works"
          element={
            <PlaceholderPage
              title="How it works"
              description="A walkthrough of the MedExplain AI pipeline — from patient data to an explained, confidence-scored insight."
            />
          }
        />
        <Route
          path="/about"
          element={
            <PlaceholderPage
              title="About"
              description="MedExplain AI is built with practicing clinicians to bring transparent, responsible AI support to everyday care."
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PlaceholderPage
              title="Contact"
              description="Reach the MedExplain AI team at hello@medexplain.ai."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
