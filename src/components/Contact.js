import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export const Contact = () => {
 const [form, setForm] = useState({ name: "", email: "", message: "" });
     const [submitted, setSubmitted] = useState(false);
     const [sending, setSending] = useState(false);
     const [error, setError] = useState("");
     const formRef = useRef(null);

     const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
     const onSubmit = (e) => {
         e.preventDefault();
         setError("");
 
         if (!form.name || !form.email || !form.message) {
             setError("Please fill all fields!");
             return;
         }
 
         setSending(true);
 
         emailjs
             .sendForm(
                 "service_uafrao9",
                 "template_484xeci",
                 formRef.current,
                 "CuS3BJS8v2s5E_ACe"
             )
             .then(() => {
                 setSubmitted(true);
                 setForm({ name: "", email: "", message: "" });
 
                 setTimeout(() => setSubmitted(false), 3000);
             })
             .catch(() => setError("Failed to send, try again"))
             .finally(() => setSending(false));
     }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form action="" ref={formRef} onSubmit={onSubmit}>
                                                <div className="position-relative mb-4">
                                                    <i className="bi bi-person position-absolute  fs-4" style={{
                                                        top: "50%",
                                                        left: "12px",
                                                        transform: "translateY(-50%)",
                                                        color: "#9ca3af"
                                                    }}
                                                    ></i>
                                                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your Name" className="form-control  ps-5 py-3  white-placeholder  text-white border-0 rounded-3xl  " style={{ background: "linear-gradient(15deg, #1e293b, #0f172a)", maxWidth: "550px" }} required />
                                                </div>


                                                <div className="position-relative mb-4">
                                                    <i className="bi bi-envelope position-absolute  fs-4" style={{
                                                        top: "50%",
                                                        left: "12px",
                                                        transform: "translateY(-50%)",
                                                        color: "#9ca3af"
                                                    }}
                                                    ></i>
                                                    <input type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={onChange} placeholder="Your Email" className="form-control ps-5 py-3 white-placeholder text-white border-0 rounded-3xl  " style={{ background: "linear-gradient(15deg, #1e293b, #0f172a)", maxWidth: "550px" }} required />
                                                </div>

                                                <div className="position-relative mb-4">
                                                    <i className="bi bi-chat-left position-absolute  fs-4 " style={{
                                                        top: "20%",
                                                        left: "12px",
                                                        transform: "translateY(-50%)",
                                                        color: "#9ca3af"
                                                    }}
                                                    ></i>
                                                    <textarea name="message"
                                                        value={form.message}
                                                        onChange={onChange} placeholder="Your Message" className="form-control ps-5 py-3 white-placeholder text-white border-0 rounded-3xl  h-100 " rows="5" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", maxWidth: "550px" }} required></textarea>
                                                </div>
                                                <button type="submit" disabled={sending}><span>Submit</span></button>
                                            </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
