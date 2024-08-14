import React from "react";

function Project() {
  const arr = [
    {
      name: "spacex-demo",
      url: "https://spacex11.netlify.app/",
      image: "./spacex.png",
      repo: "https://github.com/RoshanSharm836/spacex-demo",
      para: "It is a website that show all SpaceX's capsules that are been created by SpaceX. It is a Individual project.",
    },
    {
      name: "Pokédex",
      url: "https://pokemonlist12.netlify.app/",
      image: "./pokemon.png",
      repo: "https://github.com/RoshanSharm836/pokemon",
      para: "It is a website that shows all Pokemons with all details about them. It is a Individual project.",
    },
    {
      name: "Typing Test",
      url: "https://typingtest1.netlify.app/",
      image: "./typing.png",
      repo: "https://github.com/RoshanSharm836/Typing-test",
      para: "This one is a typing test that expresses your typing skills in words per minute. It is a Individual project.",
    },
    {
      name: "zagnow",
      url: "https://zagnow-roshan.netlify.app/",
      image: "./zagnow.png",
      repo: "https://github.com/RoshanSharm836/zagnow",
      para: "It is an e-commerce website where users can select item form the website and buy. It is a Individual project.",
    },
    {
      name: "Quora Clone",
      url: "https://quorac.netlify.app/",
      image: "./quora.png",
      repo: "https://github.com/RoshanSharm836/Quora-mern",
      para: "Quora is a social media website to gain and share knowledge. It is a place where users can ask questions and connect with people. It is a Individual project.",
    },
    {
      name: "Fast Resume Builder",
      url: "https://fastresumes.netlify.app/",
      image: "./fastresume.png",
      repo: "https://github.com/RoshanSharm836/Resume-builder",
      para: "Our Perfect resume builder takes the hassle out of resume writing. Choose templates and follow easy prompts to create the perfect job-ready resume. It is a Individual project.",
    },
  ];

  return (
    <article className="Project" data-page="Project">
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {arr.map((item, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category="web development"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      >
                        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
                        <path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path>
                      </g>
                    </svg>
                  </div>

                  <img src={item.image} alt={item.name} loading="lazy" />
                </figure>
                <div className="flex justify-between project-title py-2 btn">
                  <h3>{item.name}</h3>
                  <a href={item.repo} rel="noopener noreferrer" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      ></path>
                    </svg>
                  </a>
                </div>

                <p className="project-category">{item.para}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Project;
