import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTools } from "react-icons/fa";
import api from "../services/api";
import SectionTitle from "./SectionTitle";

function EquipmentSection() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    let active = true;

    const loadEquipment = async () => {
      try {
        const response = await api.get("equipment/");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.results || [];

        if (active) {
          setEquipment(data.slice(0, 4));
        }
      } catch (error) {
        console.error("Unable to load equipment:", error);
      }
    };

    loadEquipment();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section equipment-section">
      <div className="container">
        <SectionTitle
          eyebrow="Our Resources"
          title="Equipment Ready for Serious Work"
          description="Our equipment supports efficient construction, civil engineering, water, sanitation, and site development operations."
        />

        {equipment.length === 0 ? (
          <div className="empty-state">
            <FaTools className="empty-state-icon" />
            <h3>Equipment records will appear here.</h3>
            <p>
              Add equipment through the Django administration panel.
            </p>
          </div>
        ) : (
          <div className="card-grid equipment-grid">
            {equipment.map((item) => (
              <article
                key={item.id}
                className="equipment-card"
              >
                {item.image_url || item.image ? (
                  <img
                    src={item.image_url || item.image}
                    alt={item.name}
                    className="card-image equipment-image"
                  />
                ) : (
                  <div className="equipment-placeholder">
                    <FaTools />
                  </div>
                )}

                <div className="card-content">
                  <span className="equipment-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p>
                    {[item.manufacturer, item.model]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>

                  <span className="availability-badge">
                    {item.status?.replace("_", " ")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="section-action">
          <Link
            to="/equipment"
            className="button button-secondary"
          >
            View All Equipment
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EquipmentSection;