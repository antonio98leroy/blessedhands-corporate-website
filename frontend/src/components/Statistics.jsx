import {
  FaHandshake,
  FaHardHat,
  FaLeaf,
  FaTint,
} from "react-icons/fa";

const strengths = [
  {
    icon: <FaHardHat />,
    value: "Quality",
    label: "Professional Construction",
  },
  {
    icon: <FaTint />,
    value: "WASH",
    label: "Water, Sanitation & Hygiene",
  },
  {
    icon: <FaLeaf />,
    value: "Sustainable",
    label: "Community-Based Solutions",
  },
  {
    icon: <FaHandshake />,
    value: "Ready",
    label: "For Clients and Partnerships",
  },
];

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="container statistics-grid">
        {strengths.map((item) => (
          <article key={item.label} className="statistic-card">
            <div className="statistic-icon">{item.icon}</div>

            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;