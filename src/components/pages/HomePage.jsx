import { useState, useEffect, useRef } from "react";
import {
  SectionLabel, SectionHeading, StatCard,
  TreatmentCard, TestimonialCard, ImageBlock, ConsultCTA
} from "../ui/SharedComponents";

/* ── Hero Section ── */
function Hero({ navigate }) {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: var(--slate-deep);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #1A1A18 0%,
            #2C2C2A 40%,
            #3C3830 70%,
            #2A2620 100%
          );
        }
        .hero-texture {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px
          );
          background-size: 100% 8px;
        }
        .hero-photo-area {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 52%;
          overflow: hidden;
        }
        .hero-photo-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #3C3830 0%, #2C2820 50%, #1A1A18 100%);
          position: relative;
        }
        .hero-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--slate-deep) 0%, transparent 40%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 2.5rem;
          padding-bottom: 8rem;
          max-width: 700px;
        }
        .hero-eyebrow {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          animation: fadeUp 1s ease forwards;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5.5rem);
          color: var(--ivory);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          animation: fadeUp 1s ease 0.15s both;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }
        .hero-subtitle {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: rgba(248,245,240,0.55);
          font-style: italic;
          line-height: 1.7;
          max-width: 420px;
          margin-bottom: 3rem;
          animation: fadeUp 1s ease 0.3s both;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeUp 1s ease 0.45s both;
        }
        .hero-scroll {
          position: absolute;
          bottom: 3rem;
          right: 3rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(248,245,240,0.35);
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          animation: fadeIn 1.5s ease 1s both;
        }
        .hero-credentials-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(26,26,24,0.9);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(184,151,90,0.2);
          padding: 1.25rem 2.5rem;
          display: flex;
          align-items: center;
          gap: 3rem;
          overflow-x: auto;
          z-index: 5;
        }
        .cred-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cred-value {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ivory);
          letter-spacing: 0.05em;
        }
        .cred-label {
          font-family: var(--font-sans);
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone-mid);
        }
        .cred-sep {
          width: 1px;
          height: 32px;
          background: rgba(184,151,90,0.25);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero-photo-area { width: 100%; opacity: 0.25; }
          .hero-content { max-width: 100%; }
          .hero-credentials-bar { gap: 1.5rem; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-texture" />

        <div className="hero-photo-area">
          <div className="hero-photo-placeholder">
            {/* Surgeon portrait placeholder */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0.15,
            }}>
              <div style={{
                width: "200px", height: "280px",
                borderRadius: "50% 50% 0 0 / 60% 60% 0 0",
                background: "var(--stone)",
              }} />
            </div>
          </div>
          <div className="hero-photo-overlay" />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">Mumbai · India's Foremost Facial Surgeon</div>
            <h1 className="hero-title">
              Surgical<br /><em>Precision,</em><br />Human Care
            </h1>
            <p className="hero-subtitle">
              Specialist in maxillofacial surgery and facial reconstruction — restoring function, confidence, and the face you recognise.
            </p>
            <div className="hero-actions">
              <button className="btn btn--gold" onClick={() => navigate("/consultation")}>
                Request Consultation
              </button>
              <button className="btn btn--outline" onClick={() => navigate("/treatments")}
                style={{ color: "rgba(248,245,240,0.7)", borderColor: "rgba(212,204,184,0.3)" }}>
                Explore Treatments
              </button>
            </div>
          </div>
        </div>

        {/* Credentials bar */}
        <div className="hero-credentials-bar">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "MS · FRCS", label: "Qualifications" },
            { value: "3,500+", label: "Procedures" },
            { value: "AIIMS · Breach Candy", label: "Hospital Affiliations" },
            { value: "AOMSI Fellow", label: "Professional Body" },
            { value: "40+", label: "Publications" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
              <div className="cred-item">
                <span className="cred-value">{item.value}</span>
                <span className="cred-label">{item.label}</span>
              </div>
              {i < 5 && <div className="cred-sep" />}
            </div>
          ))}
        </div>

        <div className="hero-scroll">Scroll to explore</div>
      </section>
    </>
  );
}

/* ── Introduction Section ── */
function SurgeonIntro({ navigate }) {
  return (
    <>
      <style>{`
        .intro-section {
          padding: 8rem 0;
          background: var(--white);
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 8rem;
          align-items: center;
        }
        .intro-image-frame {
          position: relative;
        }
        .intro-image-frame::before {
          content: '';
          position: absolute;
          top: -1.5rem; left: -1.5rem;
          right: 1.5rem; bottom: 1.5rem;
          border: 1px solid var(--gold);
          z-index: 0;
        }
        .intro-image {
          position: relative;
          z-index: 1;
          aspect-ratio: 3/4;
          background: linear-gradient(160deg, #EDE8E0 0%, #C8BEA8 100%);
          overflow: hidden;
        }
        .intro-signature {
          font-family: var(--font-display);
          font-size: 2rem;
          font-style: italic;
          color: var(--slate-deep);
          margin-bottom: 0.5rem;
        }
        .intro-credentials {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
        }
        .intro-body {
          font-family: var(--font-serif);
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--stone-dark);
          margin-bottom: 1.5rem;
        }
        .intro-philosophy {
          padding: 1.5rem 2rem;
          border-left: 2px solid var(--gold);
          margin: 2rem 0;
          background: var(--ivory);
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-style: italic;
          color: var(--slate-deep);
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          .intro-grid { grid-template-columns: 1fr; gap: 4rem; }
        }
      `}</style>

      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image-frame">
              <div className="intro-image">
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(26,26,24,0.2) 100%)",
                }} />
                <div style={{
                  position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                  fontFamily: "var(--font-sans)", fontSize: "0.65rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--stone-mid)", textAlign: "center",
                }}>
                  Portrait · Dr. Arjun Mehta
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>About the Surgeon</SectionLabel>
              <div className="intro-signature">Dr. Arjun Mehta</div>
              <div className="intro-credentials">MS · FRCS · AOMSI Fellow · Mumbai</div>

              <p className="intro-body">
                With over two decades of surgical practice, Dr. Mehta is recognised among India's foremost maxillofacial surgeons — trained at AIIMS and fellowship-trained in the United Kingdom.
              </p>

              <div className="intro-philosophy">
                "Every face tells a story. My role is to restore what belongs there — function, symmetry, and the quiet confidence that comes with it."
              </div>

              <p className="intro-body" style={{ fontSize: "0.9rem" }}>
                His practice spans complex jaw reconstruction, facial trauma, TMJ disorders, and surgical facial aesthetics — approached with the precision of a specialist and the empathy of a physician.
              </p>

              <button className="btn btn--primary" onClick={() => navigate("/about")}
                style={{ marginTop: "1.5rem" }}>
                Full Biography →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Stats Section ── */
function TrustStats() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--ivory)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}>
          {[
            { number: "20+", label: "Years in Practice", note: "Specialist Experience" },
            { number: "3,500+", label: "Procedures Completed", note: "Across India & Abroad" },
            { number: "98%", label: "Patient Satisfaction", note: "Based on follow-up data" },
            { number: "40+", label: "Research Publications", note: "Peer-reviewed journals" },
            { number: "12+", label: "International Conferences", note: "Speaker & Presenter" },
          ].map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Signature Procedures ── */
function SignatureProcedures({ navigate }) {
  const procedures = [
    { title: "Orthognathic Surgery", tagline: "Jaw realignment for function, symmetry, and transformed facial proportion.", icon: "◇", path: "/treatments/jaw-correction" },
    { title: "Facial Trauma & Reconstruction", tagline: "Expert care for complex facial fractures and reconstructive needs.", icon: "△", path: "/treatments" },
    { title: "TMJ Disorder Treatment", tagline: "Precision diagnosis and relief for chronic jaw pain and dysfunction.", icon: "○", path: "/treatments" },
    { title: "Dental Implants", tagline: "Surgical-grade implant placement with precision and aesthetic intention.", icon: "⬡", path: "/treatments" },
    { title: "Facial Aesthetics", tagline: "Surgical and non-surgical refinement — natural, harmonious results.", icon: "◈", path: "/facial-aesthetics" },
    { title: "Wisdom Tooth Extraction", tagline: "Atraumatic extraction by a specialist, with post-operative care.", icon: "◉", path: "/treatments" },
  ];

  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Expertise"
          title="Signature Procedures"
          subtitle="Each procedure is approached with exacting clinical standards and a deep understanding of facial anatomy."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {procedures.map((p, i) => (
            <TreatmentCard key={i} {...p} onClick={() => navigate(p.path)} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="btn btn--outline" onClick={() => navigate("/treatments")}>
            View All Treatments
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Patient Experience ── */
function PatientExperience() {
  return (
    <>
      <style>{`
        .experience-section {
          padding: 8rem 0;
          background: var(--slate-deep);
          position: relative;
          overflow: hidden;
        }
        .experience-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .experience-steps {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .exp-step {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .exp-step-num {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--gold);
          opacity: 0.3;
          line-height: 1;
          flex-shrink: 0;
          width: 2.5rem;
        }
        .exp-step-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--ivory);
          margin-bottom: 0.4rem;
          font-weight: 500;
        }
        .exp-step-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: rgba(248,245,240,0.45);
          line-height: 1.7;
          letter-spacing: 0.03em;
        }
        @media (max-width: 900px) {
          .experience-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>

      <section className="experience-section">
        <div className="container">
          <div className="experience-grid">
            <div>
              <SectionLabel>The Experience</SectionLabel>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--ivory)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}>
                A Standard of Care<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Rarely Found</em>
              </h2>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                color: "rgba(248,245,240,0.55)",
                fontStyle: "italic",
                lineHeight: 1.8,
                maxWidth: "400px",
              }}>
                From first consultation to full recovery — a patient journey built around privacy, precision, and personalised care.
              </p>

              <div className="experience-steps">
                {[
                  { n: "01", title: "Private Consultation", text: "A thorough, unhurried clinical consultation with Dr. Mehta personally — no registrars or assistants." },
                  { n: "02", title: "Surgical Planning", text: "3D imaging, digital facial analysis, and a fully personalised surgical plan before any decision is made." },
                  { n: "03", title: "Expert Procedure", text: "Performed in accredited facilities with specialist anaesthesia and senior nursing support." },
                  { n: "04", title: "Guided Recovery", text: "Close follow-up, direct access to Dr. Mehta's team, and comprehensive aftercare documentation." },
                ].map((s) => (
                  <div key={s.n} className="exp-step">
                    <span className="exp-step-num">{s.n}</span>
                    <div>
                      <div className="exp-step-title">{s.title}</div>
                      <div className="exp-step-text">{s.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,151,90,0.2)",
                padding: "3rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  color: "var(--ivory)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  marginBottom: "2rem",
                }}>
                  "He took time to explain every step. I never felt like a case number."
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Priya S. — Jaw Correction Patient
                </div>
                <div style={{ height: "1px", background: "rgba(184,151,90,0.2)", margin: "2rem 0" }} />
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}>
                  {[
                    { label: "Recovery Support", value: "Full 12-Week" },
                    { label: "Clinic Locations", value: "3 Mumbai Sites" },
                    { label: "Response Time", value: "< 24 Hours" },
                    { label: "Technology", value: "3D CBCT · CAD/CAM" },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone-mid)", marginBottom: "0.3rem" }}>{item.label}</div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--ivory)" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Before After ── */
function BeforeAfterShowcase({ navigate }) {
  return (
    <section style={{ padding: "7rem 0", background: "var(--ivory)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
          <SectionHeading
            eyebrow="Results"
            title={<>Transformative<br />Outcomes</>}
            subtitle="A selection of case results — shared with full patient consent."
          />
          <button className="btn btn--outline" onClick={() => navigate("/patient-stories")}>
            All Stories →
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {[
            { label: "Orthognathic Surgery", sub: "Jaw realignment — 6 month result" },
            { label: "Facial Reconstruction", sub: "Post-trauma — 12 month result" },
            { label: "Facial Aesthetics", sub: "Rhinoplasty — 8 month result" },
          ].map((item, i) => (
            <div key={i} style={{ cursor: "pointer" }} onClick={() => navigate("/patient-stories")}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px",
                marginBottom: "1rem",
              }}>
                <ImageBlock aspectRatio="3/4" label="Before" />
                <ImageBlock aspectRatio="3/4" label="After"
                  style={{ background: "linear-gradient(160deg, #D4CCB8 0%, #A89F8C 100%)" }} />
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--slate-deep)", marginBottom: "0.25rem" }}>{item.label}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--stone-mid)", letterSpacing: "0.06em" }}>{item.sub}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "2.5rem",
          padding: "1.25rem 2rem",
          background: "var(--white)",
          border: "1px solid var(--ivory-deep)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.7rem",
          color: "var(--stone-mid)",
          letterSpacing: "0.06em",
          textAlign: "center",
        }}>
          Results shown with patient consent. Individual outcomes vary. Consult Dr. Mehta for personalised assessment.
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials({ navigate }) {
  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Patient Voices"
          title="What They Say"
          centered
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          {[
            {
              quote: "After years of jaw pain and insecurity, Dr. Mehta gave me not just a corrected jaw — but my life back. The entire experience was handled with remarkable care.",
              name: "Vikram R.", procedure: "Orthognathic Surgery", location: "Mumbai",
            },
            {
              quote: "The attention to detail, the follow-up, the personalised approach — it was nothing like what I'd experienced before. World-class care in every sense.",
              name: "Aisha P.", procedure: "Facial Reconstruction", location: "Bangalore",
            },
            {
              quote: "I was terrified. Dr. Mehta sat with me for nearly an hour before I'd even agreed to proceed. That level of trust is rare.",
              name: "Nikhil D.", procedure: "TMJ Treatment", location: "Delhi",
            },
          ].map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="btn btn--outline" onClick={() => navigate("/patient-stories")}>
            Read All Stories
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Media Recognition ── */
function MediaRecognition({ navigate }) {
  return (
    <section style={{ padding: "6rem 0", background: "var(--ivory)", borderTop: "1px solid var(--ivory-deep)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionLabel>Media & Recognition</SectionLabel>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--stone-dark)" }}>
            As featured in and recognised by
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          padding: "2rem 0",
          borderTop: "1px solid var(--ivory-deep)",
          borderBottom: "1px solid var(--ivory-deep)",
        }}>
          {["Times of India", "Hindustan Times", "NDTV Health", "The Hindu", "Vogue India", "Forbes India"].map(m => (
            <div key={m} style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              color: "var(--stone-mid)",
              letterSpacing: "0.02em",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
              onMouseEnter={e => e.target.style.color = "var(--slate-deep)"}
              onMouseLeave={e => e.target.style.color = "var(--stone-mid)"}
              onClick={() => navigate("/media")}
            >
              {m}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button className="btn btn--outline" onClick={() => navigate("/media")}>
            View Media & Publications
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Full Home Page ── */
export default function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <SurgeonIntro navigate={navigate} />
      <TrustStats />
      <SignatureProcedures navigate={navigate} />
      <PatientExperience />
      <BeforeAfterShowcase navigate={navigate} />
      <Testimonials navigate={navigate} />
      <MediaRecognition navigate={navigate} />
      <ConsultCTA navigate={navigate} />
    </>
  );
}