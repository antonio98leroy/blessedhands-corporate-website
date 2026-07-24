import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const values = [
  "Integrity",
  "Quality",
  "Safety",
  "Accountability",
  "Sustainability",
  "Innovation",
  "Community Service",
  "Inclusion",
];

function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Who We Are</span>

          <h1>About Blessed Hands</h1>

          <p>
            A newly established Liberian company committed to delivering
            professional construction, water, sanitation, hygiene, and
            community infrastructure solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <span className="section-eyebrow">Our Company</span>

            <h2>A New Company with a Clear Purpose</h2>

            <p>
              Blessed Hands General Construction, Water & Sanitation
              Company was established to respond to the growing need for
              safe buildings, clean water, improved sanitation, proper
              hygiene facilities, and sustainable infrastructure in
              Liberia.
            </p>

            <p>
              As a newly established company, we are focused on building
              trust through professional planning, quality workmanship,
              transparency, safety, and responsible service delivery.
            </p>

            <p>
              We serve communities, private clients, schools, healthcare
              facilities, businesses, NGOs, government institutions, and
              development partners.
            </p>
          </div>

          <div className="about-image-placeholder">
            <div className="about-company-card">
              <img
                src="/logo.jpeg"
                alt="Blessed Hands company logo"
              />

              <h3>Blessed Hands</h3>

              <p>
                General Construction, Water, Sanitation and WASH
                Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container values-grid">
          <article className="value-card">
            <FaBullseye />

            <h3>Our Mission</h3>

            <p>
              To provide quality construction and sustainable WASH
              solutions that improve health, dignity, safety, and
              community development.
            </p>
          </article>

          <article className="value-card">
            <FaEye />

            <h3>Our Vision</h3>

            <p>
              To become a trusted Liberian construction and WASH company
              recognized for professionalism, integrity, innovation, and
              positive community impact.
            </p>
          </article>

          <article className="value-card">
            <FaHandshake />

            <h3>Our Commitment</h3>

            <p>
              To work responsibly with clients, communities, government,
              NGOs, suppliers, and development partners.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-eyebrow">What Guides Us</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="core-values-grid">
            {values.map((value, index) => {
              const icons = [
                <FaShieldAlt />,
                <FaHardHatIcon />,
                <FaUsers />,
                <FaHandshake />,
                <FaLeaf />,
                <FaBullseye />,
                <FaUsers />,
                <FaHandshake />,
              ];

              return (
                <article key={value} className="core-value-item">
                  <div>{icons[index]}</div>
                  <span>{value}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function FaHardHatIcon() {
  return <span aria-hidden="true">🏗️</span>;
}

export default About;