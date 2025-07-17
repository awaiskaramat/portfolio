'use client';

export default function Experience() {
  return (
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
          </div>
        </div>
      </section>
  );
}
