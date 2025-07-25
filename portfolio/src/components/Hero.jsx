import React, { useEffect, useRef } from "react";
import profileImg from "/assets/portfolio.jpg";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > w) star.dx *= -1;
        if (star.y < 0 || star.y > h) star.dy *= -1;
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas on window resize
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-36 bg-gradient-to-r from-blue-100 to-blue-400 overflow-hidden"
    >
      {/* Galaxy Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-800 to-pink-500 text-transparent bg-clip-text animate-pulse drop-shadow-md">
          <span className="block bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#ff00cc] text-transparent bg-clip-text drop-shadow-xl animate-text-glow">
            Hey there, I'm
          </span>
          <span className="animate-wiggle">Amrit Raj Mishra</span>👋
        </h1>
        <br /> <br />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block mt-4 text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#34e89e] via-[#0f3443] to-[#43cea2] drop-shadow-md animate-slide-in-3d">
            Full-Stack & React Native Developer
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
          Full-Stack Developer | MERN Stack Expert | JavaScript Enthusiast
        </p>
        <br />
        <p className="mt-4 text-base md:text-lg text-gray-800 font-medium bg-white/70 backdrop-blur-md p-3 rounded-lg shadow-md">
          I craft modern web apps using{" "}
          <span className="font-bold text-indigo-600">React</span>,{" "}
          <span className="font-bold text-green-600">Node.js</span>,{" "}
          <span className="font-bold text-yellow-600">MongoDB</span>, and{" "}
          <span className="font-bold text-blue-600">Express</span> with clean
          code and stunning UI/UX design.
        </p>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          id="myimg"
          src={profileImg}
          alt="Amrit Raj Mishra"
          className="w-92 h-92 md:w-84 md:h-84 object-cover rounded-full border-4 border-indigo-300 shadow-lg hover:rotate-360 transition-transform duration-1000"
        />
      </div>
    </section>
  );
}
