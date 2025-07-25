import React from "react";
const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 shadow-2xl rounded-xl p-6 transform hover:scale-105 hover:shadow-3xl   transition duration-300">
      <h3 className=" text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-2 py-1 rounded-md shadow"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Calculator App",
      description: "Simple and modern calculator using React.",
      tech: ["React", "CSS"],
      github: "https://github.com/official-amrit86/Calculater",
      live: "https://official-amrit86.github.io/Calculater/"
    },
    {
      title: "Analog Watch App",
      description: "Live Analog watch app built with HTML, CSS, JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/official-amrit86/Watch-Anolog",
      live: " https://official-amrit86.github.io/Watch-Anolog/"
    },
    {
      title: "Flipkart Clone",
      description: "Responsive clone of flipkart with cart, login, and product features.",
      tech: ["React", "Redux", "Firebase","Router" ,"Tailwind"],
      github: "https://github.com/official-amrit86/Flipkart-Clone",
      live: "http://flipkart-clone-git-main-official-amrit86s-projects.vercel.app"
    },
    {
      title: "Amazon Clone",
      description: "Responsive clone of Amazon with cart, login, and product features.",
      tech: ["React", "Redux", "Firebase", "Tailwind"],
      github: "https://github.com/official-amrit86/Amazon-Clone",
      live: "https://official-amrit86.github.io/Amazon-Clone/"
    },
    {
      title: "E-commerce Store",
      description: "Built with MERN stack, includes Stripe payments and admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/amrit/ecommerce-store",
      live: "https://amrit-ecommerce-store.netlify.app"
    },
    {
      title: "Crud-Operations",
      description: "Responsive clone of flipkart with cart, login, and product features.",
      tech: ["React", "Redux", "Firebase","Router" ,"Tailwind"],
      github: "https://github.com/official-amrit86/axiosReactApiFullstack/tree/main/src/components",
      live: "https://axiosreactapi.netlify.app/"
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gradient-to-br from-blue-300 via-white to-purple-300"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text drop-shadow-lg">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
