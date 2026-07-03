import { useState, useEffect, lazy, Suspense } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { updateSeo } from "./seo";
import "./styles/globals.css";

// Lazy-loaded page components
const HomePage = lazy(() => import("./components/pages/HomePage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const TreatmentsPage = lazy(() =>
  import("./components/pages/TreatmentDetailPage")
);
const ConsultationPage = lazy(() =>
  import("./components/pages/ConsultationPage")
);
const ContactPage = lazy(() =>
  import("./components/pages/ContactPage")
);
const BlogsPage = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

// Loading fallback
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      fontFamily: "var(--font-serif)",
      fontSize: "1rem",
      color: "var(--stone-dark)",
    }}
  >
    Loading...
  </div>
);

const ROUTES = {
  "/": HomePage,
  "/about": AboutPage,
  "/treatments": TreatmentsPage,
  "/treatments/jaw-correction": TreatmentsPage,
  "/consultation": ConsultationPage,
  "/contact": ContactPage,
  "/blogs": BlogsPage,
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNav = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handleNav);

    return () => window.removeEventListener("popstate", handleNav);
  }, []);

  useEffect(() => {
    updateSeo(currentPath);
  }, [currentPath]);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.navigate = navigate;

  // Dynamic routing
  let PageComponent;

  if (currentPath.startsWith("/blogs/")) {
    PageComponent = BlogDetail;
  } else {
    PageComponent = ROUTES[currentPath] || HomePage;
  }

  return (
    <div className="app-root">
      <Navigation currentPath={currentPath} navigate={navigate} />

      <main>
        <Suspense fallback={<LoadingFallback />}>
          <PageComponent navigate={navigate} />
        </Suspense>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}