import BlogCard from "./BlogCard";
import "./BlogGrid.css";

export default function BlogGrid({ blogs }) {
  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}