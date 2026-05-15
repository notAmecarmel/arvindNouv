import { SectionLabel, SectionHeading, TreatmentCard, ConsultCTA, ImageBlock } from "../ui/SharedComponents";

const TREATMENTS = [
  {
    title: "Jaw Correction Surgery",
    subtitle: "Orthognathic Surgery",
    tagline: "Surgical realignment of the jaw for function, facial symmetry, and profound transformation.",
    icon: "◇",
    overview: "Orthognathic surgery corrects skeletal irregularities of the jaw bones — underbite, overbite, open bite, and asymmetry — that cannot be addressed by orthodontics alone.",
    candidacy: ["Significant jaw misalignment (skeletal malocclusion)", "Chronic jaw pain or TMJ dysfunction related to skeletal structure", "Sleep apnea of skeletal origin", "Facial asymmetry causing functional or quality-of-life concerns", "Post-orthodontic patients who have plateaued"],
    recovery: "Typically 6–8 weeks to resume normal activity. Soft diet for 4–6 weeks. Swelling resolves over 3–6 months. Full facial refinement visible at 12 months.",
    technology: ["3D CBCT Cone Beam Imaging", "Virtual Surgical Planning (VSP)", "CAD/CAM Splints & Plates", "Piezo Bone Surgery"],
    faqs: [
      { q: "Is jaw surgery painful?", a: "Managed comprehensively. Discomfort peaks at 48–72 hours and is controlled with prescribed medication. Most patients report it less painful than anticipated." },
      { q: "Will there be visible scarring?", a: "All incisions are made inside the mouth. There are no external scars." },
      { q: "When will I see the final result?", a: "Significant changes are visible within weeks; full refinement and stability is assessed at 12 months." },
    ],
  },
  {
    title: "Dental Implants",
    subtitle: "Surgical Implant Placement",
    tagline: "Precision surgical implant placement — the gold standard in tooth replacement.",
    icon: "⬡",
    overview: "Dental implants are titanium fixtures placed into the jawbone to support crowns, bridges, or complete arches — restoring both function and aesthetics with unmatched permanence.",
    candidacy: ["Missing one or more teeth", "Adequate bone density (or bone grafting candidate)", "Non-smoker or willing to cease smoking pre/post-surgery", "Healthy systemic health", "Seeking a permanent, fixed solution"],
    recovery: "Osseointegration: 3–6 months. Immediate loading may be considered in select cases. Prosthetic placement follows after confirmed integration.",
    technology: ["Nobel Biocare & Straumann Implant Systems", "Digital Implant Planning Software", "CBCT Guided Placement", "Immediate Loading Protocols"],
    faqs: [
      { q: "How long do implants last?", a: "With proper care, implants can last a lifetime. They are the most durable tooth replacement option available." },
      { q: "Is bone grafting always needed?", a: "Not always. Dr. Mehta assesses bone volume precisely and grafts only when clinically indicated." },
    ],
  },
  {
    title: "Facial Trauma Surgery",
    subtitle: "Emergency & Reconstructive",
    tagline: "Expert reconstruction of complex facial fractures — restoring form, function, and dignity.",
    icon: "△",
    overview: "Facial trauma requires immediate, expert intervention. Dr. Mehta manages the full spectrum — from orbital fractures and zygomatic injuries to complex panfacial trauma.",
    candidacy: ["Facial fractures from accident, sport, or assault", "Orbital floor fractures", "Zygomatic and mandibular fractures", "Nasal bone fractures", "Complex lacerations requiring specialist closure"],
    recovery: "Variable depending on severity. Most patients resume partial activity in 2–4 weeks. Swelling and bruising resolve over 6–8 weeks.",
    technology: ["Titanium Miniplate Fixation Systems", "Intraoperative 3D Navigation", "Microsurgical Techniques", "Virtual Surgical Planning"],
    faqs: [
      { q: "When should facial trauma be treated?", a: "Ideally within 24–72 hours for most fractures. Soft tissue swelling is managed first in some cases before definitive fixation." },
      { q: "Will there be permanent changes?", a: "With expert management, the goal is complete anatomical restoration. Outcomes depend on severity and timing of treatment." },
    ],
  },
  {
    title: "TMJ Disorders",
    subtitle: "Temporomandibular Joint",
    tagline: "Accurate diagnosis and lasting relief for chronic jaw pain, clicking, and dysfunction.",
    icon: "○",
    overview: "TMJ disorders affect the joint connecting the jaw to the skull, causing pain, limited movement, and clicking. Management ranges from conservative to surgical — tailored to each patient.",
    candidacy: ["Chronic jaw or facial pain", "Clicking, popping, or locking of the jaw", "Limited mouth opening", "Headaches of jaw origin", "Failed conservative TMJ management"],
    recovery: "Conservative treatments show response in 4–8 weeks. Surgical interventions (arthroscopy or open joint) carry a 2–6 week recovery period.",
    technology: ["TMJ Arthroscopy", "MRI-guided Disc Assessment", "Bite Splint Therapy", "Botulinum Toxin for Masseteric Hypertrophy"],
    faqs: [
      { q: "Is surgery always required for TMJ?", a: "No. A significant proportion of patients respond well to conservative management — splint therapy, physiotherapy, and medication." },
      { q: "How accurate is the diagnosis?", a: "Dr. Mehta uses MRI and CBCT in combination with thorough clinical assessment for definitive diagnosis." },
    ],
  },
  {
    title: "Facial Reconstruction",
    subtitle: "Reconstructive Surgery",
    tagline: "Restoring anatomy and confidence following oncological resection, trauma, or congenital anomaly.",
    icon: "◈",
    overview: "Facial reconstruction is among the most complex surgical challenges. Dr. Mehta specialises in restoring facial structure and function following tumour resection, extensive trauma, and congenital deformities.",
    candidacy: ["Post-tumour resection requiring reconstruction", "Congenital facial anomalies", "Severe post-traumatic deformity", "Failed prior reconstruction"],
    recovery: "Highly variable. Microsurgical reconstruction may involve a 5–10 day hospital stay. Outpatient follow-up continues for 12–24 months.",
    technology: ["Free Flap Microsurgery", "Fibula and Iliac Crest Grafts", "CAD/CAM Implant Prostheses", "3D-Printed Titanium Implants"],
    faqs: [
      { q: "Can the face be fully restored?", a: "With modern reconstructive techniques, functional and aesthetic outcomes have improved dramatically. Goals are discussed candidly during consultation." },
    ],
  },
  {
    title: "Wisdom Tooth Extraction",
    subtitle: "Surgical Extraction",
    tagline: "Atraumatic, specialist extraction with precision and comprehensive post-operative care.",
    icon: "◉",
    overview: "When wisdom teeth are impacted, infected, or causing crowding, specialist surgical extraction minimises trauma, reduces complication risk, and ensures the safest possible recovery.",
    candidacy: ["Partially or fully impacted wisdom teeth", "Recurrent pericoronitis", "Cyst formation around impacted teeth", "Orthodontic space requirement"],
    recovery: "48–72 hours of localised discomfort. Soft diet for 5–7 days. Stitches removed at 7–10 days. Full healing in 2–4 weeks.",
    technology: ["Piezoelectric Surgical Instruments", "3D CBCT Proximity Assessment", "Platelet-Rich Fibrin (PRF) for Healing", "IV Sedation Available"],
    faqs: [
      { q: "Is it done under general anaesthetic?", a: "Most cases are performed under local anaesthetic with IV sedation for comfort. General anaesthesia is used for complex or multiple extractions." },
      { q: "Why see a specialist rather than a dentist?", a: "Complex impactions — particularly those near the inferior alveolar nerve — carry risk that is significantly reduced in specialist hands." },
    ],
  },
];

/* ── Treatments List Page ── */
export default function TreatmentsPage({ navigate }) {
  return (
    <>
      <style>{`
        .treatments-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          background: var(--slate-deep);
          position: relative;
        }
      `}</style>

      <div className="treatments-hero">
        <div className="container">
          <SectionLabel>Procedures</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--ivory)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            maxWidth: "700px",
          }}>
            Surgical Excellence<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Across Every Discipline</em>
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "rgba(248,245,240,0.5)",
            fontStyle: "italic",
            lineHeight: 1.8,
            maxWidth: "500px",
          }}>
            Each procedure is supported by advanced technology, rigorous training, and a commitment to outcomes that last.
          </p>
        </div>
      </div>

      <section style={{ padding: "6rem 0", background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {TREATMENTS.map((t, i) => (
              <TreatmentCard
                key={i}
                title={t.title}
                tagline={t.tagline}
                icon={t.icon}
                onClick={() => navigate("/treatments/jaw-correction")}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsultCTA navigate={navigate} />
    </>
  );
}

/* ── Treatment Detail Page ── */
export function TreatmentDetailPage({ navigate }) {
  const treatment = TREATMENTS[0]; // Jaw Correction as demo

  return (
    <>
      <style>{`
        .tx-detail-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          background: var(--slate-deep);
          position: relative;
          overflow: hidden;
        }
        .tx-detail-body {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          align-items: start;
          padding: 7rem 0;
        }
        .tx-section-head {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--ivory-deep);
        }
        .faq-item {
          border-bottom: 1px solid var(--ivory-deep);
          padding: 1.5rem 0;
        }
        .faq-q {
          font-family: var(--font-serif);
          font-size: 1rem;
          color: var(--slate-deep);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .faq-a {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: var(--stone-dark);
          line-height: 1.75;
          letter-spacing: 0.02em;
        }
        @media (max-width: 900px) {
          .tx-detail-body { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 0; }
        }
      `}</style>

      <div className="tx-detail-hero">
        <div className="container">
          <div style={{ marginBottom: "1rem", cursor: "pointer", color: "var(--stone-mid)", fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.1em" }}
            onClick={() => navigate("/treatments")}>
            ← All Treatments
          </div>
          <SectionLabel>{treatment.subtitle}</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: "var(--ivory)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            maxWidth: "600px",
          }}>
            {treatment.title}
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "rgba(248,245,240,0.5)",
            fontStyle: "italic",
            lineHeight: 1.8,
            maxWidth: "480px",
          }}>
            {treatment.tagline}
          </p>
        </div>
      </div>

      <div style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="tx-detail-body">
            {/* Main content */}
            <div>
              {/* Overview */}
              <div className="tx-section-head">Procedure Overview</div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "3rem" }}>
                {treatment.overview}
              </p>

              {/* Image */}
              <ImageBlock aspectRatio="16/9" label="Procedure Illustration Placeholder" style={{ marginBottom: "3rem" }} />

              {/* Am I a Candidate */}
              <div className="tx-section-head">Am I a Candidate?</div>
              <ul style={{ listStyle: "none", marginBottom: "3rem" }}>
                {treatment.candidacy.map((c, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid var(--ivory-deep)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--stone-dark)",
                    letterSpacing: "0.03em",
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: "var(--gold)", marginTop: "0.15rem", flexShrink: 0 }}>◆</span>
                    {c}
                  </li>
                ))}
              </ul>

              {/* Recovery */}
              <div className="tx-section-head">Recovery</div>
              <div style={{
                padding: "1.75rem 2rem",
                background: "var(--ivory)",
                borderLeft: "2px solid var(--gold)",
                fontFamily: "var(--font-serif)",
                fontSize: "0.98rem",
                color: "var(--stone-dark)",
                lineHeight: 1.8,
                marginBottom: "3rem",
                fontStyle: "italic",
              }}>
                {treatment.recovery}
              </div>

              {/* FAQs */}
              <div className="tx-section-head">Frequently Asked Questions</div>
              {treatment.faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "7rem" }}>
              {/* Technology */}
              <div style={{ padding: "2.5rem", background: "var(--ivory)", marginBottom: "1.5rem" }}>
                <div className="tx-section-head">Technology Used</div>
                {treatment.technology.map((t, i) => (
                  <div key={i} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--stone-dark)",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid var(--ivory-deep)",
                    letterSpacing: "0.04em",
                  }}>
                    {t}
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div style={{
                padding: "2.5rem",
                background: "var(--slate-deep)",
                border: "1px solid rgba(184,151,90,0.2)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--ivory)", lineHeight: 1.2, marginBottom: "1rem" }}>
                  Is this procedure right for you?
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "rgba(248,245,240,0.5)", fontStyle: "italic", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  A private consultation with Dr. Mehta is the only way to know with certainty.
                </p>
                <button className="btn btn--gold" onClick={() => navigate("/consultation")}
                  style={{ width: "100%", justifyContent: "center" }}>
                  Request Consultation
                </button>
                <div style={{
                  marginTop: "1.25rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  color: "var(--stone-mid)",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                }}>
                  Typically responds within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultCTA navigate={navigate} light />
    </>
  );
}