import { SectionLabel, SectionHeading, ImageBlock, ConsultCTA } from "../ui/SharedComponents";

export default function MediaPage({ navigate }) {
  return (
    <>
      <style>{`
        .media-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          background: var(--slate-deep);
        }
        .media-card {
          background: var(--white);
          border: 1px solid var(--ivory-deep);
          transition: all 0.35s;
          cursor: pointer;
          overflow: hidden;
        }
        .media-card:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .award-card {
          padding: 2rem;
          background: var(--ivory);
          border: 1px solid var(--ivory-deep);
          text-align: center;
          transition: all 0.3s;
        }
        .award-card:hover {
          border-color: var(--gold);
        }
      `}</style>

      {/* Hero */}
      <div className="media-hero">
        <div className="container">
          <SectionLabel>Media & Publications</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--ivory)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            maxWidth: "640px",
          }}>
            Authority Built Through<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Contribution</em>
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "rgba(248,245,240,0.5)",
            fontStyle: "italic",
            lineHeight: 1.8,
            maxWidth: "480px",
          }}>
            Research, teaching, and public education — pillars of a practice founded on evidence and excellence.
          </p>
        </div>
      </div>

      {/* Awards */}
      <section style={{ padding: "6rem 0", background: "var(--ivory)" }}>
        <div className="container">
          <SectionHeading eyebrow="Recognition" title="Awards & Honours" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { year: "2023", title: "Best Maxillofacial Surgeon", body: "IDA National Awards" },
              { year: "2022", title: "Excellence in Teaching", body: "Maharashtra Medical Council" },
              { year: "2021", title: "Outstanding Research", body: "AOMSI Annual Conference" },
              { year: "2020", title: "Fellowship of Distinction", body: "IAOMFS" },
              { year: "2019", title: "Top Doctor — Facial Surgery", body: "Outlook Health Awards" },
              { year: "2017", title: "Young Achiever in Surgery", body: "Times of India Health Listing" },
            ].map((a) => (
              <div key={a.title} className="award-card">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", opacity: 0.4, lineHeight: 1, marginBottom: "0.75rem" }}>
                  {a.year}
                </div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--slate-deep)", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.4 }}>
                  {a.title}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--stone-mid)", letterSpacing: "0.08em" }}>
                  {a.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section style={{ padding: "6rem 0", background: "var(--white)" }}>
        <div className="container">
          <SectionHeading eyebrow="International Presence" title="Conferences & Lectures" />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { year: "2024", event: "IAOMFS World Congress — Speaker", location: "Tokyo, Japan", topic: "Virtual Surgical Planning in Complex Orthognathic Cases" },
              { year: "2023", event: "AOMSI Annual Conference — Keynote", location: "Mumbai, India", topic: "TMJ Arthroscopy: Outcomes Over a Decade" },
              { year: "2022", event: "EAO Congress — Invited Lecturer", location: "Vienna, Austria", topic: "Immediate Loading Protocols in Compromised Bone" },
              { year: "2022", event: "ASOMFS Symposium", location: "Singapore", topic: "CAD/CAM Reconstruction in Post-Oncological Patients" },
              { year: "2021", event: "American Association of OMFS — Paper Presentation", location: "Virtual", topic: "Piezoelectric Surgery in Third Molar Management" },
              { year: "2019", event: "Craniofacial Surgery World Meeting", location: "Barcelona, Spain", topic: "Free Flap Outcomes in Mandibular Reconstruction" },
            ].map((conf, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "2rem",
                alignItems: "start",
                padding: "1.75rem 0",
                borderBottom: "1px solid var(--ivory-deep)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--gold)", opacity: 0.5 }}>
                  {conf.year}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--slate-deep)", fontWeight: 500, marginBottom: "0.4rem" }}>
                    {conf.event}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--stone-mid)", fontStyle: "italic", letterSpacing: "0.04em" }}>
                    {conf.topic}
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--stone-mid)", letterSpacing: "0.08em", textAlign: "right", whiteSpace: "nowrap" }}>
                  {conf.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ padding: "6rem 0", background: "var(--ivory)" }}>
        <div className="container">
          <SectionHeading eyebrow="Research" title="Selected Publications" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {[
              { title: "Advances in Virtual Surgical Planning for Orthognathic Surgery", journal: "Journal of Oral and Maxillofacial Surgery", year: "2023", type: "Original Research" },
              { title: "Long-Term Outcomes of TMJ Disc Repositioning: A 10-Year Retrospective Study", journal: "Oral Surgery, Oral Medicine, Oral Pathology", year: "2022", type: "Clinical Study" },
              { title: "Mandibular Reconstruction Using CAD/CAM Titanium Plates: Case Series", journal: "British Journal of Oral and Maxillofacial Surgery", year: "2021", type: "Case Series" },
              { title: "Facial Trauma in Polytrauma Patients: Prioritisation and Management", journal: "Indian Journal of OMFS", year: "2020", type: "Review Article" },
              { title: "Piezoelectric Surgery vs Conventional in Third Molar Extraction", journal: "Journal of Clinical and Diagnostic Research", year: "2019", type: "RCT" },
              { title: "Platelet-Rich Fibrin in Postoperative Healing: A Prospective Study", journal: "Journal of Maxillofacial and Oral Surgery", year: "2019", type: "Prospective Study" },
            ].map((pub, i) => (
              <div key={i} className="media-card" style={{ padding: "2rem" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                  {pub.type} · {pub.year}
                </div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.98rem", color: "var(--slate-deep)", lineHeight: 1.55, marginBottom: "0.75rem", fontWeight: 500 }}>
                  {pub.title}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--stone-mid)", letterSpacing: "0.04em", fontStyle: "italic" }}>
                  {pub.journal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section style={{ padding: "6rem 0", background: "var(--white)" }}>
        <div className="container">
          <SectionHeading eyebrow="Press" title="Media Features" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { outlet: "Times of India", title: "India's Top 10 Surgeons to Know", type: "Profile" },
              { outlet: "NDTV Health", title: "Understanding Jaw Surgery", type: "Interview" },
              { outlet: "Forbes India", title: "Doctors Transforming Healthcare", type: "Feature" },
              { outlet: "Vogue India", title: "The Surgeon Behind Natural Results", type: "Profile" },
              { outlet: "The Hindu", title: "Advances in Facial Reconstruction", type: "Expert Column" },
              { outlet: "Hindustan Times", title: "When Pain Has a Surgical Answer", type: "Interview" },
            ].map((m, i) => (
              <div key={i} className="media-card">
                <div style={{
                  padding: "1.25rem 1.5rem",
                  background: "var(--slate-deep)",
                  borderBottom: "1px solid rgba(184,151,90,0.15)",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--ivory)" }}>
                    {m.outlet}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.6rem" }}>
                    {m.type}
                  </div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--slate-deep)", lineHeight: 1.5 }}>
                    {m.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultCTA navigate={navigate} />
    </>
  );
}