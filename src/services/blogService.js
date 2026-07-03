import { client } from "../lib/sanity";
import { GET_ALL_BLOGS, GET_BLOG_BY_SLUG } from "../lib/queries";
import { urlFor } from "../lib/imageUrl";

function transformBlog(blog) {
  return {
    id: blog._id,
    title: blog.title,
    excerpt: blog.excerpt,
    slug: blog.slug?.current || "",
    image: blog.featuredImage ? urlFor(blog.featuredImage).url() : "",
    date: new Date(blog.publishedAt).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    category: blog.category,
    author: blog.author,
    featured: blog.featured ?? false,
    body: blog.body,
    seoTitle: blog.seoTitle,
    seoDescription: blog.seoDescription,
    tags: blog.tags || [],
  };
}

export async function getAllBlogs() {
  const blogs = await client.fetch(GET_ALL_BLOGS);
  return blogs.map(transformBlog);
}

export async function getBlogBySlug(slug) {
  console.log("Slug received:", slug);

  const blog = await client.fetch(GET_BLOG_BY_SLUG, { slug });

  console.log("Blog from Sanity:", blog);

  return blog ? transformBlog(blog) : null;
}