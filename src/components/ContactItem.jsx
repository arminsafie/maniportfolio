// eslint-disable-next-line react/prop-types
export default function ContactItem({ title, content, icon }) {
  return (
    <>
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <div className="contact-info">
          <p className="contact-title">{title}</p>
          <a href="" className="contact-link">
            {content}
          </a>
        </div>
      </li>
    </>
  );
}
