import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <article
      className="blog-card"
      onClick={() => window.navigate(`/blogs/${blog.slug}`)}
      style={{ cursor: "pointer" }}
    >
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card-image"
        />
      )}

      <div className="blog-card-content">
        <div className="blog-category">{blog.category}</div>

        <h2 className="blog-title">{blog.title}</h2>

        <p className="blog-excerpt">{blog.excerpt}</p>

        <div className="blog-footer">
          <span className="blog-date">{blog.date}</span>

          <span className="blog-readmore">
            Read Article →
          </span>
        </div>
      </div>
    </article>
  );
}