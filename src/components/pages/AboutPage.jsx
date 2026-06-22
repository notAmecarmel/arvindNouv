import hero2 from "../../assets/hero2.webp";
import { SectionLabel, SectionHeading, ImageBlock, ConsultCTA } from "../ui/SharedComponents";
import "./AboutPage.css";

function PageHero() {
  return (
    <div className="page-hero">
      <div className="page-hero-overlay" />
      <div className="container">
        <div className="page-hero-copy">
          <SectionLabel>About</SectionLabel>
          <h1 className="about-heading-large" style={{ color: "var(--ivory)", fontWeight: 400, marginBottom: "1.5rem" }}>
            The Surgeon Behind<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>The Practice</em>
          </h1>
          <p className="about-copy" style={{ color: "var(--ivory)", fontStyle: "italic" }}>
            Rigorous training. Years of practice. An unwavering commitment to the patient in front of him.
          </p>
        </div>
      </div>
    </div>
  );
}

function Biography() {
  return (
    <section className="bio-section">
      <div className="container">
        <div className="bio-grid">
          <div>
            <div className="bio-image-wrapper">
              <div className="bio-image">
                <img className="bio-image__img" src={hero2} alt="Portrait of Dr. B. Arvind" />
              </div>
              <div className="degree-card">
                <div className="degree-title">BDS · MDS</div>
                <div className="degree-meta">RGUHS · HCG Bengaluru · RCS London</div>
              </div>
            </div>

            <div className="bio-affiliation">
              <SectionLabel>Hospital Affiliations</SectionLabel>
              <div className="bio-affiliation-note">
                PACE Hospitals, Hyderabad
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Biography</SectionLabel>
<h2 className="about-heading-medium" style={{ color: "var(--slate-deep)", fontWeight: 400, marginBottom: "2rem" }}>
              Dr. B. Arvind<br />
              <span className="bio-subhead" style={{ color: "var(--gold)" }}>BDS · MDS · RCS Fellow · Maxillofacial Surgeon</span>
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

            <div className="quote-box about-quote" style={{
              fontStyle: "italic",
              color: "var(--slate-deep)",
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
    <section className="credentials-section">
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Education & Recognition" />

        <div className="credentials-grid">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="credential-title">
                {sec.title}
              </h3>
              {sec.items.map((item) => (
                <div key={item.label} className="credential-row">
                  <span className="credential-label">
                    {item.label}
                  </span>
                  <span className="credential-detail">
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
    <section className="publications-section">
      <div className="container">
        <SectionHeading eyebrow="About the Surgeon" title="Focused Surgical Care in Oral & Maxillofacial Surgery" />
        <div className="publications-grid">
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
              <div
                key={i}
                className={isVideo ? "publication-card publication-card--video" : "publication-card"}
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
                  <div className="publication-card-title">
                    {card.title}
                  </div>
                )}
                {card.video ? (
                  <div className="video-card">
                    <iframe
                      src={card.src}
                      title="YouTube video player"
                      className="video-card__iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="publication-copy">
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