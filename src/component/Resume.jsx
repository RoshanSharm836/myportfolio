import React from "react";

function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"
              ></path>
              <path
                fill="currentColor"
                d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
              ></path>
            </svg>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              BACHELOR IN INFORMATION TECHNOLOGY
            </h4>

            <span>09/2019 – 08/2022</span>

            <p className="timeline-text">Anugrah Narayan College</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">INTERMEDIATE</h4>

            <span>05/2016 – 06/2018</span>

            <p className="timeline-text">Anugrah Narayan College</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MATRICULATION</h4>

            <span>2002 — 2004</span>

            <p className="timeline-text capitalize">
              holy mission secondary school
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper !m-0">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.5 2.5 0 0 0 2 8.5v10A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.5.5 0 0 0 9 14h6a.5.5 0 0 0 .158-.025L21 12.027zm0-7.494a.5.5 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.5.5 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z"
              ></path>
            </svg>
          </div>

          <h3 className="h3">PROFESSIONAL EXPERIENCE</h3>
        </div>
        <div className="h5 ml-11 md:ml-16 my-3 text-sm">
          Total Experience: 1.5 Years +
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Bharatrath</h3>
            <p className="timeline-text">Junior Full Stack Developer</p>

            <span>Aug 2023 — Present</span>

            <p className="timeline-text gap-2 grid mt-3">
              <p>
                <span>Website Builder:</span> Developed a no-code website
                builder, empowering clients to create their websites
                effortlessly without needing technical knowledge.
              </p>
              <p>
                <span>Landing Page Development: </span> Designed and enhanced a
                landing page, implementing key front-end improvements to boost
                user engagement and experience.
              </p>
              <p>
                <span>SASS System Development: </span> Played a pivotal role in
                establishing a SASS system, contributing to the creation of a
                SASS product/ERP system aimed at optimizing business processes.
              </p>
              <p>
                <span>UX/UI Collaboration: </span>
                Worked closely with the UX/UI team to refine user experience and
                interface design, ensuring the product is user-friendly and
                aesthetically pleasing.
              </p>
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
}

export default Resume;
