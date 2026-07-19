import ProjectsSection from "../components/ProjectsSection";

function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">
            Portfolio
          </span>

          <h1>Projects Portfolio</h1>

          <p>
            Explore some of our completed and ongoing projects.
          </p>
        </div>
      </section>

      <ProjectsSection />
    </>
  );
}

export default ProjectsPage;