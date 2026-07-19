import {
  FaBuilding,
  FaHandshake,
  FaHardHat,
  FaUsers,
} from "react-icons/fa";

const statistics = [
  {
    icon: <FaBuilding />,
    value: "120+",
    label: "Projects Completed",
  },
  {
    icon: <FaHardHat />,
    value: "50+",
    label: "Professional Staff",
  },
  {
    icon: <FaHandshake />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <FaUsers />,
    value: "200+",
    label: "Satisfied Clients",
  },
];

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="container statistics-grid">
        {statistics.map((item) => (
          <article
            key={item.label}
            className="statistic-card"
          >
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