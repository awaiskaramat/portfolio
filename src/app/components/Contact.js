'use client';

export default function Contact() {
  return (
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
  );
}
