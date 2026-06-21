import { useState, useEffect } from "react";
import "./Navigation.css";

const NAV_LINKS = [
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/treatments" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isHome = currentPath === "/";
  
  const navInnerClass = [
    "nav-inner",
    scrolled && "scrolled",
    !isHome && "not-home"
  ].filter(Boolean).join(" ");

  return (
    <>

      <nav className="nav-root">
        <div className={navInnerClass}>
          <div className="nav-logo" onClick={() => handleNav("/")}>
            <span className="nav-logo-name">Dr. B. Arvind</span>
            <span className="nav-logo-title">Maxillofacial & Facial Surgeon</span>
          </div>

          <ul className="nav-links">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <span
                  className={`nav-link ${currentPath === path ? "active" : ""}`}
                  onClick={() => handleNav(path)}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <span className="nav-cta" onClick={() => handleNav("/consultation")}>
            Request Consultation
          </span>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <span
              key={path}
              className="mobile-link"
              onClick={() => handleNav(path)}
            >
              {label}
            </span>
          ))}
          <span
            className="mobile-link"
            onClick={() => handleNav("/consultation")}
          >
            Request Consultation
          </span>
        </div>
      </nav>
    </>
  );
}