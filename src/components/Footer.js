import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const email = "mailto:dhadukmaulik2002@gmail.com";
  const linkedin = "https://www.linkedin.com/in/dhaduk-maulik-80592a22a/";
  const github = "https://github.com/maulik-dhaduk/";

  return (
    <footer className="footer bg-dark text-white py-3">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-2 text-center" style={{ fontSize: "0.9rem" }}>
              Copyright 2026. All Rights Reserved by Maulik Dhaduk.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            {/* Social icons - ORIGINAL HTML, design unchanged */}
            <div className="social-icon">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href={email} target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
