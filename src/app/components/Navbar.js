'use client';

export default function Navbar() {
  return (
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
        </div>
      </div>
    </nav>
  );
}
