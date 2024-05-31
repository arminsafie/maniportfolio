import BlogPostItem from "./BlogPostItem";
import blog2 from "../assets/images/blog-2.jpg";

export default function Blog() {
  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>
        <section className="blog-posts">
          <ul className="blog-posts-list">
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
            <BlogPostItem
              title="Best fonts every designer"
              content="Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
              eligendi."
              img={blog2}
            />
          </ul>
        </section>
      </article>
      ;
    </>
  );
}
