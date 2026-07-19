import {
  FaClock,
  FaHardHat,
  FaLeaf,
  FaMedal,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    icon: <FaHardHat />,
    title: "Qualified Professionals",
    description:
      "Our projects are supported by experienced construction, engineering, water, and sanitation professionals.",
  },
  {
    icon: <FaMedal />,
    title: "Quality Workmanship",
    description:
      "We maintain high standards in planning, materials, execution, inspection, and final delivery.",
  },
  {
    icon: <FaClock />,
    title: "Timely Delivery",
    description:
      "We plan and manage projects responsibly to meet agreed milestones and completion schedules.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Solutions",
    description:
      "Our solutions are designed to support long-term community development and environmental responsibility.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section why-choose-section">
      <div className="container">
        <SectionTitle
          eyebrow="Why Blessed Hands"
          title="A Trusted Partner for Construction and Development"
          description="We combine professional expertise, accountability, safety, and community-focused service."
        />

        <div className="why-grid">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="why-card"
            >
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;