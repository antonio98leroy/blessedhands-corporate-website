import ServicesSection from "../components/ServicesSection";

function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">
            Our Expertise
          </span>

          <h1>Our Services</h1>

          <p>
            Blessed Hands provides a broad range of construction,
            engineering, water, and sanitation services.
          </p>
        </div>
      </section>

      <ServicesSection />
    </>
  );
}

export default ServicesPage;