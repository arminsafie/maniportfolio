// eslint-disable-next-line react/prop-types
export default function TestimonialsItem({ content, img, title }) {
  return (
    <>
      <li className="testimonials-item">
        <div className="content-card" data-testimonials-item>
          <figure className="testimonials-avatar-box">
            <img
              src={img}
              alt="Daniel lewis"
              width="60"
              data-testimonials-avatar
            />
          </figure>

          <h4 className="h4 testimonials-item-title" data-testimonials-title>
            {title}
          </h4>

          <div className="testimonials-text" data-testimonials-text>
            <p>{content}</p>
          </div>
        </div>
      </li>
    </>
  );
}
