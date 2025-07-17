'use client';

export default function About() {
  return (
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
  );
}
