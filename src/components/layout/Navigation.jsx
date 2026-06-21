import { useState, useEffect } from "react";

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

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.5s cubic-bezier(0.25,0.1,0.25,1);
          padding: ${scrolled ? "0" : "0"};
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${scrolled ? "1rem 2.5rem" : "1.6rem 2.5rem"};
          background: ${scrolled ? "var(--white)" : isHome ? "transparent" : "var(--white)"};
          border-bottom: ${scrolled ? "1px solid var(--color-border)" : "none"};
          backdrop-filter: ${scrolled || !isHome ? "blur(12px)" : "none"};
          transition: all 0.5s cubic-bezier(0.25,0.1,0.25,1);
        }

        .nav-logo {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
        }

        .nav-logo-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
          color: ${scrolled || !isHome ? "var(--slate-deep)" : "var(--ivory)"};
          line-height: 1;
          transition: color 0.5s;
        }

        .nav-logo-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${scrolled || !isHome ? "var(--gold)" : "var(--ivory)"};
          margin-top: 0.3rem;
          transition: color 0.5s;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
          list-style: none;
        }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${scrolled || !isHome ? "var(--stone-dark)" : "var(--ivory)"};
          cursor: pointer;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s;
          text-decoration: none;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s cubic-bezier(0.25,0.1,0.25,1);
        }

        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active::after { width: 100%; }
        .nav-link.active { color: var(--gold); }

        .nav-cta {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.65rem 1.5rem;
          background: var(--color-accent);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.35s;
          text-decoration: none;
        }

        .nav-cta:hover {
          background: var(--slate-deep);
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: ${scrolled || !isHome ? "var(--slate-deep)" : "var(--ivory)"};
          transition: all 0.3s;
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--ivory);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: ${menuOpen ? "translateX(0)" : "translateX(100%)"};
          transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1);
        }

        .mobile-link {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: var(--slate-deep);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.3s;
        }

        .mobile-link:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
          .nav-inner { padding: 1rem 1.25rem; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-inner">
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

          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <div
          style={{
            position: "absolute", top: "1.5rem", right: "1.5rem",
            fontSize: "1.5rem", cursor: "pointer", color: "var(--stone-dark)"
          }}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>
        {NAV_LINKS.map(({ label, path }) => (
          <span key={path} className="mobile-link" onClick={() => handleNav(path)}>
            {label}
          </span>
        ))}
        <span
          className="btn btn--gold"
          onClick={() => handleNav("/consultation")}
          style={{ marginTop: "1rem" }}
        >
          Request Consultation
        </span>
      </div>
    </>
  );
}