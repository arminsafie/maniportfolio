// eslint-disable-next-line react/prop-types
export default function Serviceitem({ img, title, content }) {
  return (
    <div>
      <li className="service-item">
        <div className="service-icon-box">
          <img src={img} alt="design icon" width="40" />
        </div>

        <div className="service-content-box">
          <h4 className="h4 service-item-title">{title}</h4>

          <p className="service-item-text">{content}</p>
        </div>
      </li>
    </div>
  );
}
