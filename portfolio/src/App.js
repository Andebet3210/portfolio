import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  CodeBracketIcon,
  ServerStackIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const profile = process.env.PUBLIC_URL + '/profile.jpg';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-end px-2 sm:px-4 py-3 gap-2 sm:gap-0 relative">
        {/* Remove the name/logo from the navbar */}
        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden absolute right-4 top-3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 text-blue-700" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-blue-700" />
          )}
        </button>
        {/* Nav links */}
        <div
          className={`flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0
            ${
              menuOpen ? 'flex' : 'hidden'
            } sm:flex bg-white/95 sm:bg-transparent absolute sm:static left-0 top-full sm:top-auto px-4 sm:px-0 py-4 sm:py-0 shadow sm:shadow-none rounded sm:rounded-none`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-150 text-base block sm:inline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur border-t mt-12 py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-2 text-gray-700 text-sm text-center">
        <span className="break-words">
          © {new Date().getFullYear()} Andebet Molla. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

function App() {
  const resumePdf = { file: '/Resume.pdf', label: 'CV / Resume' };
  const certificatePdfs = [
    { file: '/Udacity.pdf', label: 'Udacity Web Development Program' },

    {
      file: '/Application Development.pdf',
      label: 'Oracle Application design',
    },
    { file: '/Database design.pdf', label: 'Oracle Database design' },
    {
      file: '/doc12.pdf',
      label: 'Employability skill and job readiness training',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 font-sans">
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left py-10 md:py-12 px-4 md:px-6 gap-12 md:gap-32 lg:gap-48"
      >
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Andebet Molla
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-700 font-semibold mb-2">
            Computer Science Graduate, 2025
          </p>
          <p className="max-w-xl text-gray-700 mx-auto md:mx-0">
            Computer Science graduate with a strong foundation in software
            development, algorithms, and data structures. Proficient in web
            technologies, with hands-on experience through academic projects.
            Eager to apply technical skills in a dynamic software engineering
            role and contribute to innovative development teams. Certified by
            Oracle & Udacity.
          </p>
        </div>
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg md:ml-4 flex-shrink-0">
          <img
            src={profile}
            alt="Andebet Molla"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-2xl mx-auto mt-16 md:mt-24 py-8 md:py-10 px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          I'm a Computer Science graduate with a passion for building real-world
          software solutions. I specialize in full-stack web development using
          React, Node.js, Express, and MongoDB, and I enjoy turning complex
          problems into clean, functional code. I’m always learning — from APIs
          to performance optimization — and I believe in writing scalable,
          maintainable code. I'm currently looking for junior or entry-level
          roles in software or web development where I can grow, contribute, and
          collaborate with awesome teams. 📌 ✅ Available for full-time,
          internship, or freelance opportunities (remote or on-site) Let’s
          connect!
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-4xl mx-auto py-8 md:py-10 px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-blue-800">
          Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 border-t-4 border-blue-400 flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Agape Catering Management System
            </h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Developed a full-stack catering management system for Agape
              Catering, enabling customers to browse menus, place food orders,
              and complete secure online payments. Built an admin dashboard for
              catering managers to view incoming orders, accept them, and assign
              tasks to chefs. Chefs receive scheduled orders and update
              preparation statuses in real time. Focused on responsive design,
              smooth user experience, and efficient order processing. Ensured
              secure user interactions and integrated version control through
              GitHub for collaborative development.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                React
              </span>
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                Tailwind CSS
              </span>
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                Node.js
              </span>
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                Express
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                MongoDB
              </span>
              <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                API Integration
              </span>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 border-t-4 border-blue-400 flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Ethio Tourism Guidance
            </h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Developed a tourism and guidance website to promote Ethiopia’s
              cultural and natural attractions. The platform allows users to
              explore destinations, view detailed tour packages, and make guided
              tour bookings online. Built a responsive frontend for seamless
              user interaction and a PHP/MySQL backend to handle tour data,
              booking requests, and contact forms.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                HTML
              </span>
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                CSS
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                JavaScript
              </span>
              <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">
                PHP
              </span>
              <span className="inline-block bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                MySQL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-4xl mx-auto py-8 md:py-10 px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-blue-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Frontend Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-t-4 border-blue-400">
            <CodeBracketIcon className="w-10 h-10 text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <ul className="text-gray-700 text-sm text-center space-y-1">
              <li>HTML5</li>
              <li>Java</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>React.js</li>
            </ul>
          </div>
          {/* Backend Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-t-4 border-blue-400">
            <ServerStackIcon className="w-10 h-10 text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg mb-2">Backend</h3>
            <ul className="text-gray-700 text-sm text-center space-y-1">
              <li>PHP</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          {/* Database Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-t-4 border-blue-400">
            <CircleStackIcon className="w-10 h-10 text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg mb-2">Database</h3>
            <ul className="text-gray-700 text-sm text-center space-y-1">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          {/* Tools Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-t-4 border-blue-400">
            <WrenchScrewdriverIcon className="w-10 h-10 text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg mb-2">Tools</h3>
            <ul className="text-gray-700 text-sm text-center space-y-1">
              <li>GitHub</li>
              <li>Netlify</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="max-w-3xl mx-auto py-8 md:py-10 px-2 sm:px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-blue-800">
          CV / Resume
        </h2>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-400 min-w-[280px] max-w-xl mx-auto">
          <object
            data={resumePdf.file}
            type="application/pdf"
            width="100%"
            height="400px"
            className="w-full rounded border mb-2"
          >
            <p className="text-gray-700">
              Unable to display PDF.{' '}
              <a
                href={resumePdf.file}
                download
                className="text-blue-600 underline"
              >
                Download
              </a>
            </p>
          </object>
          <span className="font-semibold mb-2 text-center break-words">
            {resumePdf.label}
          </span>
          <a
            href={resumePdf.file}
            download
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            Download PDF
          </a>
        </div>
      </section>
      {/* Certificates Section */}
      <section
        id="certificates"
        className="max-w-5xl mx-auto py-8 md:py-10 px-2 sm:px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-blue-800">
          Certificates
        </h2>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-[320px]">
            {certificatePdfs.map((pdf) => (
              <div
                key={pdf.file}
                className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-400 min-w-[280px] max-w-xs mx-auto"
              >
                <object
                  data={pdf.file}
                  type="application/pdf"
                  width="100%"
                  height="300px"
                  className="w-full rounded border mb-2"
                >
                  <p className="text-gray-700">
                    Unable to display PDF.{' '}
                    <a
                      href={pdf.file}
                      download
                      className="text-blue-600 underline"
                    >
                      Download
                    </a>
                  </p>
                </object>
                <span className="font-semibold mb-2 text-center break-words">
                  {pdf.label}
                </span>
                <a
                  href={pdf.file}
                  download
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-2xl mx-auto py-8 md:py-10 px-4 md:px-0"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
          Contact
        </h2>
        <div className="flex space-x-6 text-gray-700 text-base sm:text-lg items-center justify-center md:justify-start flex-wrap">
          <a
            href="mailto:andebetmolla211@gmail.com"
            className="hover:opacity-80 flex items-center gap-1"
            title="Email"
          >
            <EnvelopeIcon className="w-7 h-7" style={{ color: '#EA4335' }} />
            <span className="hidden sm:inline">andebetmolla211@gmail.com</span>
          </a>
          <a
            href="tel:+251902670626"
            className="hover:opacity-80 flex items-center gap-1"
            title="Phone"
          >
            <PhoneIcon className="w-7 h-7" style={{ color: '#25D366' }} />
            <span className="font-medium">+251902670626</span>
          </a>
          <a
            href="https://wa.me/251902670626"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-1"
            title="WhatsApp"
          >
            <svg className="w-7 h-7" fill="#25D366" viewBox="0 0 32 32">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.688-1.969A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.938 0-3.844-.521-5.5-1.5l-.396-.229-4.563 1.167 1.188-4.438-.25-.406C5.521 18.844 5 16.938 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.021-7.229c-.334-.167-1.979-.979-2.281-1.094-.302-.115-.521-.167-.74.167-.219.334-.844 1.094-1.031 1.313-.188.219-.375.25-.709.084-.334-.167-1.406-.518-2.68-1.65-.99-.883-1.66-1.969-1.854-2.303-.188-.323-.02-.497.146-.664.15-.15.334-.389.5-.584.167-.194.223-.334.334-.557.111-.223.056-.417-.028-.584-.084-.167-.74-1.781-1.012-2.438-.267-.646-.537-.56-.74-.57-.194-.008-.417-.01-.646-.01-.229 0-.584.084-.89.417-.306.334-1.17 1.145-1.17 2.792 0 1.646 1.199 3.236 1.367 3.459.167.223 2.363 3.615 5.729 4.926.802.346 1.427.553 1.914.707.805.257 1.537.221 2.117.134.646-.094 1.979-.809 2.26-1.591.28-.782.28-1.453.197-1.591-.084-.139-.306-.223-.64-.39z" />
            </svg>
            <span className="font-medium hidden sm:inline">+251902670626</span>
          </a>
          <a
            href="https://github.com/Andebet3210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-1"
            title="GitHub"
          >
            <svg className="w-7 h-7" fill="#181717" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/andebet_m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-1"
            title="Instagram"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="insta-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f58529" />
                  <stop offset="50%" stopColor="#dd2a7b" />
                  <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
              </defs>
              <path
                fill="url(#insta-gradient)"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mickey-andualem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-1"
            title="LinkedIn: Mickey Andualem"
          >
            <svg className="w-7 h-7" fill="#0077B5" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
