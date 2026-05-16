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
          padding-top: 5rem;
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
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
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
          color: rgba(248,245,240,0.55);
          font-family: var(--font-sans);
          font-size: 0.75rem;
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
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone-dark);
        }
        .cred-sep {
          width: 1px;
          height: 32px;
          background: rgba(184,151,90,0.25);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero {
            padding-top: 6rem;
          }
          .hero-photo-area { width: 100%; opacity: 0.25; }
          .hero-content { max-width: 100%; }
          .hero-eyebrow {
            gap: 0.75rem;
            line-height: 1.4;
          }
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
            <div className="hero-eyebrow">PACE Hospitals, Hyderabad · India's Foremost Facial Surgeon</div>
            <h1 className="hero-title">
              Surgical<br /><em>Precision,</em><br />Human Care
            </h1>
            <p className="hero-subtitle">
              Specialist in maxillofacial surgery and facial reconstruction — restoring function, confidence, and the face you recognise.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(248,245,240,0.65)", marginBottom: "2rem" }}>
              Consultations at PACE Hospitals, Hyderabad · +91 83310 03232
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
            { value: "9+", label: "Years Experience" },
            { value: "BDS · MDS", label: "Qualifications" },
            { value: "100+", label: "Procedures" },
            { value: "PACE Hospitals, Hyderabad", label: "Hospital Affiliation" },
            { value: "RCS London", label: "Fellowship" },
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
                  fontFamily: "var(--font-sans)", fontSize: "0.8rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--stone-dark)", textAlign: "center",
                }}>
                  Portrait · Dr. B. Arvind
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>About the Surgeon</SectionLabel>
              <div className="intro-signature">Dr. B. Arvind</div>
              <div className="intro-credentials">BDS · MDS · RCS Fellow · PACE Hospitals, Hyderabad</div>

              <div style={{ marginBottom: "1.25rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
                Qualifications & Education
              </div>
              <ul style={{ margin: 0, paddingLeft: "1.15rem", fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--stone-dark)" }}>
                <li>BDS & MDS — Kamineni Institute of Dental Sciences</li>
                <li>Fellowship (RGUHS) — Rajiv Gandhi University of Health Sciences</li>
                <li>Oncology Fellowship — HCG Cancer Hospital, Bengaluru</li>
                <li>Fellowship — Royal College of Surgeons (RCS), London</li>
              </ul>

              <p className="intro-body">
                With over two decades of surgical practice, Dr. B. Arvind is recognised among India's foremost maxillofacial surgeons — trained in India with oncology and international fellowship experience.
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
            { number: "9+", label: "Years in Practice", note: "Specialist Experience" },
            { number: "100+", label: "Cancer Surgeries", note: "Oncology Fellowship Experience" },
            { number: "98%", label: "Patient Satisfaction", note: "Based on follow-up data" },
          ].map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Signature Procedures (Areas of Surgical Expertise) ── */
function SignatureProcedures({ navigate }) {
  const expertise = [
    {
      title: "Oncology — Management of Oral Cancers",
      body: `Oral cancer arises in the tissues of the mouth, including the tongue, cheeks, gums, floor of the mouth, and lips. It may present as a non-healing ulcer, lump, or white/red patch, and early detection plays a critical role in successful treatment.`,
    },
    {
      title: "Orthognathic Surgery",
      body: `Performed to correct malalignment of the jaws, improving bite, facial balance, speech, and breathing. Commonly recommended for patients with jaw discrepancies that cannot be corrected with braces alone.`,
    },
    {
      title: "Maxillofacial Trauma",
      body: `Involves injuries to the face, jaws, and surrounding structures, commonly resulting from road traffic accidents, falls, or assaults. These injuries may affect facial bones, teeth, soft tissues, and function, requiring timely and specialised care. Includes: Condylar Fractures in Maxillofacial Trauma`,
    },
    {
      title: "Management of Benign Pathologies of Head and Neck Region",
      body: `Benign (non-cancerous) conditions of the head and neck include a wide range of swellings and lesions affecting the oral cavity, jaw bones, and soft tissues. While not malignant, these conditions can grow, cause discomfort, or affect function if left untreated.`,
    },
    {
      title: "Implant Dentistry & Minor Oral Surgical Procedures",
      body: `Focus on restoring missing teeth and managing routine surgical conditions of the oral cavity with precision, safety, and long-term success.`,
    },
    {
      title: "Conservative and Surgical Management of TMJ Disorders",
      body: `Conservative and surgical options for temporomandibular joint disorders tailored to the patient's symptoms and functional needs.`,
    },
  ];

  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Expertise"
          title="Areas of Surgical Expertise"
          subtitle="Clinical areas where the practice provides specialist care."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem" }}>
          {expertise.map((e, i) => (
            <div key={i} style={{ padding: "1.5rem", border: "1px solid var(--ivory-deep)", background: "var(--white)", minHeight: "180px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--slate-deep)", marginBottom: "0.6rem" }}>{e.title}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.97rem", color: "var(--stone-dark)", lineHeight: 1.6 }}>{e.body}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <button className="btn btn--outline" onClick={() => navigate("/treatments")}>View All Treatments</button>
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
                  { n: "01", title: "Private Consultation", text: "A thorough, unhurried clinical consultation with Dr. B. Arvind personally — no registrars or assistants." },
                  { n: "02", title: "Surgical Planning", text: "3D imaging, digital facial analysis, and a fully personalised surgical plan before any decision is made." },
                  { n: "03", title: "Expert Procedure", text: "Performed in accredited facilities with specialist anaesthesia and senior nursing support." },
                  { n: "04", title: "Guided Recovery", text: "Close follow-up, direct access to Dr. B. Arvind's team, and comprehensive aftercare documentation." },
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
                  "The best doctor for orthopedic surgery"
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Prasanna Kanukuntla — Patient
                </div>
                <div style={{ height: "1px", background: "rgba(184,151,90,0.2)", margin: "2rem 0" }} />
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}>
                  {[
                    { label: "Recovery Support", value: "Full 12-Week" },
                    { label: "Clinic Locations", value: "PACE Hospitals, Hyderabad" },
                    { label: "Response Time", value: "< 24 Hours" },
                    { label: "Technology", value: "3D CBCT · CAD/CAM" },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone-dark)", marginBottom: "0.3rem" }}>{item.label}</div>
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

/* ── Before After (removed) ── */

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
              quote: "Dr. Arvind is such a humble, gentle and down to earth person. He's an expert in his field. He has treated me for chicks bone surgery done my debridement and I'm very much satisfied with his treatment and the follow ups. Highly recommend to everyone",
              name: "Rathod Teju",
              procedure: "Cheek bone surgery",
              location: "Hyderabad",
            },
            {
              quote: "I was admitted for Chronic Sialadenitis, and I am incredibly happy with the care I received from Dr. Arvind. He did a great job right from the start. He was excellent at diagnosing the issue and clearly explained the root cause of my problem. The Sub mandibular excision surgery was successful, and even after the operation, he was very supportive. He helped me manage and recover from the minor side effects I experienced. I would highly recommend Dr. Arvind to anyone.",
              name: "sharmila parchuri",
              procedure: "Chronic Sialadenitis treatment",
              location: "Hyderabad",
            },
            {
              quote: "Dr. Arvind is such a humble, gentle and down to earth person. He's an expert in his field. He has treated me for ORN of the jaw and done my debridement and I'm very much satisfied with his treatment and the follow ups.",
              name: "Dianghun Shongwan",
              procedure: "ORN of the jaw treatment",
              location: "Hyderabad",
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

/* ── Media Recognition (removed) ── */

/* ── Full Home Page ── */
export default function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <SurgeonIntro navigate={navigate} />
      <TrustStats />
      <SignatureProcedures navigate={navigate} />
      <PatientExperience />
      <Testimonials navigate={navigate} />
      <ConsultCTA navigate={navigate} />
    </>
  );
}