'use client';

import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

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
  );
}
