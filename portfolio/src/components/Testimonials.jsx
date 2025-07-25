import React from "react";

function TestimonialCard({ name, text, role }) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 border border-white/20">
      <p className="text-gray-800 italic mb-4 leading-relaxed">“{text}”</p>
      <div className="mt-4">
        <p className="font-semibold text-indigo-700">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Founder, BrightTech Solutions",
      text: "Amrit is a powerhouse of development skills. He translated our vision into a seamless, responsive, and fast-performing web app that truly elevated our business.",
    },
    {
      name: "David Kumar",
      role: "CTO, CodeNest",
      text: "From architecture planning to deployment, Amrit handled everything with expertise. His clean code and attention to detail are unmatched.",
    },
    {
      name: "Ayesha Rahman",
      role: "Project Manager, WebSprint",
      text: "Amrit brings creativity, clarity, and consistency to every project. Working with him was smooth, and the results were beyond our expectations.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f9ff] text-gray-900"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-lg">
        What Clients Say
      </h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
          />
        ))}
      </div>
    </section>
  );
}
