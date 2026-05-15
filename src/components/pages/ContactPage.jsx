import { SectionLabel } from "../ui/SharedComponents";

const LOCATIONS = [
  {
    name: "Breach Candy Clinic",
    address: "Suite 12, Breach Candy Surgical Centre\nWarden Road, Mumbai 400 036",
    phone: "+91 98200 XXXXX",
    hours: "Mon–Fri: 10am–6pm\nSat: 10am–2pm",
    primary: true,
  },
  {
    name: "Bandra Clinic",
    address: "202, Zama House\nLinking Road, Bandra West\nMumbai 400 050",
    phone: "+91 98200 XXXXX",
    hours: "Tue & Thu: 2pm–7pm",
    primary: false,
  },
  {
    name: "Powai Clinic",
    address: "Level 3, Hiranandani Hospital\nPowai, Mumbai 400 076",
    phone: "+91 98200 XXXXX",
    hours: "Wed: 11am–5pm",
    primary: false,
  },
];

export default function ContactPage({ navigate }) {
  return (
    <>
      <style>{`
        .contact-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          background: var(--ivory);
          border-bottom: 1px solid var(--ivory-deep);
        }
        .location-card {
          background: var(--white);
          border: 1px solid var(--ivory-deep);
          overflow: hidden;
          transition: all 0.35s;
        }
        .location-card:hover {
          border-color: var(--gold);
          box-shadow: var(--shadow-md);
        }
        .location-card.primary {
          border-color: var(--gold);
        }
        .map-placeholder {
          height: 180px;
          background: linear-gradient(160deg, #EDE8E0 0%, #D4CCB8 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--stone-mid);
        }
        .contact-field {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--white);
          border: 1px solid var(--stone);
          border-radius: 0;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--slate-deep);
          outline: none;
          transition: border-color 0.3s;
          margin-bottom: 1rem;
          display: block;
        }
        .contact-field:focus { border-color: var(--gold); }
        .contact-field::placeholder { color: var(--stone-mid); }
      `}</style>

      {/* Hero */}
      <div className="contact-hero">
        <div className="container">
          <SectionLabel>Contact</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: "var(--slate-deep)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            maxWidth: "580px",
          }}>
            Reach Us.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>We respond promptly.</em>
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            color: "var(--stone-dark)",
            fontStyle: "italic",
            lineHeight: 1.8,
            maxWidth: "440px",
          }}>
            Three clinic locations across Mumbai. WhatsApp enquiries welcome. All communications are held in strict confidence.
          </p>
        </div>
      </div>

      {/* Clinic Locations */}
      <section style={{ padding: "6rem 0", background: "var(--ivory)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="t-label">Our Locations</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className={`location-card ${loc.primary ? "primary" : ""}`}>
                <div className="map-placeholder">
                  {loc.primary && (
                    <div style={{
                      position: "absolute",
                      top: "1rem", left: "1rem",
                      background: "var(--gold)",
                      color: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.7rem",
                    }}>
                      Primary Clinic
                    </div>
                  )}
                  Map Embed Placeholder
                </div>
                <div style={{ padding: "2rem" }}>
                  <div style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    color: "var(--slate-deep)",
                    fontWeight: 500,
                    marginBottom: "1rem",
                  }}>
                    {loc.name}
                  </div>

                  {[
                    { label: "Address", value: loc.address },
                    { label: "Phone", value: loc.phone },
                    { label: "Hours", value: loc.hours },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-mid)", marginBottom: "0.25rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--stone-dark)", lineHeight: 1.7, whiteSpace: "pre-line", letterSpacing: "0.03em" }}>
                        {item.value}
                      </div>
                    </div>
                  ))}

                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      marginTop: "0.5rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                    }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Quick Actions */}
      <section style={{ padding: "6rem 0", background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6rem" }}>
            {/* Form */}
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                <SectionLabel>Send a Message</SectionLabel>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "var(--slate-deep)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}>
                  Write to Us
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input className="contact-field" placeholder="Full Name" />
                <input className="contact-field" placeholder="Email Address" type="email" />
              </div>
              <input className="contact-field" placeholder="Phone Number" />
              <input className="contact-field" placeholder="Subject" />
              <textarea
                className="contact-field"
                placeholder="Your message..."
                style={{ minHeight: "120px", resize: "vertical", lineHeight: 1.6 }}
              />
              <button className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message
              </button>
            </div>

            {/* Quick Actions */}
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                <SectionLabel>Quick Contact</SectionLabel>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "var(--slate-deep)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}>
                  Direct Access
                </h2>
              </div>

              {[
                {
                  icon: "💬",
                  label: "WhatsApp",
                  desc: "Message our care team directly.",
                  action: "Chat on WhatsApp →",
                  href: "https://wa.me/919820000000",
                  highlight: true,
                },
                {
                  icon: "📞",
                  label: "Call Us",
                  desc: "+91 98200 XXXXX\nMon–Sat, 9am–7pm",
                  action: "Call Now →",
                  href: "tel:+919820000000",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  desc: "consult@drarjunmehta.in",
                  action: "Send Email →",
                  href: "mailto:consult@drarjunmehta.in",
                },
                {
                  icon: "📅",
                  label: "Book Consultation",
                  desc: "Fill the full consultation form.",
                  action: "Book Now →",
                  isNav: "/consultation",
                },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  marginBottom: "0.75rem",
                  background: item.highlight ? "var(--gold-pale)" : "var(--ivory)",
                  border: `1px solid ${item.highlight ? "var(--gold)" : "var(--ivory-deep)"}`,
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                  onClick={() => item.isNav && navigate(item.isNav)}
                >
                  <div style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone-dark)", marginBottom: "0.3rem" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--stone-dark)", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: "0.5rem" }}>
                      {item.desc}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--gold)", textDecoration: "none" }}>
                        {item.action}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--gold)" }}>
                        {item.action}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Hospital Affiliations */}
              <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--ivory-deep)" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-mid)", marginBottom: "1rem" }}>
                  Hospital Affiliations
                </div>
                {["Breach Candy Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Lilavati Hospital", "AIIMS Delhi"].map(h => (
                  <div key={h} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--stone-dark)",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--ivory-deep)",
                    letterSpacing: "0.03em",
                  }}>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}