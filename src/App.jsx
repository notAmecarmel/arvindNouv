import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Loading from "./components/ui/Loading";
import HomePage from "./components/pages/HomePage";
import { updateSeo } from "./seo";
import "./styles/globals.css";

// Lazy-loaded page components
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const TreatmentsPage = lazy(() =>
  import("./components/pages/TreatmentDetailPage").then((module) => ({
    default: module.default,
  }))
);
const TreatmentDetailPage = lazy(() =>
  import("./components/pages/TreatmentDetailPage").then((module) => ({
    default: module.TreatmentDetailPage,
  }))
);
const ConsultationPage = lazy(() =>
  import("./components/pages/ConsultationPage")
);
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const BlogsPage = lazy(() => import("./pages/Blogs"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetail"));

const ROUTES = {
  "/": HomePage,
  "/about": AboutPage,
  "/treatments": TreatmentsPage,
  "/treatments/jaw-correction": TreatmentDetailPage,
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

  const navigate = useCallback((path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.navigate = navigate;

    return () => {
      delete window.navigate;
    };
  }, [navigate]);

  const routePath = currentPath.split("?")[0];

  // Dynamic routing
  let PageComponent;

  if (routePath.startsWith("/blogs/")) {
    PageComponent = BlogDetailPage;
  } else {
    PageComponent = ROUTES[routePath] || HomePage;
  }

  return (
    <div className="app-root">
      <Navigation currentPath={currentPath} navigate={navigate} />

      <main>
        <Suspense fallback={<Loading />}>
          <PageComponent navigate={navigate} />
        </Suspense>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}