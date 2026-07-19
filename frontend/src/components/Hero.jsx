import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHardHat,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow">
            <FaHardHat />
            General Construction, Water & Sanitation
          </span>

          <h1>
            Building Strong Foundations for a Better Tomorrow
          </h1>

          <p>
            Blessed Hands provides dependable construction,
            engineering, water supply, and sanitation solutions
            designed to improve lives and strengthen communities.
          </p>

          <div className="hero-actions">
            <Link
              to="/services"
              className="button button-primary"
            >
              Explore Our Services
              <FaArrowRight />
            </Link>

            <Link
              to="/quote"
              className="button button-outline-light"
            >
              Request a Quote
            </Link>
          </div>

          <div className="hero-highlights">
            <span>
              <FaCheckCircle />
              Quality Workmanship
            </span>

            <span>
              <FaCheckCircle />
              Professional Team
            </span>

            <span>
              <FaCheckCircle />
              Sustainable Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;