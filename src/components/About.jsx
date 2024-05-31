import Serviceitem from "./Serviceitem";
import iconDesign from "../assets/images/icon-design.svg";
import avatar1 from "../assets/images/avatar-1.png";
import logo1Color from "../assets/images/logo-1-color.png";
import TestimonialsItem from "./TestimonialsItem";
import ClientsItem from "./ClientsItem";
export default function About() {
  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Im Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </section>

        {/* <!--
    - service
  --> */}

        <section className="service">
          <h3 className="h3 service-title">What im doing</h3>

          <ul className="service-list">
            <Serviceitem
              title="Web design"
              img={iconDesign}
              content="The most modern and high-quality design made at a professionallevel."
            />
            <Serviceitem
              title="Web design"
              img={iconDesign}
              content="The most modern and high-quality design made at a professionallevel."
            />
            <Serviceitem
              title="Web design"
              img={iconDesign}
              content="The most modern and high-quality design made at a professionallevel."
            />
            <Serviceitem
              title="Web design"
              img={iconDesign}
              content="The most modern and high-quality design made at a professionallevel."
            />
          </ul>
        </section>

        {/* <!--
    - testimonials
  --> */}

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <TestimonialsItem
              title="Daniel lewis"
              img={avatar1}
              content=" Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia."
            />
            <TestimonialsItem
              title="Daniel lewis"
              img={avatar1}
              content=" Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia."
            />
            <TestimonialsItem
              title="Daniel lewis"
              img={avatar1}
              content=" Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia."
            />
            <TestimonialsItem
              title="Daniel lewis"
              img={avatar1}
              content=" Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia."
            />
          </ul>
        </section>

        {/* <!--
    - testimonials modal
  --> */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 
  <!--
    - clients
  --> */}

        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <ClientsItem img={logo1Color} />
            <ClientsItem img={logo1Color} />
            <ClientsItem img={logo1Color} />
            <ClientsItem img={logo1Color} />
            <ClientsItem img={logo1Color} />
            <ClientsItem img={logo1Color} />
          </ul>
        </section>
      </article>
    </>
  );
}
