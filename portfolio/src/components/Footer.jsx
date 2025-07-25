import React from 'react';

export default function Footer() {
  const links = [
    { label: 'About', link: '#about', icon: 'assets/about-logo/About.png' },
    { label: 'Projects', link: '#projects', icon: 'assets/about-logo/Project1.png' },
    { label: 'Contact', link: '#contact', icon: 'assets/about-logo/Cantact.png' },
    { label: 'GitHub', link: 'https://github.com/your-github-username', icon: '/assets/about-logo/Github.png' },
    { label: 'Twitter', link: 'https://x.com/OfficialAmrit86', icon: '/assets/about-logo/Twitter.png' },
    { label: 'Instagram', link: 'https://www.instagram.com/officialamrit86', icon: '/assets/about-logo/Instagram.png' },
    { label: 'Facebook', link: 'https://www.facebook.com/', icon: '/assets/about-logo/Facebook.png' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/amritrajmishra', icon: '/assets/about-logo/Linkdine.png' },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 text-white py-8 px-4 mt-10 shadow-2xl rounded-t-2xl font-sans tracking-wide">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-semibold">&copy; 2025 Amrit. All rights reserved.</p>

        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm font-medium justify-center items-center">
          {links.map(({ label, link, icon }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline transition-all duration-300 transform hover:scale-110 hover:-rotate-1 hover:text-yellow-300"
            >
              <img
                src={icon}
                alt={`${label} icon`}
                className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 hover:scale-125"
              />
              {label}
            </a>
          ))}

          <a
            href="/Update-Cv (8).pdf"
            download
            className="flex items-center gap-1 text-yellow-200 hover:underline transition-all duration-300 transform hover:scale-110 hover:rotate-1"
          >
            <img
              src="/assets/about-logo/Resume.png"
              alt="Download CV icon"
              className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 hover:scale-200"
            />
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
