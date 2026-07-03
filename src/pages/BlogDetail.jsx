import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { getBlogBySlug } from "../services/blogService";
import "./BlogDetail.css";

export default function BlogDetail() {
  // Get slug from URL manually
  const slug = decodeURIComponent(
    window.location.pathname.split("/").pop()
  );

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      try {
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadBlog();
  }, [slug]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!blog) {
    return <h1>Blog not found.</h1>;
  }

  return (
    <article className="blog-detail">
      <div className="blog-detail-inner">
        <button
          className="back-btn"
          onClick={() => {
            if (window.navigate) {
              window.navigate('/blogs');
            } else if (window.history && window.history.length) {
              window.history.back();
            } else {
              window.location.href = '/blogs';
            }
          }}
          aria-label="Back to blogs"
        >
          ← Back
        </button>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="detail-image"
          />
        )}

        <div className="blog-detail-content">
          <div className="meta">
            <span className="category">{blog.category}</span>
            <time className="date">{blog.date}</time>
          </div>

          <h1 className="title">{blog.title}</h1>

          <div className="content">
            <PortableText value={blog.body} />
          </div>
        </div>
      </div>
    </article>
  );
}