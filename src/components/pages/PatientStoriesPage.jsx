import { SectionLabel, SectionHeading, TestimonialCard, ImageBlock, ConsultCTA } from "../ui/SharedComponents";

const STORIES = [
  {
    name: "Vikram Rao",
    age: 34,
    location: "Mumbai",
    procedure: "Orthognathic Surgery",
    duration: "12-month journey",
    quote: "After years of jaw pain and self-consciousness, Dr. Mehta gave me not just a corrected jaw — but an entirely different relationship with my own face. The care was exceptional at every step.",
    result: "Complete jaw realignment. No pain. Dramatically improved profile.",
    tags: ["Jaw Correction", "Functional", "Transformative"],
  },
  {
    name: "Aisha Patel",
    age: 29,
    location: "Bangalore",
    procedure: "Facial Reconstruction",
    duration: "Post-trauma recovery",
    quote: "After my accident, I thought I'd never look like myself again. Dr. Mehta spent months reconstructing what was lost — and then some. I'm back.",
    result: "Full anatomical restoration following mid-face fractures.",
    tags: ["Reconstruction", "Trauma", "Recovery"],
  },
  {
    name: "Nikhil Desai",
    age: 47,
    location: "Delhi",
    procedure: "TMJ Treatment",
    duration: "6-month treatment",
    quote: "Three years of daily jaw pain. Countless doctors. Then Dr. Mehta — who diagnosed the problem in the first consultation and resolved it in six months. I feel twenty years younger.",
    result: "Complete resolution of chronic TMJ pain and restricted opening.",
    tags: ["TMJ", "Pain Relief", "Functional"],
  },
  {
    name: "Shreya Menon",
    age: 38,
    location: "Chennai",
    procedure: "Rhinoplasty",
    duration: "8-month result",
    quote: "I was terrified of looking 'done'. Dr. Mehta completely understood. The result is subtle — but it's exactly what I always wanted. My nose, just better.",
    result: "Natural rhinoplasty with improved dorsal profile and tip definition.",
    tags: ["Aesthetics", "Rhinoplasty", "Natural"],
  },
];

function StoriesHero() {
  return (
    <div style={{
      paddingTop: "10rem",
      paddingBottom: "5rem",
      background: "var(--ivory)",
      borderBottom: "1px solid var(--ivory-deep)",
    }}>
      <div className="container">
        <SectionLabel>Patient Stories</SectionLabel>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: "var(--slate-deep)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          marginBottom: "1.25rem",
          maxWidth: "640px",
        }}>
          Stories of<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Trust & Transformation</em>
        </h1>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.05rem",
          color: "var(--stone-dark)",
          fontStyle: "italic",
          lineHeight: 1.8,
          maxWidth: "480px",
        }}>
          Each patient journey is unique. Shared here — with full consent — to help others understand what is possible.
        </p>
      </div>
    </div>
  );
}

function FeaturedStory() {
  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionLabel>Featured Journey</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "var(--slate-deep)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              "I'd forgotten what it felt like to not be in pain."
            </h2>

            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              color: "var(--stone-dark)",
              fontStyle: "italic",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}>
              Vikram spent three years misdiagnosed with migraine before a referral to Dr. Mehta confirmed bilateral TMJ disc displacement. Six months of staged treatment later — he describes the relief as "like someone lifting a weight off my face I didn't know I was carrying."
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}>
              {[
                { label: "Procedure", value: "TMJ Arthroscopy" },
                { label: "Duration", value: "6 Months" },
                { label: "Location", value: "Mumbai" },
                { label: "Result", value: "Full Resolution" },
              ].map(item => (
                <div key={item.label} style={{ padding: "1rem", background: "var(--ivory)", borderTop: "2px solid var(--gold)" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone-mid)", marginBottom: "0.25rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--slate-deep)" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              color: "var(--stone-mid)",
              fontStyle: "italic",
              letterSpacing: "0.06em",
            }}>
              — Vikram R., 34, Mumbai
            </div>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <ImageBlock aspectRatio="3/4" label="Before" />
              <ImageBlock aspectRatio="3/4" label="After" style={{ background: "linear-gradient(160deg, #D4CCB8 0%, #A89F8C 100%)" }} />
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              color: "var(--stone-mid)",
              letterSpacing: "0.08em",
              textAlign: "center",
              marginTop: "0.75rem",
            }}>
              Shared with patient consent. Results are individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--ivory)" }}>
      <div className="container">
        <SectionHeading eyebrow="Video Testimonials" title="Hear from Our Patients" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {["Vikram R.", "Aisha P.", "Shreya M."].map((name, i) => (
            <div key={i} style={{ cursor: "pointer", position: "relative" }}>
              <div style={{
                aspectRatio: "16/9",
                background: "var(--slate-deep)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(160deg, #2C2C2A 0%, #1A1A18 100%)",
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: "48px", height: "48px",
                    borderRadius: "50%",
                    background: "rgba(184,151,90,0.9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem",
                    color: "#fff",
                    transition: "transform 0.3s",
                  }}>
                    ▶
                  </div>
                </div>
                <div style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                  fontFamily: "var(--font-sans)", fontSize: "0.65rem",
                  letterSpacing: "0.1em", color: "rgba(248,245,240,0.5)",
                  textTransform: "uppercase",
                }}>
                  Video Placeholder
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--slate-deep)", fontWeight: 500 }}>{name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--stone-mid)", marginTop: "0.2rem", letterSpacing: "0.05em" }}>Patient Testimonial · {["Jaw Surgery", "Reconstruction", "Rhinoplasty"][i]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllTestimonials() {
  return (
    <section style={{ padding: "7rem 0", background: "var(--white)" }}>
      <div className="container">
        <SectionHeading eyebrow="Written Reviews" title="In Their Words" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {STORIES.map((s, i) => (
            <TestimonialCard key={i} quote={s.quote} name={s.name} procedure={s.procedure} location={s.location} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PatientStoriesPage({ navigate }) {
  return (
    <>
      <StoriesHero />
      <FeaturedStory />
      <VideoTestimonials />
      <AllTestimonials />
      <ConsultCTA navigate={navigate} />
    </>
  );
}