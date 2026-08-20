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
            </div>

            <div className="bio-affiliation">
              <SectionLabel>Hospital Affiliations</SectionLabel>
              <a
                className="bio-affiliation-note"
                href="https://www.pacehospital.com/dr-b-arvind"
                target="_blank"
                rel="noopener noreferrer"
              >
                PACE Hospitals, Hyderabad
              </a>
            </div>
          </div>

          <div>
            <SectionLabel>Biography</SectionLabel>
<h2 className="about-heading-medium" style={{ color: "var(--slate-deep)", fontWeight: 400, marginBottom: "2rem" }}>
              Dr. B. Arvind<br />
              <span className="bio-subhead" style={{ color: "var(--gold)" }}>BDS · MDS · RCS Fellow · Maxillofacial Surgeon</span>
            </h2>

            {[
              "Dr. B. Arvind is a dedicated Oral and Maxillofacial Oncosurgeon at PACE Hospitals, Hyderabad. His practice focuses on Oral and Head and Neck Oncology, Maxillofacial trauma, Facial reconstruction, Orthognathic surgery, TMJ disorders, and Precision oral surgery.",
              "He completed his BDS and MDS in Oral and Maxillofacial Surgery at Kamineni Institute of Dental Sciences, followed by a Fellowship in Oral Oncosurgery at HCG Cancer Hospital, Bengaluru, affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), where he gained extensive exposure to the surgical management of oral and head and neck cancers.",
              "Dr. Arvind is committed to delivering evidence based, patient centred care with an emphasis on precise surgical planning, functional rehabilitation, and long-term outcomes. His approach is founded on clear communication, surgical precision, and compassionate care, ensuring that every patient is actively involved in their treatment journey.",
              '"My foremost commitment is to my patients — to offer clear communication, honest advice, and evidence based surgical care only when it is truly in their best interest, with the goal of restoring health, function, and quality of life."',
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
        { label: "Fellowship in Oral Oncosurgery", detail: "HCG Cancer Hospital, Bengaluru" },
        { label: "Senior Clinical Fellow", detail: "RCS London" },
      ],
    },
    {
      title: "Memberships",
      items: [
        { label: "AOMSI", detail: "Association of Oral & Maxillofacial Surgeons of India" },
        { label: "FHNO", detail: "Foundation for Head and Neck Oncology" },
        { label: "DCI Registered", detail: "Dental Council of India" },
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
              content: "Dr. B Arvind is a Consultant Oral & Maxillofacial Oncosurgeon with over four years of clinical practice in Oral and Head & Neck cancer surgery, Maxillofacial trauma & reconstruction, Orthognathic surgery and precision oral surgery.",
            },
            {
              title: "Practice Scope",
              content: "His practice focuses on surgical planning, primary resection of Oral and Head and Neck Tumours, Neck dissections, Reconstructive procedures, Orthognathic surgery, Maxillofacial trauma care, Implant surgery, and Minor Oral surgical procedures.",
            },
            {
              title: "Consultations & Care",
              content: "Dr. Arvind is available for hospital consultations and surgical care at PACE Hospitals, Hitech-city from 9:00 AM to 6:00 PM, Monday to Saturday. He also consults at the Nallagandla Clinic from 6:30 PM to 9:00 PM, Monday to Saturday.",
            },
            {
              title: "Patient-Centred Philosophy",
              content: '"My foremost commitment is to my patients — to offer clear communication, honest advice, and evidence based surgical care only when it is truly in their best interest, with the goal of restoring health, function, and quality of life."',
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