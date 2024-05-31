import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <NavItem text="About" />
          <NavItem text="Resume" />
          <NavItem text="Portfolio" />
          <NavItem text="Blog" />
          <NavItem text="Contact" />
        </ul>
      </nav>
    </>
  );
}
