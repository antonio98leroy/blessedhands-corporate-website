import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await api.post("contact-messages/", form);

      setSuccessMessage(
        "Your message has been sent successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission failed:", error);

      setErrorMessage(
        "Your message could not be sent. Please check the information and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">
            Get in Touch
          </span>

          <h1>Contact Us</h1>

          <p>
            Contact Blessed Hands for construction, water,
            sanitation, engineering, equipment, or partnership
            enquiries.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <form
            className="contact-form"
            onSubmit={submit}
          >
            {successMessage && (
              <div className="form-message success-message">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="form-message error-message">
                {errorMessage}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="7"
              placeholder="Write your message"
              required
            />

            <button
              type="submit"
              className="button button-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
