import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaFaucet,
  FaRoad,
  FaTools,
  FaWater,
} from "react-icons/fa";
import api from "../services/api";
import SectionTitle from "./SectionTitle";

const serviceIcons = [
  <FaBuilding />,
  <FaWater />,
  <FaFaucet />,
  <FaRoad />,
  <FaTools />,
];

const fallbackServices = [
  {
    id: "fallback-1",
    title: "Building Construction",
    short_description:
      "Residential, commercial, and institutional construction services.",
  },
  {
    id: "fallback-2",
    title: "Water Supply Systems",
    short_description:
      "Reliable water systems designed for communities and institutions.",
  },
  {
    id: "fallback-3",
    title: "Sanitation Solutions",
    short_description:
      "Sustainable sanitation infrastructure and hygiene facilities.",
  },
];

function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadServices = async () => {
      try {
        const response = await api.get("services/");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.results || [];

        if (active) {
          setServices(data.slice(0, 6));
        }
      } catch (error) {
        console.error("Unable to load services:", error);

        if (active) {
          setServices(fallbackServices);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section services-section">
      <div className="container">
        <SectionTitle
          eyebrow="What We Do"
          title="Professional Services Built Around Your Needs"
          description="We deliver reliable construction, water, sanitation, and engineering solutions for public and private clients."
        />

        {loading ? (
          <p className="loading-message">Loading services...</p>
        ) : (
          <div className="card-grid services-grid">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="service-card"
              >
                <div className="service-icon">
                  {serviceIcons[index % serviceIcons.length]}
                </div>

                {service.image_url && (
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="card-image"
                  />
                )}

                <div className="card-content">
                  <h3>{service.title}</h3>

                  <p>
                    {service.short_description ||
                      "Professional and dependable services delivered by an experienced team."}
                  </p>

                  <Link
                    to={`/services/${service.slug || service.id}`}
                    className="text-link"
                  >
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="section-action">
          <Link
            to="/services"
            className="button button-secondary"
          >
            View All Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;