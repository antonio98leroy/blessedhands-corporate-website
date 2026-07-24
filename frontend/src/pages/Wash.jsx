import {
  FaClinicMedical,
  FaHandHoldingWater,
  FaSchool,
  FaTint,
  FaToilet,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const washServices = [
  {
    icon: <FaTint />,
    title: "Safe Water Access",
    description:
      "Boreholes, hand pumps, water storage, piped systems, water points, treatment, and distribution solutions.",
  },
  {
    icon: <FaToilet />,
    title: "Sanitation Infrastructure",
    description:
      "Latrines, institutional toilets, septic systems, drainage, and improved sanitation facilities.",
  },
  {
    icon: <FaHandHoldingWater />,
    title: "Hygiene Promotion",
    description:
      "Handwashing facilities, hygiene education, community sensitization, and behavior-change communication.",
  },
  {
    icon: <FaSchool />,
    title: "School WASH",
    description:
      "Water, sanitation, handwashing, menstrual hygiene, and maintenance solutions for schools.",
  },
  {
    icon: <FaClinicMedical />,
    title: "Healthcare Facility WASH",
    description:
      "Safe water, sanitation, hygiene, waste-management, and infection-prevention infrastructure.",
  },
  {
    icon: <FaUsers />,
    title: "Community WASH",
    description:
      "Community assessments, planning, infrastructure, education, training, and local ownership support.",
  },
];

function Wash() {
  return (
    <main>
      <section className="page-hero wash-page-hero">
        <div className="container">
          <span className="section-eyebrow">
            Water, Sanitation and Hygiene
          </span>

          <h1>Professional WASH Solutions</h1>

          <p>
            Supporting healthier communities through safe water,
            improved sanitation, hygiene facilities, education, and
            sustainable infrastructure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-eyebrow">Our WASH Focus</span>

            <h2>Improving Health, Dignity and Community Well-Being</h2>

            <p>
              Blessed Hands works with communities, institutions,
              businesses, government agencies, NGOs, and development
              partners to design and implement practical WASH solutions.
            </p>
          </div>

          <div className="wash-grid">
            {washServices.map((service) => (
              <article key={service.title} className="wash-card">
                <div className="wash-card-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container two-column">
          <div>
            <span className="section-eyebrow">Our Capabilities</span>

            <h2>WASH Services We Can Support</h2>

            <ul className="wash-list">
              <li>WASH needs assessments</li>
              <li>Borehole drilling and rehabilitation</li>
              <li>Hand-pump installation and maintenance</li>
              <li>Solar-powered water systems</li>
              <li>Water-storage and distribution systems</li>
              <li>Water-quality testing and treatment</li>
              <li>Latrine and public-toilet construction</li>
              <li>School and healthcare-facility WASH</li>
              <li>Handwashing-station installation</li>
              <li>Menstrual hygiene facilities</li>
              <li>Community hygiene promotion</li>
              <li>Emergency WASH support</li>
              <li>Operation and maintenance training</li>
              <li>Community sensitization and education</li>
            </ul>
          </div>

          <div className="wash-partnership-card">
            <span className="section-eyebrow">Partnerships</span>

            <h2>Ready to Work with Partners</h2>

            <p>
              As a new and growing company, Blessed Hands welcomes
              opportunities to work with NGOs, government institutions,
              communities, schools, healthcare facilities, businesses,
              contractors, and international development partners.
            </p>

            <div className="wash-actions">
              <Link to="/contact" className="button button-secondary">
                Partner With Us
              </Link>

              <Link to="/quote" className="button button-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Wash;