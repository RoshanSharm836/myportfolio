import React from "react";

function Skill() {
  const skill = [
    {
      title: "Frontend",
      content: [
        { name: "Vue", icon: "https://api.iconify.design/logos/vue.svg" },
        { name: "React", icon: "https://api.iconify.design/logos/react.svg" },
        {
          name: "Nuxt",
          icon: "https://api.iconify.design/logos/nuxt-icon.svg",
        },
        {
          name: "HTML",
          icon: "https://api.iconify.design/vscode-icons/file-type-html.svg",
        },
        {
          name: "CSS",
          icon: "https://api.iconify.design/vscode-icons/file-type-css.svg",
        },
        { name: "JS", icon: "https://api.iconify.design/logos/javascript.svg" },
        {
          name: "TailwindCSS",
          icon: "https://api.iconify.design/logos/tailwindcss-icon.svg",
        },
      ],
    },
    {
      title: "Backend",
      content: [
        {
          name: "NodeJS",
          icon: "https://api.iconify.design/logos/nodejs-icon.svg",
        },
        {
          name: "ExpressJS",
          icon: "./express.svg",
        },
        { name: "NestJS", icon: "https://api.iconify.design/logos/nestjs.svg" },
      ],
    },
    {
      title: "Database",
      content: [
        {
          name: "MongoDB",
          icon: "https://api.iconify.design/logos/mongodb-icon.svg",
        },
        { name: "MySQL", icon: "https://api.iconify.design/logos/mysql.svg" },
      ],
    },
    {
      title: "Tools",
      content: [
        { name: "Git", icon: "https://api.iconify.design/logos/git-icon.svg" },
        {
          name: "GitHub",
          icon: "https://api.iconify.design/logos/github-icon.svg",
        },
        {
          name: "VSCode",
          icon: "https://api.iconify.design/logos/visual-studio-code.svg",
        },
        {
          name: "Postman",
          icon: "https://api.iconify.design/logos/postman.svg",
        },
      ],
    },
  ];

  return (
    <article className="skill" data-page="skill">
      <header>
        <h2 className="h2 article-title">Skill</h2>
      </header>

      <section className="skill-text">
        <div className=" !grid grid-cols-2 gap-3 justify-items-start project-item active">
          {skill.map((item, index) => (
            <article
              key={index}
              className="aspect-video h-full skill-item w-full p-5 rounded-md "
            >
              <h3 className="h3 btn">{item.title}</h3>
              <span className="w-8 bg-white  p-[1px] rounded-lg"></span>
              <ul className="flex flex-wrap gap-5 items-center mt-5">
                {item.content.map((item, index) => (
                  <li key={index}>
                    <span className="text-2xl grayscale">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-16 h-16 "
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Skill;
