import React from 'react';
import { Star } from 'lucide-react'; // Optional: Install lucide-react for SVG icons

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-blue-300 via-white to-purple-100 overflow-hidden font-sans"
    >
      {/* Decorative Stars */}
      <div className="absolute top-5 left-5 animate-pulse opacity-40">
        <Star className="text-yellow-300 w-8 h-8" />
      </div>
      <div className="absolute bottom-10 right-10 animate-ping opacity-30">
        <Star className="text-purple-400 w-6 h-6" />
      </div>
      <div className="absolute top-1/3 left-[45%] animate-bounce opacity-20">
        <Star className="text-indigo-400 w-10 h-10" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-600 drop-shadow-2xl mb-12 tracking-wide">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 font-medium">
          I'm a creative{" "}
          <span className="text-purple-700 font-semibold">Full-Stack Developer</span> who turns
          innovative ideas into polished products. With a love for clean code and smooth UX, I build
          <span className="text-blue-700 font-semibold"> scalable, real-world applications</span> for both web and mobile platforms.
        </p>

        <div className="text-left max-w-2xl mx-auto text-gray-900 text-base md:text-lg space-y-4 font-medium">
          <p className="text-indigo-700 font-semibold text-xl mb-2">Technologies I specialize in:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-purple-700 font-semibold">MERN Stack</span> – MongoDB, Express, React, Node.js
            </li>
            <li>
              <span className="text-blue-700 font-semibold">Next.js</span> – SEO-friendly and high-performance web apps
            </li>
            <li>
              <span className="text-green-700 font-semibold">React Native</span> – Cross-platform mobile app development
            </li>
            <li>
              UI & UX with Tailwind CSS, DaisyUI, and Framer Motion for smooth animations
            </li>
            <li>
              REST APIs, JWT authentication, Redux/Context API, and third-party integrations
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
