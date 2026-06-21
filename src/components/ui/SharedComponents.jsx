/* ── Shared UI Components ── */
import "./SharedComponents.css";

export function SectionLabel({ children }) {
  return (
    <div className="accent-line">
      <span className="t-label">{children}</span>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false }) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: "3.5rem" }}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 400,
        lineHeight: 1.08,
        color: light ? "var(--ivory)" : "var(--slate-deep)",
        letterSpacing: "-0.02em",
        marginBottom: subtitle ? "1.25rem" : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.05rem",
          color: light ? "var(--ivory)" : "var(--stone-dark)",
          fontStyle: "italic",
          maxWidth: centered ? "540px" : "none",
          margin: centered ? "0 auto" : 0,
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function StatCard({ number, label, note }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
      {note && <div className="stat-note">{note}</div>}
    </div>
  );
}

export function TreatmentCard({ title, tagline, icon, onClick }) {
  return (
    <div className="tx-card" onClick={onClick}>
      <span className="tx-icon">{icon}</span>
      <div className="tx-title">{title}</div>
      <div className="tx-tagline">{tagline}</div>
      <div className="tx-arrow">Learn More →</div>
    </div>
  );
}

export function TestimonialCard({ quote, name, procedure, location, light = false }) {
  return (
    <div className={`testimonial-card ${light ? "light" : ""}`}>
      <span className="testimonial-quote-mark">"</span>
      <div className="testimonial-stars">★ ★ ★ ★ ★</div>
      <p className="testimonial-text">{quote}</p>
      <div className="testimonial-name">{name}</div>
      <div className="testimonial-meta">{procedure} · {location}</div>
    </div>
  );
}

export function GoldDivider() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      margin: "3rem 0",
    }}>
      <div style={{ flex: 1, height: "1px", background: "var(--ivory-deep)" }} />
      <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: "1px", background: "var(--ivory-deep)" }} />
    </div>
  );
}

export function ImageBlock({ aspectRatio = "4/3", label, style = {} }) {
  return (
    <div style={{
      aspectRatio,
      background: "var(--ivory-deep)",
      position: "relative",
      overflow: "hidden",
      ...style
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #EDE8E0 0%, #C8BEA8 100%)",
      }} />
      {label && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--stone-mid)",
        }}>
          {label}
        </div>
      )}
    </div>
  );
}

export function ConsultCTA({ navigate, light = false }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "5rem 2rem",
      background: light ? "var(--slate-deep)" : "var(--ivory-deep)",
    }}>
      <span className="t-label" style={{ display: "block", marginBottom: "1.25rem" }}>
        Begin Your Journey
      </span>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
        color: light ? "var(--ivory)" : "var(--slate-deep)",
        fontWeight: 400,
        marginBottom: "1.25rem",
        letterSpacing: "-0.02em",
      }}>
        A conversation is where it begins.
      </h3>
      <p style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1rem",
        fontStyle: "italic",
        color: light ? "var(--ivory)" : "var(--stone-dark)",
        marginBottom: "2.5rem",
        maxWidth: "480px",
        margin: "0 auto 2.5rem",
        lineHeight: 1.7,
      }}>
        Every transformation begins with understanding. Schedule a private consultation with Dr. Arvind.
      </p>
      <button className="btn btn--primary" onClick={() => navigate("/consultation")}> 
        Request a Consultation
      </button>
    </div>
  );
}