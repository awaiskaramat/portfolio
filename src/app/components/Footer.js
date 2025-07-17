'use client';

export default function Footer() {
  return (
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
  );
}
