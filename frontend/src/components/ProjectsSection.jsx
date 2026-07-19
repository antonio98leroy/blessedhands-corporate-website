import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import api from "../services/api";
import SectionTitle from "./SectionTitle";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadProjects = async () => {
      try {
        const response = await api.get("projects/");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.results || [];

        if (active) {
          const featured = data.filter(
            (project) => project.is_featured
          );

          setProjects(
            (featured.length ? featured : data).slice(0, 6)
          );
        }
      } catch (error) {
        console.error("Unable to load projects:", error);

        if (active) {
          setProjects([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Our Portfolio"
          title="Featured Construction and Infrastructure Projects"
          description="Explore selected projects that demonstrate our commitment to quality, safety, and sustainable development."
        />

        {loading ? (
          <p className="loading-message">Loading projects...</p>
        ) : projects.length === 0 ? (
          <div className="empty-state">
            <h3>Projects will appear here soon.</h3>
            <p>
              Add projects through the Django administration panel.
            </p>
          </div>
        ) : (
          <div className="card-grid projects-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
              >
                <div className="project-image-wrapper">
                  {project.image_url || project.image ? (
                    <img
                      src={project.image_url || project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      Project Image
                    </div>
                  )}

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <div className="card-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="project-location">
                    <FaMapMarkerAlt />
                    {project.location}
                  </p>

                  <p>
                    {project.description?.slice(0, 120)}
                    {project.description?.length > 120 ? "..." : ""}
                  </p>

                  <Link
                    to={`/projects/${project.slug || project.id}`}
                    className="text-link"
                  >
                    View Project
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="section-action">
          <Link
            to="/projects"
            className="button button-primary"
          >
            View All Projects
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;