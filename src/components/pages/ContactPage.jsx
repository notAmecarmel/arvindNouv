import { SectionLabel } from "../ui/SharedComponents";
import { useState } from "react";
import "./ContactPage.css";

const LOCATIONS = [
  {
    name: "PACE Hospitals — HITEC City",
    address:
      "PACE Hospitals, HITEC City, Hyderabad",
    phone: "+91 8331003232",
    hours: "Monday – Saturday: 9 AM – 5 PM",
    primary: true,
    mapEmbed:
      "https://www.google.com/maps?q=PACE+Hospitals+HITEC+City+Hyderabad&output=embed&z=15&maptype=roadmap",
    directions: "https://maps.app.goo.gl/YqJBqU94p6mUeeGB6",
  },
  {
    name: "Dhriti Dental — Nallagandla",
    address:
      "Third Floor, Mallikarjuna Nilayam\nNear Community Hall, Nallagandla\nSerilingampalle (M), Hyderabad, Telangana - 500019",
    phone: "+91 8331003232",
    hours:
      "Monday – Saturday: 10 AM – 9 PM\nSunday: 11 AM – 5 PM",
    primary: false,
    mapEmbed:
      "https://www.google.com/maps?q=Dhriti+Dental+Nallagandla+Hyderabad&output=embed&t=m",
  },
];

export default function ContactPage({ navigate }) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };

  const [form, setForm] = useState(initialForm);

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const limitWords = (value, maxWords) => {
    const words = value.trim().split(/\s+/).filter(Boolean);
    return words.slice(0, maxWords).join(" ");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }

    if (name === "name") {
      setForm((prev) => ({ ...prev, name: value.slice(0, 30) }));
      return;
    }

    if (name === "subject" || name === "message") {
      setForm((prev) => ({ ...prev, [name]: limitWords(value, 100) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setForm({ ...initialForm });
    setSubmitted(false);
    setLoading(false);
  };

  const handleSubmit = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill required fields");
      return;
    }

    if (form.name.trim().length > 30) {
      alert("Name must be 30 characters or less");
      return;
    }

    if (form.subject.trim() && form.subject.trim().split(/\s+/).filter(Boolean).length > 100) {
      alert("Subject must be 100 words or less");
      return;
    }

    if (form.message.trim().split(/\s+/).filter(Boolean).length > 100) {
      alert("Message must be 100 words or less");
      return;
    }

    if (!emailPattern.test(form.email.trim())) {
      alert("Please enter a valid email address");
      return;
    }

    if (form.phone && !phonePattern.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number");
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
              Expert surgical care with compassion.
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
            Reach out to Dr. Arvind for appointments, consultations, and
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

          <div className="locations-grid">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className={`location-card ${
                  loc.primary ? "primary" : ""
                }`}
              >
                <div style={{ position: "relative" }}>
                  {/* Main Branch badge removed per design */}

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
                          fontSize: "0.9rem",
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
                    href={loc.directions || `https://maps.google.com/?q=${encodeURIComponent(loc.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "0.5rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
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

                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    setForm({ ...initialForm });
                    setSubmitted(false);
                    setLoading(false);
                  }}
                  style={{
                    marginTop: "2rem",
                    width: "100%",
                    justifyContent: "center",
                    padding: "1.1rem"
                  }}
                >
                  Submit Another Request
                </button>
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
                  maxLength={30}
                />

                <input
                  className="contact-field"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  inputMode="email"
                />
              </div>

              <input
                className="contact-field"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
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
                        fontSize: "0.9rem",
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
                          fontSize: "0.9rem",
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