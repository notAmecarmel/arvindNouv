import { useState, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import TreatmentsPage from "./components/pages/TreatmentDetailPage";
import TreatmentDetailPage from "./components/pages/TreatmentDetailPage";
import FacialAestheticsPage from "./components/pages/FacialAestheticsPage";
import PatientStoriesPage from "./components/pages/PatientStoriesPage";
import MediaPage from "./components/pages/MediaPage";
import ConsultationPage from "./components/pages/ConsultationPage";
import ContactPage from "./components/pages/ContactPage";
import "./styles/globals.css";
 
const ROUTES = {
  "/": HomePage,
  "/about": AboutPage,
  "/treatments": TreatmentsPage,
  "/treatments/jaw-correction": TreatmentDetailPage,
  "/facial-aesthetics": FacialAestheticsPage,
  "/patient-stories": PatientStoriesPage,
  "/media": MediaPage,
  "/consultation": ConsultationPage,
  "/contact": ContactPage,
};
 
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
 
  useEffect(() => {
    const handleNav = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleNav);
    return () => window.removeEventListener("popstate", handleNav);
  }, []);
 
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  window.navigate = navigate;
 
  const PageComponent = ROUTES[currentPath] || HomePage;
 
  return (
    <div className="app-root">
      <Navigation currentPath={currentPath} navigate={navigate} />
      <main>
        <PageComponent navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
 