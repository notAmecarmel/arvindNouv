/*import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogService";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getAllBlogs();

        console.log("Transformed Blogs:", data);

        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (loading) {
    return <h2>Loading blogs...</h2>;
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Blogs</h1>

      <p>{blogs.length} Articles</p>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
          )}

          <small>{blog.category}</small>

          <h2>{blog.title}</h2>

          <p>{blog.excerpt}</p>

          <small>{blog.date}</small>
        </div>
      ))}
    </div>
  );
}*/

import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogService";
import BlogGrid from "../components/blog/BlogGrid";
import "./Blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getAllBlogs();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (loading) {
    return <h2>Loading blogs...</h2>;
  }

  return (
    <main className="blogs-page">
      <section className="blogs-heading-group">
        <h1>Blogs</h1>
        <p>Discover the latest insights, treatments, and stories from our practice.</p>
      </section>

      <div className="blogs-meta">
        <span>{blogs.length} Articles</span>
        <span>Curated for patient education and expert care.</span>
      </div>

      <section className="blogs-grid">
        <BlogGrid blogs={blogs} />
      </section>
    </main>
  );
}