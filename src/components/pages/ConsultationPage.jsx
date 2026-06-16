import { useState } from "react";
import { SectionLabel } from "../ui/SharedComponents";

export default function ConsultationPage({ navigate }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", procedure: "", message: "", preferred: "morning"
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {

  if (!form.name || !form.email || !form.phone) {
    alert("Please fill all required fields");
    return;
  }

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
  }
};

  return (
    <>
      <style>{`
        .consult-page {
          min-height: 100vh;
          background: var(--slate-deep);
        }
        .consult-hero {
          padding-top: 10rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(184,151,90,0.15);
        }
        .consult-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 70vh;
        }
        .consult-form-panel {
          background: var(--ivory);
          padding: 5rem 4rem;
        }
        .consult-info-panel {
          padding: 5rem 4rem;
          background: var(--slate-deep);
        }
        .form-group {
          margin-bottom: 1.75rem;
        }
        .form-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone-dark);
          margin-bottom: 0.6rem;
        }
        .form-input {
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
          letter-spacing: 0.03em;
        }
        .form-input:focus { border-color: var(--gold); }
        .form-input::placeholder { color: var(--stone-mid); }
        .form-select {
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
          appearance: none;
          cursor: pointer;
        }
        .form-select:focus { border-color: var(--gold); }
        .form-textarea {
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
          resize: vertical;
          min-height: 120px;
          letter-spacing: 0.03em;
          line-height: 1.6;
        }
        .form-textarea:focus { border-color: var(--gold); }
        .time-options {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.5rem;
        }
        .time-option {
          padding: 0.65rem;
          border: 1px solid var(--stone);
          text-align: center;
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--stone-dark);
          transition: all 0.3s;
          background: var(--white);
        }
        .time-option.selected {
          border-color: var(--gold);
          background: var(--gold);
          color: var(--white);
        }
        .info-item {
          margin-bottom: 2.5rem;
        }
        .info-label {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.5rem;
          display: block;
        }
        .info-value {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          color: rgba(248,245,240,0.75);
          line-height: 1.7;
        }
        .success-state {
          text-align: center;
          padding: 4rem 2rem;
        }
        @media (max-width: 900px) {
          .consult-body { grid-template-columns: 1fr; }
          .consult-form-panel, .consult-info-panel { padding: 3rem 1.5rem; }
        }
      `}</style>

      <div className="consult-page">
        {/* Hero */}
        <div className="consult-hero">
          <div className="container">
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
                color: "rgba(248,245,240,0.5)",
                fontStyle: "italic",
                lineHeight: 1.8,
                maxWidth: "480px",
              }}>
                Every surgical decision deserves unhurried clarity. Your first consultation is a private, no-obligation dialogue — with Dr. Arvind directly.
              </p>
            </div>
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
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      className="form-input"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
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
              { label: "Duration", value: "45–60 minutes, unhurried." },
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
              background: "rgba(184,151,90,0.08)",
              border: "1px solid rgba(184,151,90,0.2)",
            }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                WhatsApp Direct
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "rgba(248,245,240,0.6)", fontStyle: "italic", marginBottom: "1rem", lineHeight: 1.6 }}>
                Prefer to message first? Our care team responds on WhatsApp.
              </div>
              <a
                href="https://wa.me/919820000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ color: "rgba(248,245,240,0.7)", borderColor: "rgba(212,204,184,0.25)", fontSize: "0.68rem" }}
              >
                Message on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}