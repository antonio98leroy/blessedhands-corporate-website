import NewsSection from "../components/NewsSection";

function News() {
  return (
    <>
      <section className="page-hero">
        <div className="container">

          <span className="section-eyebrow">
            Company Updates
          </span>

          <h1>News & Articles</h1>

          <p>
            Follow our latest projects and announcements.
          </p>

        </div>
      </section>

      <NewsSection />
    </>
  );
}

export default News;