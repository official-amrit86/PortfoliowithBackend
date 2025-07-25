import React, { useState } from "react";

function SkillItem({ name, img }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white shadow-2xl rounded-2xl p-6 text-center transform transition duration-300 hover:scale-110 hover:rotate-1 hover:shadow-3xl min-h-[100px]"
    >
      <p className="text-xl font-bold drop-shadow-md">{name}</p>
      {showImage && (
        <img
          src={img}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain rounded-2xl p-4 bg-white bg-opacity-90 transition-opacity duration-500 ease-in-out opacity-100 z-10"
        />
      )}
    </div>
  );
}

export default function Skills() {
  const skills = [
    { name: "React", img: "/assets/skills-logo/React.png" },
    { name: "Node.js", img: "/assets/skills-logo/Node.png" },
    { name: "Express", img: "/assets/skills-logo/Express.png" },
    { name: "MongoDB", img: "/assets/skills-logo/Mongodb.png" },
    { name: "Javascript", img: "/assets/skills-logo/Javascript.png" },
    { name: "HTML5", img: "/assets/skills-logo/Html.png" },
    { name: "CSS3", img: "/assets/skills-logo/Css.png" },
    { name: "Tailwind CSS", img: "/assets/skills-logo/Tailwindcss.png" },
    { name: "Git & GitHub", img: "/assets/skills-logo/Github.png" },
    { name: "REST API", img: "/assets/skills-logo/Restapi.png" },
    { name: "Vite", img: "/assets/skills-logo/Vite.png" },
    { name: "Firebase", img: "/assets/skills-logo/Firebase.png" },
    { name: "Reactnative", img: "/assets/skills-logo/Reactnative.png" },
    { name: "Vercel", img: "/assets/skills-logo/Vercel.png" },
    { name: "Netlify", img: "/assets/skills-logo/Netlify.png" },
    { name: "C-language", img: "/assets/skills-logo/C-language.png" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
        🚀 My Superpowers
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} img={skill.img} />
        ))}
      </div>
    </section>
  );
}
