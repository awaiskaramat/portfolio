'use client';

export default function Skills() {

  return (
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
  );
}
