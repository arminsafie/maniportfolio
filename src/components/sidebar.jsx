import ContactItem from "./ContactItem";
import SideInfo from "./SideInfo";
import SocialItem from "./SocialItem";
export default function Sidebar() {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <SideInfo />
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <ContactItem
              title="Email"
              content="richard@example.com"
              icon="mail-outline"
            />
            <ContactItem
              title="Email"
              content="richard@example.com"
              icon="mail-outline"
            />
            <ContactItem
              title="Email"
              content="richard@example.com"
              icon="mail-outline"
            />

            <ContactItem
              title="Email"
              content="richard@example.com"
              icon="mail-outline"
            />
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <SocialItem icon="logo-facebook" />
            <SocialItem icon="logo-facebook" />
            <SocialItem icon="logo-facebook" />
            <SocialItem icon="logo-facebook" />
          </ul>
        </div>
      </aside>
    </>
  );
}
