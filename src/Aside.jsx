import React from "react";

function Aside() {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box ">
          <img
            src="./roshan.jpg"
            alt="Roshan Kumar"
            width="80"
            className="rounded-[30px]"
          />
        </figure>

        <div className="info-content ">
          <h1 className="name" title="Roshan Kumar">
            Roshan Kumar
          </h1>

          <p className="title">Full Stack Web Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator2 !my-7"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                ></path>
              </svg>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:roshan836sharma@gmail.com"
                className="contact-link"
              >
                roshan836sharma@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                ></path>
              </svg>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:6207412616" className="contact-link">
                6207412616
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"
                  className="clr-i-outline clr-i-outline-path-1"
                ></path>
                <path
                  fill="currentColor"
                  d="M8 14h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-2"
                ></path>
                <path
                  fill="currentColor"
                  d="M14 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-3"
                ></path>
                <path
                  fill="currentColor"
                  d="M20 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-4"
                ></path>
                <path
                  fill="currentColor"
                  d="M26 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-5"
                ></path>
                <path
                  fill="currentColor"
                  d="M8 19h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-6"
                ></path>
                <path
                  fill="currentColor"
                  d="M14 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-7"
                ></path>
                <path
                  fill="currentColor"
                  d="M20 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-8"
                ></path>
                <path
                  fill="currentColor"
                  d="M26 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-9"
                ></path>
                <path
                  fill="currentColor"
                  d="M8 24h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-10"
                ></path>
                <path
                  fill="currentColor"
                  d="M14 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-11"
                ></path>
                <path
                  fill="currentColor"
                  d="M20 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-12"
                ></path>
                <path
                  fill="currentColor"
                  d="M26 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-13"
                ></path>
                <path
                  fill="currentColor"
                  d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
                  className="clr-i-outline clr-i-outline-path-14"
                ></path>
                <path
                  fill="currentColor"
                  d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
                  className="clr-i-outline clr-i-outline-path-15"
                ></path>
                <path
                  fill="currentColor"
                  d="M13 6h10v2H13z"
                  className="clr-i-outline clr-i-outline-path-16"
                ></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1982-06-23">June 7, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                ></path>
              </svg>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Patna, Bihar, India</address>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Aside;
