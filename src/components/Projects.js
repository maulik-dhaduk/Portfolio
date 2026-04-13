import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/image1.webp";
import project2 from "../assets/img/image2.webp";
import project3 from "../assets/img/image3.webp";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import 'animate.css';

export const Projects = () => {


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
             <div>
              <h2>Projects</h2>
                <div
                  className="row m-auto mt-4 g-4"
                  style={{ maxWidth: "1250px" }}
                >
                  {/* Project 1 */}
                  <div
                    className="col-12 col-lg-4 "
                    data-aos="fade-right"
                    data-aos-offset="300"
                  >
                    <div
                      className="border border-secondary rounded-4 p-3 h-100"
                      style={{ background: "#1f213d" }}
                    >
                      <div className="p-2">
                        <img
                          src={project1}
                          alt="E-Commerce Project"
                          className="img-fluid rounded-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="ps-2">
                        <h4>E-COMMERCE</h4>
                        <p className="small mt-3">
                          A responsive e-commerce website inspired by developed
                          using HTML, CSS, and JavaScript. Features include product
                          listing, add to cart, remove from cart, quantity update, price
                          calculation, and interactive UI elements.
                        </p>

                        <a
                          href="https://shoeshub-store.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none"
                          style={{ color: "#4383d1" }}
                        >
                          Live Demo
                          <i className="ms-2 bi bi-box-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div
                    className="col-12 col-lg-4"
                    data-aos="fade-up"
                    data-aos-offset="300"
                  >
                    <div
                      className="border border-secondary rounded-4 p-3 h-100"
                      style={{ background: "#1f213d" }}
                    >
                      <div className="p-2 text-center">
                        <img
                          src={project3}
                          alt="Qarotmen Website"
                          className="img-fluid rounded-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="ps-2">
                        <h4>Qarotmen Website</h4>
                        <p className="small mt-3">
                          A full-stack eCommerce website built using **Node.js, Express.js, MongoDB (Mongoose), and React.js** with dynamic product and user management. It includes features like authentication, cart functionality, and secure order processing through RESTful APIs.The application is fully responsive and delivers a smooth shopping experience across all devices.

                        </p>

                        <a
                          href="https://qarotmen.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none"
                          style={{ color: "#4383d1" }}
                        >
                          Live Demo
                          <i className="ms-2 bi bi-box-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div
                    className="col-12 col-lg-4"
                    data-aos="fade-left"
                    data-aos-offset="300"
                  >
                    <div
                      className="border border-secondary rounded-4 p-3 h-100"
                      style={{ background: "#1f213d" }}
                    >
                      <div className="p-2 text-center">
                        <img
                          src={project2}
                          alt="Amazon Prime Clone"
                          className="img-fluid rounded-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="ps-2">
                        <h4>Amazon Prime</h4>
                        <p className="small mt-3">
                          A front-end clone of the Amazon Prime Video website built using
                          pure HTML and CSS. This project was created for learning and
                          practicing web design, layout structure, and responsive styling.
                        </p>

                        <a
                          href="https://primevideo-clone-7aaeca.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none"
                          style={{ color: "#4383d1" }}
                        >
                          Live Demo
                          <i className="ms-2 bi bi-box-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Banner 2" decoding="async" />
    </section>
  )
}
