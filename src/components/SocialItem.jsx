// eslint-disable-next-line react/prop-types
export default function SocialItem({ icon }) {
  return (
    <>
      <li className="social-item">
        <a href="#" className="social-link">
          <ion-icon name={icon}></ion-icon>
        </a>
      </li>
    </>
  );
}
