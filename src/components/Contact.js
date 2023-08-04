import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(false);
  const [err, seterrStatus] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(true);
    emailjs
      .sendForm(
        'service_tslky1a',

        'template_r9o1d18',
        form.current,
        'MtUTkhHM_Xz-hMj0E'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setStatus(false);
          seterrStatus(true);
          console.log(error.text);
        }
      );
    e.target.reset();
    setStatus(false);
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>elavarasan241020@gmail.com</h5>
            <a href="mailto:elavarasan241020@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="icon" />
            <h4>Want me building stuff for you? Hit me on Linkedin</h4>
            <h5>Elavarasan R</h5>
            <a href="ww.linkedin.com/in/elavarasan-r-b4473420b/">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <h5>9345448925</h5>
            <a href="https://api.whatsapp.com/send?phone=9345448925&text=hi%20welcome%20to%20my%20whatshap">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            required
            name="name"
            placeholder="Your Full Name"
          />
          <input type="email" required name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            {status ? 'Sending...' : ' Send Message'}
          </button>
          {err && <p>Somthing Wrong... Check your connection</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
