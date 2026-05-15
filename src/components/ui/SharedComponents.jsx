/* ── Shared UI Components ── */

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
          color: light ? "rgba(248,245,240,0.65)" : "var(--stone-dark)",
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
    <>
      <style>{`
        .stat-card {
          padding: 2.5rem;
          border: 1px solid var(--ivory-deep);
          background: var(--white);
          text-align: center;
          transition: all 0.4s var(--ease-luxury);
        }
        .stat-card:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: var(--shadow-gold);
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: 3rem;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--stone-dark);
          margin-bottom: 0.3rem;
        }
        .stat-note {
          font-family: var(--font-serif);
          font-size: 0.85rem;
          color: var(--stone-mid);
          font-style: italic;
        }
      `}</style>
      <div className="stat-card">
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
        {note && <div className="stat-note">{note}</div>}
      </div>
    </>
  );
}

export function TreatmentCard({ title, tagline, icon, onClick }) {
  return (
    <>
      <style>{`
        .tx-card {
          padding: 2.5rem 2rem;
          background: var(--white);
          border: 1px solid var(--ivory-deep);
          cursor: pointer;
          transition: all 0.4s var(--ease-luxury);
          position: relative;
          overflow: hidden;
        }
        .tx-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s var(--ease-luxury);
        }
        .tx-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        .tx-card:hover::before { transform: scaleX(1); }
        .tx-icon {
          font-size: 1.8rem;
          margin-bottom: 1.25rem;
          display: block;
          opacity: 0.6;
        }
        .tx-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--slate-deep);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .tx-tagline {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          color: var(--stone-mid);
          line-height: 1.6;
          letter-spacing: 0.02em;
        }
        .tx-arrow {
          margin-top: 1.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
      <div className="tx-card" onClick={onClick}>
        <span className="tx-icon">{icon}</span>
        <div className="tx-title">{title}</div>
        <div className="tx-tagline">{tagline}</div>
        <div className="tx-arrow">Learn More →</div>
      </div>
    </>
  );
}

export function TestimonialCard({ quote, name, procedure, location, light = false }) {
  return (
    <>
      <style>{`
        .testimonial-card {
          padding: 2.5rem;
          background: ${light ? "rgba(255,255,255,0.06)" : "var(--white)"};
          border: 1px solid ${light ? "rgba(255,255,255,0.12)" : "var(--ivory-deep)"};
          position: relative;
        }
        .testimonial-quote-mark {
          font-family: var(--font-display);
          font-size: 5rem;
          line-height: 0.5;
          color: var(--gold);
          opacity: 0.35;
          display: block;
          margin-bottom: 1rem;
        }
        .testimonial-text {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-style: italic;
          color: ${light ? "rgba(248,245,240,0.8)" : "var(--stone-dark)"};
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .testimonial-name {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: ${light ? "var(--ivory)" : "var(--slate-deep)"};
          text-transform: uppercase;
        }
        .testimonial-meta {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: var(--gold);
          letter-spacing: 0.1em;
          margin-top: 0.25rem;
        }
        .testimonial-stars {
          color: var(--gold);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
      `}</style>
      <div className="testimonial-card">
        <span className="testimonial-quote-mark">"</span>
        <div className="testimonial-stars">★ ★ ★ ★ ★</div>
        <p className="testimonial-text">{quote}</p>
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-meta">{procedure} · {location}</div>
      </div>
    </>
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
          fontSize: "0.65rem",
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
        color: light ? "rgba(248,245,240,0.6)" : "var(--stone-dark)",
        marginBottom: "2.5rem",
        maxWidth: "480px",
        margin: "0 auto 2.5rem",
        lineHeight: 1.7,
      }}>
        Every transformation begins with understanding. Schedule a private consultation with Dr. Mehta.
      </p>
      <button className="btn btn--gold" onClick={() => navigate("/consultation")}>
        Request a Consultation
      </button>
    </div>
  );
}