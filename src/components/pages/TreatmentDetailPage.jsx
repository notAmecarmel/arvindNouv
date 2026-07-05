import { useEffect, useState } from "react";
import { SectionLabel, ConsultCTA, ImageBlock } from "../ui/SharedComponents";
import "./TreatmentDetailPage.css";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

const EXPERTISE_AREAS = [
  {
    title: "Oncology",
    subtitle: "Management Of Head & Neck Cancers",
    paragraphs: [
      "Oral cancer arises in the tissues of the mouth, including the tongue, cheeks, gums, floor of the mouth, and lips. It may present as a non-healing ulcer, lump, or white/red patch, and early detection plays a critical role in successful treatment.",
      "Dr. Arvind offers a comprehensive management of oral cancer, combining precise surgical care with functional restoration.",
    ],
    list: [
      "Early diagnosis and staging through clinical evaluation and biopsy.",
      "Oncologic surgery with complete tumor removal.",
      "Neck dissection for lymph node management.",
      "Reconstructive surgery to restore form and function.",
      "Post-treatment rehabilitation through speech and swallow therapy.",
    ],
  },
  {
    title: "Salivary gland tumours",
    subtitle: "Management OF Salivary gland tumours",
    paragraphs: [
      "Salivary glands comprises of major and minor salivary glands with the major glands situated in the Cheek, floor of the mouth and neck. Most of the lesions affecting the salivary gland are benign, often presenting as a swelling near the ear, jaw or inside of the mouth.",
      "Dr. Arvind specializes in the evaluation and surgical management of salivary gland tumours, with a focus on safety, precision, and functional preservation.",
    ],
    list: [
      "Accurate diagnosis using clinical assessment, imaging, and biopsy.",
      "Surgical excision tailored to the type and location of the tumour.",
      "Facial nerve preservation in parotid surgeries.",
      "Management of malignant tumours with multidisciplinary care.",
      "Reconstruction and rehabilitation when required.",
    ],
  },
  {
    title: "Neck masses and Lymph node biopsy",
    paragraphs: [
      "Neck masses are common and may arise from infections, benign growths, or cancers. A persistent or enlarging neck swelling requires timely evaluation to determine its cause.",
      "Dr. Arvind provides comprehensive evaluation and management of neck masses, with a focus on accurate diagnosis and appropriate treatment.",
    ],
    list: [
      "Clinical assessment and imaging to identify the nature of the swelling.",
      "Ultrasound-guided FNAC / biopsy for definitive diagnosis.",
      "Excisional biopsy when indicated.",
      "Management of enlarged lymph nodes, including cancer-related cases.",
      "Neck dissection for advanced or malignant conditions.",
    ],
  },
  {
    title: "Orthognathic surgery",
    paragraphs: [
      "Orthognathic surgery is performed to correct malalignment of the jaws, improving bite, facial balance, speech, and breathing. It is commonly recommended for patients with jaw discrepancies that cannot be corrected with braces alone.",
      "Dr. Arvind offers comprehensive evaluation and surgical correction of jaw deformities, with a focus on functional improvement and facial harmony.",
    ],
    list: [
      "Assessment and treatment planning in coordination with orthodontists.",
      "Correction of jaw misalignment (upper jaw, lower jaw, or both).",
      "Improvement of bite (occlusion) and chewing function.",
      "Enhancement of facial aesthetics and symmetry.",
      "Management of associated conditions such as sleep-related breathing issues.",
    ],
  },
  {
    title: "Maxillofacial trauma",
    paragraphs: [
      "Maxillofacial trauma involves injuries to the face, jaws, and surrounding structures, commonly resulting from road traffic accidents, falls, or assaults. These injuries may affect facial bones, teeth, soft tissues, and function, requiring timely and specialized care.",
      "Dr. Arvind provides comprehensive management of facial trauma, focusing on both functional recovery and aesthetic restoration.",
    ],
    list: [
      "Emergency assessment and stabilization.",
      "Management of facial fractures (jaw, cheekbone, orbital bones).",
      "Open reduction and internal fixation (ORIF) for precise alignment.",
      "Soft tissue repair and scar minimization.",
      "Dental and occlusal rehabilitation.",
    ],
  },
  {
    title: "Management of Benign Pathologies of Head and Neck region",
    paragraphs: [
      "Benign (non-cancerous) conditions of the head and neck include a wide range of swellings and lesions affecting the oral cavity, jaw bones, and soft tissues. While not malignant, these conditions can grow, cause discomfort, or affect function if left untreated.",
      "Dr. Arvind provides comprehensive management of benign head & neck pathologies, with a focus on precise diagnosis and effective treatment.",
    ],
    list: [
      "Clinical evaluation and imaging for accurate diagnosis.",
      "Biopsy when indicated to confirm the nature of the lesion.",
      "Surgical excision of benign tumors and soft tissue lesions.",
      "Management of jaw cysts and tumors (odontogenic cysts, benign jaw tumors).",
      "Minimally invasive techniques wherever appropriate.",
    ],
  },
  {
    title: "Implant dentistry & Minor oral surgical procedures",
    paragraphs: [
      "Implant dentistry and minor oral surgery focus on restoring missing teeth and managing routine surgical conditions of the oral cavity with precision, safety, and long-term success.",
      "Dr. Arvind provides comprehensive implant and minor oral surgical care, tailored to each patient.",
    ],
    list: [
      "Dental implant placement for replacement of missing teeth.",
      "Single-tooth and full-arch rehabilitation.",
      "Bone grafting and site preparation when required.",
      "Atraumatic tooth extractions.",
      "Surgical removal of impacted teeth (including wisdom teeth).",
      "Management of oral lesions and minor soft tissue procedures.",
    ],
  },
  {
    title: "Advanced Implant Dentistry",
    paragraphs: [
      "For patients with severe bone loss or complex cases, I offer advanced solutions that avoid or minimize the need for grafting.",
    ],
    list: [
      "Zygomatic implants for rehabilitation in cases of upper jaw bone deficiency.",
      "Pterygoid implants for posterior maxillary support.",
      "Full-arch immediate loading protocols (teeth in a day, when appropriate).",
      "Complex implant rehabilitation with functional and aesthetic focus.",
    ],
  },
];

/* ── Treatments List Page ── */
export default function TreatmentsPage({ navigate }) {
  const [expanded, setExpanded] = useState(() => EXPERTISE_AREAS.map(() => false));
  const locationKey = typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetSection = params.get("section");

    if (!targetSection) {
      return;
    }

    const targetIndex = EXPERTISE_AREAS.findIndex((area) => slugify(area.title) === targetSection);

    if (targetIndex === -1) {
      return;
    }

    setExpanded(() => {
      const next = Array(EXPERTISE_AREAS.length).fill(false);
      next[targetIndex] = true;
      return next;
    });

    requestAnimationFrame(() => {
      const node = document.getElementById(`treatment-section-${targetSection}`);
      if (!node) return;

      const top = node.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
  }, [locationKey]);

  return (
    <>
      <div className="treatments-hero">
        <div className="container">
          <SectionLabel>Area of expertise</SectionLabel>
          <h1 className="treatments-hero-title">
            Focused Surgical Care<br /><em>in Oral & Maxillofacial Surgery</em>
          </h1>
          <p className="treatments-hero-copy">
            Each procedure is supported by advanced technology, rigorous training, and a commitment to outcomes that last.
          </p>
        </div>
      </div>

      <section className="treatments-list-section">
        <div className="container">
          <div className="expertise-grid">
            {EXPERTISE_AREAS.map((area, i) => {
              const isExpanded = expanded[i];
              return (
                <div key={i} id={`treatment-section-${slugify(area.title)}`} className="expertise-card">
                {area.subtitle && (
                  <div className="expertise-subtitle">
                    {area.subtitle}
                  </div>
                )}
                <h3 className="expertise-title">
                  {area.title}
                </h3>
                {area.paragraphs.slice(0, isExpanded ? undefined : 1).map((text, index) => (
                  <p key={index} className="expertise-copy">
                    {text}
                  </p>
                ))}
                {area.list && isExpanded && (
                  <ul className="expertise-list">
                    {area.list.map((item, j) => (
                      <li key={j} className="expertise-list-item">{item}</li>
                    ))}
                  </ul>
                )}
                <div className="expertise-toggle">
                  <button
                    type="button"
                    onClick={() => setExpanded((prev) => {
                      const next = [...prev];
                      next[i] = !next[i];
                      return next;
                    })}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            );
          })}
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
      <div className="tx-detail-hero">
        <div className="container">
          <div className="tx-detail-back-link" onClick={() => navigate("/treatments")}>
            ← All Treatments
          </div>
          <SectionLabel>{treatment.subtitle}</SectionLabel>
          <h1 className="tx-detail-title">
            {treatment.title}
          </h1>
          <p className="tx-detail-tagline">
            {treatment.tagline}
          </p>
        </div>
      </div>

      <div className="tx-detail-page-body">
        <div className="container">
          <div className="tx-detail-body">
            {/* Main content */}
            <div>
              {/* Overview */}
              <div className="tx-section-head">Procedure Overview</div>
              <p className="tx-overview-copy">
                {treatment.overview}
              </p>

              {/* Image */}
              <div className="tx-image-wrapper">
                <ImageBlock aspectRatio="16/9" label="Procedure Illustration Placeholder" />
              </div>

              {/* Am I a Candidate */}
              <div className="tx-section-head">Am I a Candidate?</div>
              <ul className="tx-candidate-list">
                {treatment.candidacy.map((c, i) => (
                  <li key={i} className="tx-candidate-item">
                    <span className="tx-candidate-bullet">◆</span>
                    {c}
                  </li>
                ))}
              </ul>

              {/* Recovery */}
              <div className="tx-section-head">Recovery</div>
              <div className="tx-recovery-card">
                {treatment.recovery}
              </div>

              {/* FAQs */}
              <div className="tx-section-head">Frequently Asked Questions</div>
              {treatment.faqs.map((faq, i) => (
                <div key={i} className="tx-faq-item">
                  <div className="tx-faq-q">{faq.q}</div>
                  <div className="tx-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="tx-sidebar">
              {/* Technology */}
              <div className="tx-sidebar-card">
                <div className="tx-section-head">Technology Used</div>
                {treatment.technology.map((t, i) => (
                  <div key={i} className="tx-sidebar-tech-item">
                    {t}
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="tx-cta-card">
                <div className="tx-cta-title">
                  Is this procedure right for you?
                </div>
                <p className="tx-cta-text">
                  A private consultation with Dr. Mehta is the only way to know with certainty.
                </p>
                <button className="btn btn--gold tx-cta-button" onClick={() => navigate("/consultation")}>
                  Request Consultation
                </button>
                <div className="tx-cta-note">
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