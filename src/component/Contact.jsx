import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_a5sdypb", "template_yj3239u", form.current, {
        publicKey: "edUa7b81FUQRzPW2Z",
      })
      .then(
        () => {
          toast.success("Mail Send Successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  }
  return (
    <article class="contact" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136902.7732968949!2d85.17555985906912!3d25.620434844225745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723668215393!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            title="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section class="contact-form">
        <h3 class="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail}>
          <div class="input-wrapper">
            <input
              type="text"
              name="user_name"
              class="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="user_email"
              class="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button class="form-btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z"></path>
            </svg>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
