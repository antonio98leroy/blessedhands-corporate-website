import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-company">
          <img
            src="/logo.png"
            alt="Blessed Hands logo"
            className="footer-logo"
          />

          <h3>Blessed Hands</h3>

          <p>
            General Construction, Water & Sanitation Company
            delivering dependable infrastructure solutions for
            stronger communities.
          </p>

          <div className="social-links">
            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/equipment">Equipment</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>

          <ul className="footer-links">
            <li>Building Construction</li>
            <li>Water Supply Systems</li>
            <li>Sanitation Solutions</li>
            <li>Civil Engineering</li>
            <li>Equipment Rental</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>

          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>Monrovia, Liberia</span>
            </li>

            <li>
              <FaPhoneAlt />
              <a href="tel:+231000000000">
                +231 000 000 000
              </a>
            </li>

            <li>
              <FaEnvelope />
              <a href="mailto:info@blessedhandsconstruction.com">
                info@blessedhandsconstruction.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Blessed Hands General
            Construction, Water & Sanitation Company.
          </p>

          <p>Developed by Prime Tech Enterprises, LLC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;