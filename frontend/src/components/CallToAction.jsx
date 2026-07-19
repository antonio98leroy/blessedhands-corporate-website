import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <div>
          <span className="section-eyebrow light">
            Start Your Project
          </span>

          <h2>Ready to Build Something That Lasts?</h2>

          <p>
            Speak with our team about your construction, water,
            sanitation, engineering, or equipment requirements.
          </p>
        </div>

        <div className="cta-actions">
          <Link
            to="/quote"
            className="button button-light"
          >
            Request a Quote
            <FaArrowRight />
          </Link>

          <a
            href="tel:+231000000000"
            className="button button-outline-light"
          >
            <FaPhoneAlt />
            Call Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;