import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
} from "react-icons/fa";
import api from "../services/api";
import SectionTitle from "./SectionTitle";

function NewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let active = true;

    const loadNews = async () => {
      try {
        const response = await api.get("news/");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.results || [];

        if (active) {
          setArticles(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Unable to load news:", error);
      }
    };

    loadNews();

    return () => {
      active = false;
    };
  }, []);

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return "Recently published";
    }

    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));
  };

  return (
    <section className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Latest Updates"
          title="Company News and Project Stories"
          description="Follow our company activities, completed projects, community initiatives, and important announcements."
        />

        {articles.length === 0 ? (
          <div className="empty-state">
            <FaNewspaper className="empty-state-icon" />
            <h3>News articles will appear here.</h3>
            <p>
              Publish articles from the Django administration panel.
            </p>
          </div>
        ) : (
          <div className="card-grid news-grid">
            {articles.map((article) => (
              <article
                key={article.id}
                className="news-card"
              >
                {article.featured_image_url ||
                article.featured_image ? (
                  <img
                    src={
                      article.featured_image_url ||
                      article.featured_image
                    }
                    alt={article.title}
                    className="card-image"
                  />
                ) : (
                  <div className="news-placeholder">
                    <FaNewspaper />
                  </div>
                )}

                <div className="card-content">
                  <span className="news-date">
                    <FaCalendarAlt />
                    {formatDate(
                      article.published_at || article.created_at
                    )}
                  </span>

                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>

                  <Link
                    to={`/news/${article.slug || article.id}`}
                    className="text-link"
                  >
                    Read Article
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="section-action">
          <Link
            to="/news"
            className="button button-primary"
          >
            View All News
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;