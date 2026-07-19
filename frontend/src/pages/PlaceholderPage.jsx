import { Link } from "react-router-dom";

function PlaceholderPage({ title }) {
  return (
    <main className="page-section">
      <div className="container">
        <div className="page-placeholder">
          <span className="section-eyebrow">Blessed Hands</span>
          <h1>{title}</h1>
          <p>
            This page is being prepared and will be connected to the
            company content management system.
          </p>

          <Link
            to="/"
            className="button button-primary"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PlaceholderPage;