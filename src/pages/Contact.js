import React, { useState, useEffect } from "react";
// import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title animate fade-in">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info animate slide-in-left">
            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <h3>Address</h3>
                <p>Trichy, Tamilnadu, India</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>elavarasan241020@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="content">
                <h3>Phone</h3>
                <p>+91 9345448925</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Elavarasansanjai/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/r-elavarasan-ravichandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="contact-form-container animate slide-in-right">
            {submitSuccess ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? "error" : ""}
                  />
                  {formErrors?.name && (
                    <span className="error-message">{formErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                  />
                  {formErrors?.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? "error" : ""}
                  />
                  {formErrors?.subject && (
                    <span className="error-message">{formErrors.subject}</span>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? "error" : ""}
                    rows="6"
                  ></textarea>
                  {formErrors?.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {isSubmitting && <span className="spinner"></span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
