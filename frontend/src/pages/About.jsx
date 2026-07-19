import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Who We Are</span>

          <h1>About Blessed Hands</h1>

          <p>
            Blessed Hands General Construction, Water & Sanitation
            Company is committed to delivering quality infrastructure,
            engineering, water, and sanitation services that improve
            communities and strengthen development across Liberia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <h2>Our Story</h2>

            <p>
              Blessed Hands was established with the vision of becoming
              one of Liberia's leading construction and infrastructure
              companies. Through dedication, professionalism, and
              innovation, we provide dependable services to both public
              and private institutions.
            </p>

            <p>
              Our expertise covers building construction, water supply
              systems, sanitation projects, engineering services, and
              equipment deployment.
            </p>
          </div>

          <div className="about-image-placeholder">
            Blessed Hands
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container values-grid">

          <div className="value-card">
            <FaBullseye />

            <h3>Mission</h3>

            <p>
              To provide reliable, innovative, and sustainable
              construction, water, and sanitation solutions that improve
              lives and create lasting value.
            </p>
          </div>

          <div className="value-card">
            <FaEye />

            <h3>Vision</h3>

            <p>
              To become the leading construction and infrastructure
              company in Liberia and West Africa.
            </p>
          </div>

          <div className="value-card">
            <FaHandshake />

            <h3>Core Values</h3>

            <p>
              Integrity, Quality, Safety, Accountability, Innovation,
              and Community Service.
            </p>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Clients Choose Us</h2>

          <ul className="about-list">
            <li>Experienced professionals</li>
            <li>Commitment to safety standards</li>
            <li>Timely project delivery</li>
            <li>Quality workmanship</li>
            <li>Competitive pricing</li>
            <li>Community-focused development</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;