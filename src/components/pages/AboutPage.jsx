import { SectionLabel, SectionHeading, ImageBlock, ConsultCTA } from "../ui/SharedComponents";

function PageHero() {
  return (
    <div style={{
      paddingTop: "10rem",
      paddingBottom: "5rem",
      background: "var(--slate-deep)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 70% 50%, rgba(184,151,90,0.08) 0%, transparent 60%)",
      }} />
      <div className="container">
        <div style={{ maxWidth: "600px" }}>
          <SectionLabel>About</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--ivory)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}>
            The Surgeon Behind<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>The Practice</em>
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "rgba(248,245,240,0.55)",
            fontStyle: "italic",
            lineHeight: 1.8,
          }}>
            Rigorous training. Decades of practice. An unwavering commitment to the patient in front of him.
          </p>
        </div>
      </div>
    </div>
  );
}

function Biography() {
  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <div style={{ position: "relative" }}>
              <ImageBlock aspectRatio="3/4" label="Dr. Arjun Mehta" />
              <div style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                width: "60%",
                padding: "1.5rem",
                background: "var(--slate-deep)",
                border: "1px solid rgba(184,151,90,0.2)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", lineHeight: 1, marginBottom: "0.4rem" }}>MS</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-mid)" }}>FRCS · AOMSI · IAOMFS</div>
              </div>
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <SectionLabel>Hospital Affiliations</SectionLabel>
              {["AIIMS, New Delhi", "Breach Candy Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Lilavati Hospital"].map(h => (
                <div key={h} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--stone-dark)",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--ivory-deep)",
                  letterSpacing: "0.04em",
                }}>
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Biography</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.2rem",
              color: "var(--slate-deep)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              lineHeight: 1.1,
            }}>
              Dr. Arjun Mehta<br />
              <span style={{ fontSize: "1rem", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase" }}>MS · FRCS · Maxillofacial Surgeon</span>
            </h2>

            {[
              "Dr. Arjun Mehta is a senior Oral and Maxillofacial Surgeon with over two decades of clinical practice at the highest levels of specialised facial surgery in India and internationally.",
              "He completed his postgraduate training at the All India Institute of Medical Sciences, New Delhi — widely regarded as India's most prestigious surgical institution — before pursuing a fellowship at Guy's Hospital, London, where he trained under world-renowned facial surgeons.",
              "His surgical expertise encompasses the full spectrum of maxillofacial surgery: from complex orthognathic and reconstructive procedures, to trauma, oncology, and the ever-growing domain of surgical facial aesthetics.",
              "Dr. Mehta's philosophy is anchored in evidence-based medicine, surgical restraint, and deep patient collaboration. He does not perform any procedure he would not advise for a member of his own family.",
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                color: "var(--stone-dark)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}>
                {para}
              </p>
            ))}

            <div style={{
              padding: "2rem",
              borderLeft: "2px solid var(--gold)",
              background: "var(--ivory)",
              margin: "2.5rem 0",
              fontFamily: "var(--font-serif)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "var(--slate-deep)",
              lineHeight: 1.7,
            }}>
              "Surgery must always serve the patient — not the surgeon's ego, not a trend, not a protocol. The patient in front of me is the only priority."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const sections = [
    {
      title: "Education & Training",
      items: [
        { label: "MBBS", detail: "Grant Medical College, Mumbai" },
        { label: "BDS + MDS", detail: "Government Dental College, Mumbai" },
        { label: "MS (Oral & Maxillofacial Surgery)", detail: "AIIMS, New Delhi" },
        { label: "FRCS (Maxillofacial Surgery)", detail: "Royal College of Surgeons, London" },
        { label: "Fellowship in Craniofacial Surgery", detail: "Guy's Hospital, King's College London" },
      ],
    },
    {
      title: "Memberships & Fellowships",
      items: [
        { label: "AOMSI", detail: "Association of Oral and Maxillofacial Surgeons of India" },
        { label: "IAOMFS", detail: "International Association of OMFS" },
        { label: "ASPS", detail: "American Society of Plastic Surgeons — International Member" },
        { label: "ISAPS", detail: "International Society of Aesthetic Plastic Surgery" },
        { label: "MCI Registered", detail: "Medical Council of India" },
      ],
    },
  ];

  return (
    <section style={{ padding: "7rem 0", background: "var(--ivory)" }}>
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Education & Recognition" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "2rem",
              }}>
                {sec.title}
              </h3>
              {sec.items.map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "1rem",
                  padding: "1.1rem 0",
                  borderBottom: "1px solid var(--ivory-deep)",
                }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--slate-deep)", fontWeight: 500 }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--stone-mid)", letterSpacing: "0.04em", textAlign: "right" }}>
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading eyebrow="Research" title="Selected Publications" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {[
            { title: "Advances in Virtual Surgical Planning for Orthognathic Cases", journal: "Journal of OMFS · 2023", type: "Original Research" },
            { title: "TMJ Disc Repositioning: A 10-Year Outcome Study", journal: "Oral Surgery, Oral Medicine · 2022", type: "Clinical Study" },
            { title: "Mandibular Reconstruction Using CAD/CAM Plates", journal: "British Journal of OMFS · 2021", type: "Case Series" },
            { title: "Facial Trauma Management in Polytrauma Patients", journal: "Indian JOMFS · 2020", type: "Review Article" },
          ].map((pub, i) => (
            <div key={i} style={{
              padding: "2rem",
              background: "var(--ivory)",
              border: "1px solid var(--ivory-deep)",
              transition: "border-color 0.3s",
              cursor: "pointer",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--ivory-deep)"}
            >
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                {pub.type}
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--slate-deep)", lineHeight: 1.5, marginBottom: "0.75rem", fontWeight: 500 }}>
                {pub.title}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--stone-mid)", letterSpacing: "0.04em" }}>
                {pub.journal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage({ navigate }) {
  return (
    <>
      <PageHero />
      <Biography />
      <Credentials />
      <Publications />
      <ConsultCTA navigate={navigate} />
    </>
  );
}