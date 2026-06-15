import hero2 from "../../assets/hero2.jpeg";
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
            Rigorous training. Years of practice. An unwavering commitment to the patient in front of him.
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
              <div className="intro-image">
                <img src={hero2} alt="Dr. B. Arvind" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                width: "60%",
                padding: "1.5rem",
                background: "var(--slate-deep)",
                border: "1px solid rgba(184,151,90,0.2)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", lineHeight: 1, marginBottom: "0.4rem" }}>BDS · MDS</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-dark)" }}>RGUHS · HCG Bengaluru · RCS London</div>
              </div>
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <SectionLabel>Hospital Affiliations</SectionLabel>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--stone-dark)",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--ivory-deep)",
                letterSpacing: "0.04em",
              }}>
                PACE Hospitals, Hyderabad
              </div>
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
              Dr. B. Arvind<br />
              <span style={{ fontSize: "1rem", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase" }}>BDS · MDS · RCS Fellow · Maxillofacial Surgeon</span>
            </h2>

            {[
              "Dr. B. Arvind is a dedicated Oral and Maxillofacial Surgeon based at PACE Hospitals, Hyderabad. His practice focuses on oncology, facial reconstruction, trauma, TMJ disorders, and precision oral surgery.",
              "He completed his BDS and MDS at Kamineni Institute of Dental Sciences and went on to pursue a fellowship with Rajiv Gandhi University of Health Sciences (RGUHS). Further oncology training at HCG Cancer Hospital, Bengaluru deepened his expertise in oral cancer management.",
              "An international fellowship at the Royal College of Surgeons (RCS), London broadened his surgical perspective and reinforced his commitment to contemporary, evidence-based care.",
              "Dr. Arvind's philosophy is built on surgical restraint, clear communication, and treating every patient as a partner in their care. He prioritises outcomes that restore function and confidence while respecting the patient's individual needs.",
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
              "My first responsibility is always to the patient: to offer clear options, honest guidance, and surgery only when it truly improves their health and quality of life."
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
        { label: "BDS & MDS", detail: "Kamineni Institute of Dental Sciences" },
        { label: "Fellowship (RGUHS)", detail: "Rajiv Gandhi University of Health Sciences" },
        { label: "Oncology Fellowship", detail: "HCG Cancer Hospital, Bengaluru" },
        { label: "Fellowship", detail: "Royal College of Surgeons (RCS), London" },
      ],
    },
    {
      title: "Memberships & Fellowships",
      items: [
        { label: "AOMSI", detail: "Association of Oral and Maxillofacial Surgeons of India" },
        { label: "IAOMFS", detail: "International Association of OMFS" },
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
        <SectionHeading eyebrow="About the Surgeon" title="Focused Surgical Care in Oral & Maxillofacial Surgery" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {[
            {
              title: "Clinical Focus",
              content: "Dr. B Arvind is a Consultant Oral & Maxillofacial Oncosurgeon with over nine years of clinical practice in oral cancer surgery, complex jaw procedures, facial trauma, and maxillofacial reconstruction.",
            },
            {
              title: "Watch the Surgeon",
              video: true,
              src: "https://www.youtube.com/embed/ZMLJtDI3-Ac",
            },
            {
              title: "Practice Scope",
              content: "His practice focuses on surgical planning, primary resections, neck dissections, reconstructive procedures, orthognathic surgery, trauma care, implant-related surgery, and minor oral surgical procedures. His RCS London Fellowship credential is mentioned as a professional surgical qualification and does not imply physical study or training in London.",
            },
            {
              title: "Consultations & Care",
              content: "Dr. Arvind is available for clinic consultations at the Nalgonda branch from 6:30 PM to 9 PM, Monday to Saturday. Hospital consultations and surgical care are scheduled at PACE Hospitals from 9 AM to 6 PM, Monday to Saturday.",
            },
          ].map((card, i) => {
            const isVideo = card.video;
            return (
              <div key={i} style={{
                padding: isVideo ? 0 : "2rem",
                background: isVideo ? "transparent" : "var(--ivory)",
                border: isVideo ? "none" : "1px solid var(--ivory-deep)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => {
                  if (!isVideo) {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isVideo) {
                    e.currentTarget.style.borderColor = "var(--ivory-deep)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {!card.video && (
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.8rem" }}>
                    {card.title}
                  </div>
                )}
                {card.video ? (
                  <div style={{ position: "relative", paddingTop: "56.25%", width: "100%", overflow: "hidden", background: "#000" }}>
                    <iframe
                      src={card.src}
                      title="YouTube video player"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--slate-deep)", lineHeight: 1.8 }}>
                    {card.content}
                  </div>
                )}
              </div>
            );
          })}
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