'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Set the current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Optional cleanup (remove listeners on unmount)
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => { });
      });
    };
  }, []);

  const projects = [
    {
      title: "Enterprise SaaS Platform",
      description: "A comprehensive business management solution with analytics, CRM, and workflow automation.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1af9937f-b49a-4c4c-ae98-2e0656f18a3e.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },

    {

      title: "Nabeela Coaching",
      description: "A comprehensive platform offering courses, consultations, and resources for personal development.",
      image: "nabeelaspace.png",
      technologies: ["React","Redux toolkit", "Node.js", "WebSockets"],
      link: "https://nabeelacoaching.com"

    },
    {
      title: "Goalmogul",
      description: "GoalMogul is a social app like Facebook or Twitter where users share goals. I built its Affiliate Portal where celebrities/influencers join, get an invite code, and share it with followers.",
      image: "/goalmogul.jfif",
      technologies: ["React", "Redux", "Node.Js", "MongoDB", "Google ads", "Google analytics"],
      link: "https://goalmogul.com/"
    },

    {
      title: "The CareMd",
      description: "A platform offering various telehealth services including consultations and prescription refills.",
      image: "/caremd.jpeg",
      technologies: ["Next.js", "Node.Js", "WebSockets"],
      link: "https://www.thecaremd.com"
    },
    {
      title: "Premier 11",
      description: "A comprehensive platform for football history, live match updates, statistics, and player information.",
      image: "/premier11-screen.png",
      technologies: ["React", "Redux","Node.js", "MongoDB", "Score Api"],
      link: "https://premier11.dataonmatrix.com"
    },
    {
      title: "Al Quran",
      description: "An authentic Islamic application for reading and listening to the Holy Quran, featuring MP3 audio from renowned reciters and prayer notifications.",
      image: "/AlQuran.webp",
      technologies: ["Javascript", "React Native"],
      link: "https://play.google.com/store/apps/details?id=free.alquran.holyquran&hl=en&pli=1"

    },

    {
      title: "Deal Detector",
      description: "A centralized hub for scraping and aggregating sales data from popular clothing, shoe, and perfume brands.",
      image: "/deal.webp",
      technologies: ["Python", "Node.js", "Web Scraping"],
      link: "https://play.google.com/store/apps/details?id=com.arhamsoft.discountfinderclean&pcampaignid=web_share"

    },

    {

      title: "Innerlight",
      description: "A holistic platform dedicated to personal growth and self-discovery, offering programs and resources.",
      image: "/innerlight.png",
      technologies: ["Node.Js", "Flutter", "Stripe"],
      link: "https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&pcampaignid=web_share"

    },

    {

      title: "Home Decor",
      description: "An innovative digital solution designed to transform your living environment and showcase your residential aesthetics.",
      image: "/homedecor.webp",
      technologies: ["Node.Js", "Native android"],
      link: "https://play.google.com/store/apps/details?id=com.arhamsoft.homedecor&pcampaignid=web_share"

    }

  ];


  return (
    <div>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Awais Karamat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition">About</a>
              <a href="#experience" className="text-slate-600 hover:text-indigo-600 transition">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition">Contact</a>
            </div>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Hey, I'm <span className="gradient-text">Awais Karamat</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 mb-6">
                Senior Software Engineer
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                With 5+ years of experience in building scalable web applications,
                I specialize in solving complex problems with clean, efficient code.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition">
                  Get In Touch
                </a>
                <a href="#projects" className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition">
                  View My Work
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img src="/awais.jpeg" alt="Professional portrait of Awais Karamat, a software engineer with short beard wearing glasses and casual professional attire" className="rounded-2xl shadow-xl w-full max-w-md" />
                <div className="absolute -bottom-5 -right-5 bg-white p-2 rounded-lg shadow-md">
                  <span className="code-font text-sm font-medium">📍 Remote / On-site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-slate-600 mb-6">
                I'm a passionate software engineer with expertise in full-stack development.
                Over the past 5 years, I've helped companies build robust, user-friendly
                applications that drive business growth.
              </p>
              <p className="text-slate-600 mb-6">
                My approach combines technical excellence with business awareness,
                ensuring the solutions I deliver not only work well but also create real value.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-medium mb-3">Quick Facts:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    5+ years of professional experience
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full-stack expertise
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Agile methodology practitioner
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Open source contributor
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/704a145f-da8f-477c-aff8-c67a6b988c18.png" alt="Awais Karamat working at a modern workspace with multiple monitors showing code and standing desk setup" className="rounded-xl shadow-sm w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Experience Section --> */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Work Experience</span>
          </h2>

          <div className="relative timeline">
            {/* <!-- Experience Item 1 --> */}
            <div className="mb-12 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 pb-6 md:pb-0 md:text-right">
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-blue-600 mb-2">Arhamsoft Pvt. Ltd.</p>
                <p className="text-slate-500">October 2022 - Present</p>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 mx-6">
                <div className="bg-blue-500 rounded-full w-4 h-4"></div>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-12 pt-6 md:pt-0 border-l-0 md:border-l-2 border-slate-200">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <ul className="list-disc pl-5 text-slate-600 space-y-2">
                    <li>Led a team of 5 developers to rebuild the company's flagship SaaS platform</li>
                    <li>Improved application performance by 300% through architectural redesign</li>
                    <li>Implemented CI/CD pipeline reducing deployment time by 80%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Experience Item 2 --> */}
            <div className="mb-12 flex flex-col md:flex-row">
              <div className="md:w-1/2 order-last md:order-first md:pl-12 pt-6 md:pt-0 border-l-0 md:border-l-2 border-slate-200">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <ul className="list-disc pl-5 text-slate-600 space-y-2">
                    <li>Developed REST APIs serving 10M+ monthly requests</li>
                    <li>Created automated testing suite reducing bugs by 60%</li>
                    <li>Optimized database queries improving response times by 40%</li>
                    <li>Collaborated with product team on feature specifications</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 mx-6 order-1">
                <div className="bg-blue-500 rounded-full w-4 h-4"></div>
              </div>
              <div className="md:w-1/2 md:pr-12 pb-6 md:pb-0 order-2 md:text-right">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-blue-600 mb-2">Zeikh Tech Ltd.</p>
                <p className="text-slate-500">Oct 2020 - Oct 2021</p>
              </div>
            </div>

            {/* <!-- Experience Item 3 --> */}
            {/* <div className="mb-12 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 pb-6 md:pb-0 md:text-right">
                <h3 className="text-xl font-semibold">Junior Developer</h3>
                <p className="text-blue-600 mb-2">GamicaCloud (GCIT)</p>
                <p className="text-slate-500"> 2020 - 2021</p>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 mx-6">
                <div className="bg-blue-500 rounded-full w-4 h-4"></div>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-12 pt-6 md:pt-0 border-l-0 md:border-l-2 border-slate-200">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <ul className="list-disc pl-5 text-slate-600 space-y-2">
                    <li>Built frontend components for web applications</li>
                    <li>Fixed bugs and improved existing features</li>
                    <li>Participated in sprint planning and retrospectives</li>
                    <li>Learned industry best practices from senior team members</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
              <div key={index} className="project-card bg-white rounded-xl shadow-sm overflow-hidden transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.link} className="text-blue-600 font-medium hover:underline">View Project</a>
                    <a href="#" className="text-slate-600 hover:text-slate-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={() => setShowAll(!showAll)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Languages --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  JavaScript
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  TypeScript
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Python
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  SQL
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Bash
                </span>
              </div>
            </div>

            {/* <!-- Frontend --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  React
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Redux toolkit/thunk
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Next.js
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Angular
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tailwind CSS
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  SASS/LESS
                </span>
              </div>
            </div>

            {/* <!-- Backend --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Node.js
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Express
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Django
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Apollo
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  GraphQL
                </span>
              </div>
            </div>

            {/* <!-- Databases --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  MongoDB
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  PostgreSQL
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  MySQL
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Redis
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Firebase
                </span>
              </div>
            </div>

            {/* <!-- DevOps --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">DevOps</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Docker
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Bitbucket
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  AWS
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Azure
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  GitHub Actions
                </span>

              </div>
            </div>

            {/* <!-- Testing --> */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Testing</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Jest
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Cypress
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  JUnit
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Postman
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-slate-300 mb-8">
                I'm currently open to new opportunities, whether it's contract work, full-time roles,
                or just chatting about technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="awaiskaramat90@gmail.com" className="text-slate-400 hover:text-white transition">awaiskaramat90@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-slate-400">Lahore Pakistan / Remote</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-slate-400">Open to full-time and contract opportunities</p>
                  </div>
                </div>

                <div className="flex items-start">
        <div className="bg-blue-600 p-2 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </div>
        <div>
          <h4 className="font-medium">Phone</h4>
          <p className="text-slate-400">+92 307 4743022</p>
        </div>
      </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/awais-karamat-mern-stack/" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">Awais Karamat</span>
            <p className="text-slate-400 mt-1">Senior Software Engineer</p>
          </div>
          <div className="text-slate-400 text-sm">
            © Copyright <span id="current-year"></span>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
