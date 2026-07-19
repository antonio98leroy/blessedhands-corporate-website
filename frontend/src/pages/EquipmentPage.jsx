import EquipmentSection from "../components/EquipmentSection";

function EquipmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">
            Company Assets
          </span>

          <h1>Equipment & Machinery</h1>

          <p>
            Modern equipment supporting construction and
            infrastructure development.
          </p>
        </div>
      </section>

      <EquipmentSection />
    </>
  );
}

export default EquipmentPage;