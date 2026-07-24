import { useState } from "react";
import api from "../services/api";

function Quote() {
  const [form, setForm] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    project_type: "building",
    project_location: "",
    estimated_budget: "",
    expected_start_date: "",
    project_description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
    setMessage("");
    setError("");

    try {
      await api.post("quote-requests/", {
        ...form,
        estimated_budget: form.estimated_budget || null,
        expected_start_date: form.expected_start_date || null,
      });

      setMessage("Quote request submitted successfully.");

      setForm({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        project_type: "building",
        project_location: "",
        estimated_budget: "",
        expected_start_date: "",
        project_description: "",
      });
    } catch (requestError) {
      console.error("Quote submission failed:", requestError);

      setError(
        "The quote request could not be submitted. Please check the form and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Start Your Project</span>

          <h1>Request a Quote</h1>

          <p>
            Tell us about your construction, engineering, water,
            sanitation, renovation, or equipment needs.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <form className="contact-form" onSubmit={submit}>
            {message && (
              <div className="form-message success-message">
                {message}
              </div>
            )}

            {error && (
              <div className="form-message error-message">
                {error}
              </div>
            )}

            <input
              type="text"
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
              placeholder="Company Name"
            />

            <input
              type="text"
              name="contact_person"
              value={form.contact_person}
              onChange={handleChange}
              placeholder="Contact Person"
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
              required
            />

            <select
              name="project_type"
              value={form.project_type}
              onChange={handleChange}
              required
            >
              <option value="building">Building Construction</option>
              <option value="road">Road Construction</option>
              <option value="water">Water Supply</option>
              <option value="sanitation">Sanitation</option>
              <option value="renovation">Renovation</option>
              <option value="engineering">Civil Engineering</option>
              <option value="equipment">Equipment Rental</option>
              <option value="other">Other</option>
            </select>

            <input
              type="text"
              name="project_location"
              value={form.project_location}
              onChange={handleChange}
              placeholder="Project Location"
              required
            />

            <input
              type="number"
              name="estimated_budget"
              value={form.estimated_budget}
              onChange={handleChange}
              placeholder="Estimated Budget"
              min="0"
              step="0.01"
            />

            <label>
              Expected Start Date
              <input
                type="date"
                name="expected_start_date"
                value={form.expected_start_date}
                onChange={handleChange}
              />
            </label>

            <textarea
              name="project_description"
              value={form.project_description}
              onChange={handleChange}
              rows="8"
              placeholder="Project Description"
              required
            />

            <button
              type="submit"
              className="button button-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Quote;