import { SectionLabel } from "../ui/SharedComponents";
import { useState } from "react";

const LOCATIONS = [
  {
    name: "Dhriti Dental — Nallagandla",
    address:
      "Third Floor, Mallikarjuna Nilayam\nNear Community Hall, Nallagandla\nSerilingampalle (M), Hyderabad, Telangana - 500019",
    phone: "+91 8331003232",
    hours:
      "Monday – Saturday: 10 AM – 9 PM\nSunday: 11 AM – 5 PM",
    primary: true,
    mapEmbed:
      "https://www.google.com/maps?q=Dhriti+Dental+Nallagandla+Hyderabad&output=embed",
  },
];

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async () => {

    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      console.log("STATUS:", response.status);

      const data = await response.json();

      console.log("DATA:", data);

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send message");
      }

    } catch (err) {

      console.error(err);
      alert("Failed to send message");

    }

    setLoading(false);

  };
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

        .map-embed {
          width: 100%;
          height: 220px;
          border: 0;
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

        .contact-field:focus {
          border-color: var(--gold);
        }

        .contact-field::placeholder {
          color: var(--stone-mid);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }

          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <SectionLabel>Contact</SectionLabel>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "var(--slate-deep)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              maxWidth: "650px",
            }}
          >
            Get in Touch.
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
              }}
            >
              Expert dental care with compassion.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1rem",
              color: "var(--stone-dark)",
              fontStyle: "italic",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Reach out to Dhriti Dental for appointments, consultations, and
            dental care enquiries. We are committed to delivering advanced,
            patient-focused treatment in a comfortable environment.
          </p>
        </div>
      </div>

      {/* Clinic Locations */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--ivory)",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="t-label">Our Location</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className={`location-card ${
                  loc.primary ? "primary" : ""
                }`}
              >
                <div style={{ position: "relative" }}>
                  {loc.primary && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "var(--gold)",
                        color: "#fff",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.7rem",
                        zIndex: 2,
                      }}
                    >
                      Main Branch
                    </div>
                  )}

                  <iframe
                    title={loc.name}
                    src={loc.mapEmbed}
                    className="map-embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      color: "var(--slate-deep)",
                      fontWeight: 500,
                      marginBottom: "1rem",
                    }}
                  >
                    {loc.name}
                  </div>

                  {[
                    {
                      label: "Address",
                      value: loc.address,
                    },
                    {
                      label: "Phone",
                      value: loc.phone,
                    },
                    {
                      label: "Hours",
                      value: loc.hours,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{ marginBottom: "1rem" }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.58rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--stone-mid)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.label}
                      </div>

                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8rem",
                          color: "var(--stone-dark)",
                          lineHeight: 1.7,
                          whiteSpace: "pre-line",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}

                  <a
                    href="https://maps.google.com/?q=Dhriti+Dental+Nallagandla+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
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
      <section
        style={{
          padding: "6rem 0",
          background: "var(--white)",
        }}
      >
        <div className="container">
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "6rem",
            }}
          >
            {/* Contact Form */}
            {submitted ? (

              <div style={{
                textAlign: "center",
                padding: "4rem 2rem"
              }}>
                <h2>Thank You</h2>

                <p>
                  Your message has been received.
                  <br />
                  Our team will get back to you shortly.
                </p>
              </div>

            ) : (
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                <SectionLabel>Send a Message</SectionLabel>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--slate-deep)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Write to Us
                </h2>
              </div>

              <div
                className="form-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <input
                  className="contact-field"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                />

                <input
                  className="contact-field"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                />
              </div>

              <input
                className="contact-field"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <input
                className="contact-field"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              <textarea
                className="contact-field"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                style={{
                  minHeight: "120px",
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
              />

              <button
                className="btn btn--primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
            )}

            {/* Quick Actions */}
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                <SectionLabel>Quick Contact</SectionLabel>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--slate-deep)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Direct Access
                </h2>
              </div>

              {[
                {
                  icon: "💬",
                  label: "WhatsApp",
                  desc: "Message our dental care team directly.",
                  action: "Chat on WhatsApp →",
                  href: "https://wa.me/918331003232",
                  highlight: true,
                },
                {
                  icon: "📞",
                  label: "Call Us",
                  desc:
                    "+91 8331003232\nMonday – Saturday: 10 AM – 9 PM",
                  action: "Call Now →",
                  href: "tel:+918331003232",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  desc: "dhritidentals@gmail.com",
                  action: "Send Email →",
                  href: "mailto:dhritidentals@gmail.com",
                },
                {
                  icon: "📅",
                  label: "Book Consultation",
                  desc:
                    "Fill out the consultation form to schedule your appointment.",
                  action: "Book Now →",
                  isNav: "/consultation",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    padding: "1.5rem",
                    marginBottom: "0.75rem",
                    background: item.highlight
                      ? "var(--gold-pale)"
                      : "var(--ivory)",
                    border: `1px solid ${
                      item.highlight
                        ? "var(--gold)"
                        : "var(--ivory-deep)"
                    }`,
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    item.isNav && navigate(item.isNav)
                  }
                >
                  <div
                    style={{
                      fontSize: "1.25rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--stone-dark)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.label}
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        color: "var(--stone-dark)",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.desc}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.1em",
                          color: "var(--gold)",
                          textDecoration: "none",
                        }}
                      >
                        {item.action}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.1em",
                          color: "var(--gold)",
                        }}
                      >
                        {item.action}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Hospital Affiliations */}
              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--ivory-deep)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--stone-mid)",
                    marginBottom: "1rem",
                  }}
                >
                  Hospital Affiliations
                </div>

                {["PACE Hospitals"].map((hospital) => (
                  <div
                    key={hospital}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--stone-dark)",
                      padding: "0.65rem 0",
                      borderBottom:
                        "1px solid var(--ivory-deep)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {hospital}
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