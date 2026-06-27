import {
  SectionLabel,
  SectionHeading,
  TreatmentCard,
  ConsultCTA,
  GoldDivider,
} from "../ui/SharedComponents";
import "./TreatmentsPage.css";

const TREATMENTS = [
  {
    title: "Jaw Correction Surgery",
    tagline: "Orthognathic surgery to align jaws, improve bite, and restore facial balance.",
    icon: "🦷",
    path: "/treatments/jaw-correction",
  },
  {
    title: "Oral Cancer Treatment",
    tagline: "Comprehensive diagnosis and surgical care for oral and maxillofacial cancers.",
    icon: "🎗️",
    path: "/treatments/oral-cancer",
  },
  {
    title: "TMJ Disorder Care",
    tagline: "Conservative and surgical management for jaw joint pain and dysfunction.",
    icon: "🔧",
    path: "/treatments/tmj-disorders",
  },
  {
    title: "Facial Trauma Reconstruction",
    tagline: "Expert repair of facial and jaw injuries with precision and functional restoration.",
    icon: "🩺",
    path: "/treatments/facial-trauma",
  },
];

export default function TreatmentsPage({ navigate }) {
  return (
    <div className="treatments-page">
      <section className="treatments-hero">
        <div className="container">
          <SectionLabel>Treatments</SectionLabel>
          <SectionHeading
            title="Surgical and Reconstructive Care"
            subtitle="Specialist facial and jaw treatments delivered with precision, compassion, and experience."
          />
          <p className="treatments-intro">
            Dr. B. Arvind specialises in maxillofacial surgery, facial reconstruction, and oncology-focused care for patients requiring advanced surgical treatment.
          </p>
        </div>
      </section>

      <section className="treatments-grid-section">
        <div className="container">
          <div className="treatments-grid">
            {TREATMENTS.map((treatment) => (
              <TreatmentCard
                key={treatment.path}
                title={treatment.title}
                tagline={treatment.tagline}
                icon={treatment.icon}
                onClick={() => navigate(treatment.path)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="treatments-detail-block">
        <div className="container treatments-detail-grid">
          <div>
            <h3>Why choose specialist maxillofacial care?</h3>
            <p>
              Treatment of facial and jaw conditions requires the expertise of a specialist surgeon who understands the complex anatomy, function, and aesthetics of the face.
            </p>
            <ul>
              <li>Precise surgical planning and advanced imaging</li>
              <li>Functional restoration alongside aesthetic balance</li>
              <li>Personalised care for oncology, trauma, and orthognathic needs</li>
            </ul>
          </div>
          <div className="treatments-detail-box">
            <div className="treatments-detail-label">In practice</div>
            <p>
              Patients receive care in accredited facilities with a focus on safe procedure pathways, clear communication, and supportive recovery planning.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />
      <ConsultCTA navigate={navigate} />
    </div>
  );
}
