import { useState } from "react";
import { SectionLabel } from "../ui/SharedComponents";
import "./ConsultationPage.css";
import { Turnstile } from "react-turnstile";

export default function ConsultationPage({ navigate }) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    procedure: "",
    appointmentDate: "",
    message: "",
    preferred: "morning"
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const getMinAppointmentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const minAppointmentDate = getMinAppointmentDate();

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

    if (name === "message") {
      setForm((prev) => ({ ...prev, message: limitWords(value, 100) }));
      return;
    }

    if (name === "appointmentDate") {
      const nextDate = value;
      if (nextDate && nextDate < minAppointmentDate) {
        setForm((prev) => ({ ...prev, appointmentDate: minAppointmentDate }));
        return;
      }
      setForm((prev) => ({ ...prev, appointmentDate: nextDate }));
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

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      alert("Please fill all required fields");
      return;
    }

    if (form.name.trim().length > 30) {
      alert("Name must be 30 characters or less");
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

    if (!phonePattern.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!form.appointmentDate || form.appointmentDate < minAppointmentDate) {
      alert("Please select a present or future appointment date");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }
    setLoading(true);



    try {
      const response = await fetch(
        "/api/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("FULL ERROR:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consult-page">
      {/* Hero */}
      <div className="consult-hero">
        <div className="container" style={{ paddingBottom: "4rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <SectionLabel>Consultation</SectionLabel>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: "var(--ivory)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}>
              Begin with a Conversation.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Nothing more.</em>
            </h1>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1rem",
              color: "var(--ivory)",
              fontStyle: "italic",
              lineHeight: 1.8,
              maxWidth: "480px",
            }}>
              Every surgical decision deserves unhurried clarity. Your first consultation is a private, no-obligation dialogue — with Dr. Arvind directly.
            </p>
          </div>
        </div>

        {/* Form & Info */}
        <div className="consult-body">
          {/* Form */}
          <div className="consult-form-panel">
            {submitted ? (
              <div className="success-state">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold)", marginBottom: "1.5rem" }}>◆</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--slate-deep)", fontWeight: 400, marginBottom: "1rem" }}>
                  Thank you, {form.name.split(" ")[0]}.
                </h2>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--stone-dark)", fontStyle: "italic", lineHeight: 1.8 }}>
                  Your request has been received. A member of Dr. Arvind's team will contact you within 24 hours to confirm your consultation.
                </p>
                <div style={{
                  marginTop: "2rem",
                  padding: "1.5rem 2rem",
                  background: "var(--ivory)",
                  border: "1px solid var(--ivory-deep)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "var(--stone-dark)",
                  letterSpacing: "0.05em",
                }}>
                  Confirmation sent to: {form.email}
                </div>

                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={handleReset}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "1.1rem",
                    marginTop: "1.5rem"
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  color: "var(--slate-deep)",
                  fontWeight: 400,
                  marginBottom: "2.5rem",
                  letterSpacing: "-0.02em",
                }}>
                  Request a Consultation
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div className="form-group" style={{ gridColumn: "1/3" }}>
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      maxLength={30}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      inputMode="email"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      className="form-input"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                    />
                  </div>

                  <div className="form-group" style={{ gridColumn: "1/3" }}>
                    <label className="form-label">Procedure of Interest</label>
                    <select className="form-select" name="procedure" value={form.procedure} onChange={handleChange}>
                      <option value="">Select a procedure (optional)</option>
                      <option>Jaw Correction Surgery</option>
                      <option>Dental Implants</option>
                      <option>Facial Trauma / Reconstruction</option>
                      <option>TMJ Disorders</option>
                      <option>Facial Aesthetics</option>
                      <option>Wisdom Tooth Extraction</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ gridColumn: "1/3" }}>
                    <label className="form-label">Preferred Time of Day</label>
                    <div className="time-options">
                      {["morning", "afternoon", "evening"].map(t => (
                        <div
                          key={t}
                          className={`time-option ${form.preferred === t ? "selected" : ""}`}
                          onClick={() => setForm({ ...form, preferred: t })}
                        >
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="form-group" style={{ gridColumn: "1/3" }}>
                    <label className="form-label">
                      Preferred Appointment Date *
                    </label>

                    <input
                      className="form-input"
                      type="date"
                      name="appointmentDate"
                      value={form.appointmentDate}
                      onChange={handleChange}
                      min={minAppointmentDate}
                    />
                  </div>
                  <div className="form-group" style={{ gridColumn: "1/3" }}>
                    <label className="form-label">Brief Description (optional)</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any details you'd like Dr. Arvind to know before the consultation..."
                    />
                  </div>
                </div>

                <div style={{ margin: "1.5rem 0" }}>
                  <Turnstile
                    sitekey="0x4AAAAAAD6e8D6y7zpusrOD"
                    onSuccess={(token) => {
                      setTurnstileToken(token);
                    }}
                    onExpire={() => {
                      setTurnstileToken("");
                    }}
                    onError={() => {
                      setTurnstileToken("");
                    }}
                  />
                </div>

                <button
                  className="btn btn--primary"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "1.1rem"
                  }}
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>

                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  color: "var(--stone-mid)",
                  letterSpacing: "0.06em",
                  textAlign: "center",
                  marginTop: "1.25rem",
                  lineHeight: 1.7,
                }}>
                  Your information is strictly confidential. We do not share patient data with any third parties.
                </p>
              </>
            )}
          </div>

          {/* Info panel */}
          <div className="consult-info-panel">
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--ivory)",
              fontWeight: 400,
              marginBottom: "3rem",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}>
              What to expect from your first consultation.
            </div>

            {[
              { label: "Duration", value: "20-30 minutes, unhurried." },
              { label: "Who You'll Meet", value: "Dr. Arvind directly — not a registrar or coordinator." },
              { label: "What We Cover", value: "Medical history, clinical examination, imaging review, and your goals." },
              { label: "Decision Pressure", value: "None. There is no obligation to proceed." },
              { label: "Location", value: "PACE Hospitals, HiTech City, Hyderabad" },
              { label: "Response Time", value: "Within 24 hours of submission." },
            ].map(item => (
              <div key={item.label} className="info-item">
                <span className="info-label">{item.label}</span>
                <div className="info-value">{item.value}</div>
              </div>
            ))}

            <div style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "var(--surface-overlay)",
              border: "1px solid var(--color-border)",
            }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                WhatsApp Direct
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--ivory)", fontStyle: "italic", marginBottom: "1rem", lineHeight: 1.6 }}>
                Prefer to message first? Our care team responds on WhatsApp.
              </div>
              <a
                href="https://wa.me/918331003232"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ color: "var(--ivory)", borderColor: "var(--color-border)", fontSize: "0.9rem" }}
              >
                Message on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
