function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={`section-heading ${
        centered ? "centered" : ""
      }`}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;