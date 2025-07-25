import CwsLogo from "/assets/Cws.png";
import IdaLogo from "/assets/Ida.png";
import RgpvLogo from "/assets/Rgpv.png";
import AksLogo from "/assets/Aks.png";
import NarmadaLogo from "/assets/Narmada.png";

function ExperienceItem({
  college,
  company,
  role,
  time,
  details,
  parcent,
  src,
}) {
  return (
    <div
      className=" bg-white/60 backdrop-blur-md border border-purple-300 rounded-4xl p-10 shadow-4xl transform hover:scale-105 
    transition-transform duration-500 mb-10 hover:bg-white/80"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {src && (
          <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28">
            <img
              src={src}
              alt="college-logo"
              className=" w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg hover:rotate-[360deg] transition-transform duration 500"
            />
          </div>
        )}
        <div className="flex-1 ">
          <h3 className="text-2xl font-bold text-purple-800 drop-shadow-sm">
            {role}
          </h3>
          {parcent && (
            <p className="text-lg font-semibold text-pink-600 mt-1">
              🎯 Percentage: {parcent}
            </p>
          )}
          <p className="text-gray-700 italic mt-1">
            {college || company} |{" "}
            <span className="font-mono text-gray-800">{time}</span>
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-800">
            {details.map((detail, idx) => (
              <li key={idx} className="leading-relaxed">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default function Experience() {
  const experiences = [
    {
      company: "Cloud Web Solutions",
      role: "Full-Stack Developer",
      time: "2025 - Present",
      src: CwsLogo,
      details: ["Built scalable APIs with Node.js"],
    },
    {
      company: "IDA",
      role: "Web Development Trainee",
      time: "2024 (6 months)",
      src: IdaLogo,
      details: [
        "Completed intensive training on MERN stack",
        "Developed multiple mini projects",
      ],
    },
    {
      college: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (M.P)",
      role: "MCA (Hons) Specialization in Computer Science",
      time: "2022 - 2024",
      parcent: "76.5%",
      src: RgpvLogo,
      details: ["Learned advanced computer science and programming concepts"],
    },
    {
      college: "AKS University, Satna (M.P)",
      role: "BCA (Hons)",
      time: "2018 - 2021",
      parcent: "60.2%",
      src: AksLogo,
      details: [
        "Studied core computer subjects and software development",
        "Completed projects in Java and Web technologies",
      ],
    },
    {
      college: "A.N.S.H School Gangeo Rewa (M.P)",
      role: "12 th (Science)",
      time: "2017 - 2018",
      parcent: "61.2%",
      src: NarmadaLogo,
      details: ["Studied all subjects Science"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 bg-gradient-to-tr from-blue-500 via-purple-50 to-pink-300  max-w-6x1 mx-auto"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r via-pink-500 to-indigo-600 drop-shadow-lg ">
        🌟 Experience & Education
      </h2>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          company={exp.company}
          college={exp.college}
          src={exp.src}
          role={exp.role}
          time={exp.time}
          parcent={exp.parcent}
          details={exp.details}
        />
      ))}
    </section>
  );
}
