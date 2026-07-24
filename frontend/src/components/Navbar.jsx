import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "WASH", path: "/wash" },
  { label: "Projects", path: "/projects" },
  { label: "Equipment", path: "/equipment" },
  { label: "Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "News", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-content">
          <span>Building communities through quality infrastructure</span>

          <div className="topbar-links">
            <a href="tel:+231000000000">Call Us</a>
            <a href="mailto:info@blessedhandsconstruction.com">
              info@blessedhandsconstruction.com
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container navbar-content">
          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Blessed Hands General Construction, Water and Sanitation Company"
              className="brand-logo"
            />

            <div className="brand-text">
              <strong>Blessed Hands</strong>
              <span>Construction, Water & Sanitation</span>
            </div>
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
            <div className="nav-links">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/quote"
              className="button button-primary navbar-quote-button"
              onClick={closeMenu}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;