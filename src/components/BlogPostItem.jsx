// eslint-disable-next-line react/prop-types
export default function BlogPostItem({ img, title, content }) {
  return (
    <>
      <li className="blog-post-item">
        <a href="#">
          <figure className="blog-banner-box">
            <img src={img} alt="Design conferences in 2022" loading="lazy" />
          </figure>

          <div className="blog-content">
            <div className="blog-meta">
              <p className="blog-category">Design</p>

              <span className="dot"></span>

              <time dateTime="2022-02-23">Fab 23, 2022</time>
            </div>

            <h3 className="h3 blog-item-title">{title}</h3>

            <p className="blog-text">{content}</p>
          </div>
        </a>
      </li>
    </>
  );
}
