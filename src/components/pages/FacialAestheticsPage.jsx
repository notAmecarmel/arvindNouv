import { SectionLabel, SectionHeading, ImageBlock, ConsultCTA } from "../ui/SharedComponents";

const AESTHETICS = [
  {
    category: "Surgical",
    procedures: [
      { name: "Rhinoplasty", desc: "Surgical reshaping of the nose for improved proportion and nasal function.", tag: "Surgical" },
      { name: "Blepharoplasty", desc: "Eyelid surgery to address drooping, excess skin, and periorbital hollowing.", tag: "Surgical" },
      { name: "Facelift (SMAS)", desc: "Deep-plane facial rejuvenation for lasting, natural results.", tag: "Surgical" },
      { name: "Fat Grafting", desc: "Autologous volume restoration for a naturally refreshed appearance.", tag: "Surgical" },
      { name: "Chin Augmentation", desc: "Implant or sliding genioplasty to define facial profile and balance.", tag: "Surgical" },
    ],
  },
  {
    category: "Non-Surgical",
    procedures: [
      { name: "Botulinum Toxin", desc: "Precision treatment for dynamic wrinkles and facial slimming.", tag: "Non-Surgical" },
      { name: "Dermal Fillers", desc: "Hyaluronic acid-based volume restoration and contour enhancement.", tag: "Non-Surgical" },
      { name: "Thread Lifts", desc: "Minimally invasive tissue lifting with biostimulatory threads.", tag: "Non-Surgical" },
      { name: "PRP Therapy", desc: "Platelet-rich plasma for skin rejuvenation and hair restoration.", tag: "Non-Surgical" },
    ],
  },
];

function AestheticsHero() {
  return (
    <div style={{
      paddingTop: "10rem",
      paddingBottom: "0",
      background: "var(--ivory)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end", paddingBottom: "0" }}>
          <div style={{ paddingBottom: "5rem" }}>
            <SectionLabel>Facial Aesthetics</SectionLabel>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              color: "var(--slate-deep)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}>
              Natural Harmony.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Surgical Precision.</em>
            </h1>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              color: "var(--stone-dark)",
              fontStyle: "italic",
              lineHeight: 1.8,
              maxWidth: "400px",
              marginBottom: "2.5rem",
            }}>
              Aesthetic surgery at this level is not about changing who you are. It is about letting more of you come through.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {["Natural Results", "Medically Grounded", "No Overcorrection", "Private & Discreet"].map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--stone)",
                  color: "var(--stone-dark)",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <ImageBlock aspectRatio="4/5" label="Aesthetic Focus Image"
              style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophySection() {
  return (
    <section style={{
      padding: "7rem 0",
      background: "var(--slate-deep)",
      position: "relative",
    }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "var(--ivory)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}>
              Less is more.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Subtlety is surgical.</em>
            </h2>

            {[
              "Dr. Mehta's aesthetic philosophy begins with restraint. The goal is never transformation — it is refinement.",
              "Every procedure is preceded by detailed facial analysis, proportion mapping, and an honest conversation about what surgery can and cannot achieve.",
              "The result should make you look like yourself — only rested, balanced, and confident.",
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                color: "rgba(248,245,240,0.55)",
                fontStyle: "italic",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}>
                {p}
              </p>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Facial Analysis", desc: "Digital mapping of facial thirds, proportions, and golden ratio assessment before any procedure." },
              { title: "Surgical Restraint", desc: "Dr. Mehta does not perform procedures that would compromise natural facial character or long-term health." },
              { title: "Surgical & Non-Surgical Combined", desc: "A holistic approach — often the best results come from combining modalities at appropriate intervals." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "1.75rem 2rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,151,90,0.15)",
              }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--ivory)", fontWeight: 500, marginBottom: "0.6rem" }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "rgba(248,245,240,0.4)", lineHeight: 1.7, letterSpacing: "0.03em" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProceduresGrid({ navigate }) {
  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading eyebrow="Procedures" title="Aesthetic Treatments" />
        {AESTHETICS.map((cat) => (
          <div key={cat.category} style={{ marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--stone-mid)",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--ivory-deep)",
            }}>
              {cat.category}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {cat.procedures.map((p) => (
                <div key={p.name} style={{
                  padding: "2rem",
                  background: "var(--ivory)",
                  border: "1px solid var(--ivory-deep)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--ivory-deep)";
                    e.currentTarget.style.transform = "none";
                  }}
                  onClick={() => navigate("/consultation")}
                >
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--slate-deep)", fontWeight: 500, marginBottom: "0.6rem" }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--stone-mid)", lineHeight: 1.7, letterSpacing: "0.02em" }}>
                    {p.desc}
                  </div>
                  <div style={{ marginTop: "1.25rem", fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
                    Enquire →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FacialAestheticsPage({ navigate }) {
  return (
    <>
      <AestheticsHero />
      <PhilosophySection />
      <ProceduresGrid navigate={navigate} />
      <ConsultCTA navigate={navigate} />
    </>
  );
}