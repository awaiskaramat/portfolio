'use client';

export default function Hero() {
  return (
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
  );
}
