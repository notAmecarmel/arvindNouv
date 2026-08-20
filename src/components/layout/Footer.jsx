export default function Footer({ navigate }) {
  return (
    <>
      <style>{`
        .footer {
          background: var(--slate-deep);
          color: var(--stone);
          padding: 5rem 0 2.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(212,204,184,0.12);
          margin-bottom: 2.5rem;
        }

        .footer-brand-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: var(--ivory);
          letter-spacing: 0.02em;
          margin-bottom: 0.4rem;
        }

        .footer-brand-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .footer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          color: var(--stone-mid);
          line-height: 1.7;
          font-style: italic;
          max-width: 260px;
        }

        .footer-col-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          color: var(--stone-mid);
          cursor: pointer;
          transition: color 0.3s;
          letter-spacing: 0.04em;
        }

        .footer-link:hover { color: var(--gold); }

        .footer-contact-item {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          color: var(--stone-mid);
          margin-bottom: 1rem;
          line-height: 1.6;
          letter-spacing: 0.03em;
        }

        .footer-contact-label {
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--stone-dark);
          display: block;
          margin-bottom: 0.25rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          color: var(--stone-dark);
          letter-spacing: 0.06em;
        }

        .footer-certifications {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .cert-badge {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--stone-dark);
          padding: 0.3rem 0.7rem;
          border: 1px solid rgba(212,204,184,0.18);
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 2.2rem;
          }

          .footer-grid > div:first-child {
            grid-column: 1 / -1;
            max-width: 560px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-certifications {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-brand-name">Dr. B. Arvind</div>
              <div className="footer-brand-title">BDS · MDS · RCS Fellow · Maxillofacial Surgeon</div>
              <p className="footer-tagline">
                "Precision in every procedure. Humanity in every consultation."
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                {["DCI", "AOMSI", "FHNO"].map(b => (
                  <span key={b} className="cert-badge">{b}</span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="footer-col-title">Navigate</div>
              <ul className="footer-links">
                {[
                  ["About", "/about"],
                  ["Treatments", "/treatments"],
                  ["Blogs", "/blogs"],
                  ["Consultation", "/consultation"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <span className="footer-link" onClick={() => navigate(path)}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedures / Expertise */}
            <div>
              <div className="footer-col-title">Procedures</div>
              <ul className="footer-links">
                {[
                  { label: "Oncology — Oral Cancer Management", section: "oncology" },
                  { label: "Orthognathic (Jaw) Surgery", section: "orthognathic-surgery" },
                  { label: "Maxillofacial Trauma", section: "maxillofacial-trauma" },
                  { label: "Benign Head & Neck Pathologies", section: "management-of-benign-pathologies-of-head-and-neck-region" },
                  { label: "Implant Dentistry & Minor Oral Surgery", section: "implant-dentistry-and-minor-oral-surgical-procedures" },
                  { label: "Advanced Implant Dentistry", section: "advanced-implant-dentistry" },
                ].map(({ label, section }) => (
                  <li key={label}>
                    <span className="footer-link" onClick={() => navigate(`/treatments?section=${section}`)}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-col-title">Reach Us</div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Primary Clinic</span>
                PACE Hospitals<br />
                Hyderabad, Telangana
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Appointments</span>
                +91 83310 03232
              </div>
              <div className="footer-contact-item">
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <span
                  onClick={() => navigate("/consultation")}
                  style={{
                    display: "inline-block",
                    padding: "0.65rem 1.4rem",
                    background: "var(--gold)",
                    color: "#fff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  Book Consultation
                </span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Dr. B. Arvind. All rights reserved.</span>
            <div className="footer-certifications">
              <span>Privacy Policy</span>
              <span style={{ color: "rgba(212,204,184,0.25)" }}>|</span>
              <span>Terms of Service</span>
              <span style={{ color: "rgba(212,204,184,0.25)" }}>|</span>
              <span>Medical Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}