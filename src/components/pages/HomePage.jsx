import { useState, useEffect, useRef } from "react";
import {
  SectionLabel, SectionHeading, StatCard,
  TreatmentCard, TestimonialCard, ImageBlock, ConsultCTA
} from "../ui/SharedComponents";
import "./HomePage.css";
import hero2 from "../../assets/hero2.webp";
import jawGraphic from "../../assets/jaw.webp";
/* ── Hero Section ── */
function Hero({ navigate }) {
  const heroPhotoStyle = {
    backgroundImage: `url(${jawGraphic}), linear-gradient(160deg, #3C3830 0%, #2C2820 50%, #1A1A18 100%)`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "60%, cover",
    backgroundPosition: "60% center"
  };

  return (
    <section className="hero">

      <div className="hero-bg" />
      <div className="hero-texture" />

      <div className="hero-photo-area">
        <div className="hero-photo-placeholder" style={heroPhotoStyle} />
        <div className="hero-photo-overlay" />
      </div>

      <div className="container hero-offset-container">
        <div className="hero-content">
          <div className="hero-eyebrow">PACE Hospitals, Hyderabad · India's Foremost Facial Surgeon</div>
          <h1 className="hero-title">
            Surgical<br /><em>Precision,</em><br />Human Care
          </h1>
          <p className="hero-subtitle">
            Specialist in <b>maxillofacial surgery</b> and <b>facial reconstruction</b> — restoring function, confidence, and the face you recognise.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--ivory)", marginBottom: "2rem" }}>
            Consultations at PACE Hospitals, Hyderabad · +91 83310 03232
          </p>
          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => navigate("/consultation")}>
              Request Consultation
            </button>
            <button className="btn btn--outline" onClick={() => navigate("/treatments")}>
              Explore Treatments
            </button>
          </div>
        </div>
      </div>

      {/* Credentials bar */}
      <div className="hero-credentials-bar">
        {[
          { value: "4+", label: "Years Experience" },
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
    </section>
  );
}

/* ── Introduction Section ── */
function SurgeonIntro({ navigate }) {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-image-frame">
            <div className="intro-image">
              <img src={hero2} alt="Portrait of Dr. B. Arvind" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              With over four years of surgical practice, Dr. B. Arvind is recognised among India's foremost maxillofacial surgeons — trained in India with oncology and international fellowship experience.
            </p>

            <div className="intro-philosophy">
              "Every face tells a story. My role is to restore what belongs there — function, symmetry, and the quiet confidence that comes with it."
            </div>

            <p className="intro-body">
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
  );
}

/* ── Stats Section ── */
function TrustStats() {
  return (
    <section className="trust-stats-section">
      <div className="container">
        <div className="trust-stats-grid">
          {[
            { number: "4+", label: "Years in Practice", note: "Specialist Experience" },
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

        <div className="expertise-grid">
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
              color: "var(--ivory)",
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
              background: "var(--surface-overlay)",
              border: "1px solid var(--color-border)",
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
              <div style={{ height: "1px", background: "var(--color-border)", margin: "2rem 0" }} />
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
  );
}

/* ── Before After (removed) ── */

/* ── Testimonials ── */
function Testimonials({ navigate }) {
  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="Patient Voices"
          title="What They Say"
          centered
        />
        <div className="testimonials-grid">
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