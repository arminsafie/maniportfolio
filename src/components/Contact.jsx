import ContactForm from "./ContactForm";
import Mapbox from "./Mapbox";

export default function Contact() {
  return (
    <>
      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <Mapbox />
        <ContactForm />
      </article>
    </>
  );
}
