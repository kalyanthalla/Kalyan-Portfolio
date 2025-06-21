import { skillsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

function Skills({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState('all');
  
  const categorizedSkills = {
    all: skillsData,
    frontend: skillsData.filter(skill => skill.category === 'frontend'),
    backend: skillsData.filter(skill => skill.category === 'backend'),
    database: skillsData.filter(skill => skill.category === 'database'),
    tools: skillsData.filter(skill => skill.category === 'tools'),
  };

  return (
    <section 
      id="skills" 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl animate-float-delay`}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile heading */}
        <div className="md:hidden mb-8 text-center">
          <h2 className='text-3xl font-bold mb-3 relative inline-block'>
            <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
              isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
            } bg-clip-text text-transparent`}>
              My Skills
            </span>
          </h2>
          <p className={`text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies I've mastered
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Skills cards - enhanced */}
          <div className="md:w-3/4">
            {/* Tabs - now positioned above cards on all screens */}
            <div className={`flex flex-wrap gap-2 mb-8 justify-center md:justify-start ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {['all', 'frontend', 'backend', 'database', 'tools'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                    activeTab === tab
                      ? isDarkMode
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-purple-100 text-purple-700 shadow-md'
                      : isDarkMode
                        ? 'hover:bg-neutral-700 hover:text-white'
                        : 'hover:bg-neutral-100 hover:text-gray-900'
                  } capitalize border ${
                    isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
                  }`}
                >
                  {tab === 'all' ? 'All' : tab === 'frontend' ? 'Frontend' : tab === 'backend' ? 'Backend' : tab}
                </button>
              ))}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              {categorizedSkills[activeTab].map(({icon, title}, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-300 w-full group ${
                    isDarkMode 
                      ? 'bg-neutral-900/50 border-neutral-700 hover:bg-neutral-800 hover:shadow-lg' 
                      : 'bg-white/80 border-neutral-200 hover:bg-white hover:shadow-md'
                  } hover:-translate-y-1`}
                >
                  <div className={`p-3 rounded-lg mb-3 ${
                    isDarkMode ? 'bg-neutral-800' : 'bg-neutral-100'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Image 
                      src={icon} 
                      alt={title} 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className={`text-sm font-medium text-center ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - enhanced */}
          <div className="hidden md:flex md:w-1/4">
            <div className="sticky top-28 h-[calc(100vh-240px)] flex items-center">
              {/* Vertical separator with animated arrow */}
              <div className="relative h-full flex items-center">
                <div className={`absolute left-0 top-0 h-full w-0.5 ${
                  isDarkMode ? 'bg-gradient-to-b from-purple-500/30 to-blue-500/30' : 'bg-gradient-to-b from-purple-300/50 to-blue-300/50'
                }`}></div>
                <div className={`absolute left-0 top-1/2 transform -translate-x-1/2 p-2 rounded-full border ${
                  isDarkMode 
                    ? 'bg-neutral-800 border-purple-500/50' 
                    : 'bg-white border-purple-300'
                } shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-110`}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} animate-pulse`}
                  >
                    <path 
                      d="M15 18L9 12L15 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Heading and description */}
              <div className="h-full flex flex-col justify-center pl-8 ml-4">
                <h2 className='text-3xl font-bold mb-4 relative inline-block'>
                  <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
                    isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
                  } bg-clip-text text-transparent`}>
                    My Skills
                  </span>
                </h2>
                <p className={`text-base ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Here's a glimpse of the technologies and concepts I've mastered through real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
      `}</style>
    </section>
  )
}

export default Skills