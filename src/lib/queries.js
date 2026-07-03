export const GET_ALL_BLOGS = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    category,
    featured,
    author
  }
`;

/*export const GET_ALL_BLOGS = `
*[_type == "blog"]{
  title,
  slug
}
`;*/
export const GET_BLOG_BY_SLUG = `
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    category,
    featured,
    author,
    body,
    seoTitle,
    seoDescription,
    tags
  }
`;