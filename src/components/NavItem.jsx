// eslint-disable-next-line react/prop-types
export default function NavItem({ text }) {
  return (
    <>
      <li className="navbar-item">
        <button className="navbar-link  active" data-nav-link>
          {text}
        </button>
      </li>
    </>
  );
}
