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
            Construction, Water, Sanitation & Hygiene
          </span>

          <h1>
            Building Infrastructure That Delivers Clean Water, and 
            Safe Sanitation, and Healthier Communities
          </h1>

          <p>
            Blessed Hands General Construction, Water & Sanitation
            Company is a newly established Liberian company delivering
            professional construction, clean-water, sanitation, hygiene,
            and community infrastructure solutions.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="button button-primary">
              Explore Our Services
              <FaArrowRight />
            </Link>

            <Link to="/wash" className="button button-outline-light">
              Explore WASH Solutions
            </Link>

            <Link to="/quote" className="button button-outline-light">
              Request a Quote
            </Link>
          </div>

          <div className="hero-highlights">
            <span>
              <FaCheckCircle />
              Quality-Focused Delivery
            </span>

            <span>
              <FaCheckCircle />
              Sustainable WASH Solutions
            </span>

            <span>
              <FaCheckCircle />
              Ready for Partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;