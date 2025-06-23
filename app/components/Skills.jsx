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

  const currentSkills = categorizedSkills[activeTab];
  const emptyCardsCount = Math.max(0, 15 - currentSkills.length);

  return (
    <section 
      id="skills" 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 pb-12 min-h-[calc(100vh-4rem)] flex items-center justify-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div className={`absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-56 sm:w-80 h-56 sm:h-80 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl animate-float-delay`}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Heading section with proper spacing */}
        <div className="mb-6 md:mb-8 text-center pt-6">
          <h2 className='text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 relative inline-block'>
            <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
              isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
            } bg-clip-text text-transparent`}>
              My Skills
            </span>
          </h2>
          <p className={`text-sm sm:text-base poppins max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies I've mastered through real-world projects
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap gap-2 mb-6 sm:mb-6 justify-center ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {['all', 'frontend', 'backend', 'database', 'tools'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm poppins font-medium transition-all duration-200 ${
                activeTab === tab
                  ? isDarkMode
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100 text-purple-700 shadow-md'
                  : isDarkMode
                    ? 'hover:bg-zinc-700 hover:text-white'
                    : 'hover:bg-zinc-100 hover:text-gray-900'
              } border ${
                isDarkMode ? 'border-zinc-700' : 'border-zinc-200'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'frontend' ? 'Frontend' : tab === 'backend' ? 'Backend' : tab}
            </button>
          ))}
        </div>

        {/* Skills cards grid - 5x3 layout */}
        <div className="min-h-[340px] sm:min-h-[380px]">
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'>
            {currentSkills.map(({icon, title}, index) => (
              <div 
                key={index} 
                className={`flex items-center p-2 sm:p-3 rounded-xl border transition-all duration-300 w-full group ${
                  isDarkMode 
                    ? 'bg-zinc-900/50 border-zinc-700 hover:bg-zinc-800 hover:shadow-lg' 
                    : 'bg-white/80 border-zinc-200 hover:bg-white hover:shadow-md'
                } hover:-translate-y-1`}
              >
                <div className={`p-1 sm:p-2 rounded-lg mr-2 ${
                  isDarkMode ? 'bg-zinc-800' : 'bg-zinc-100'
                } group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <Image 
                    src={icon} 
                    alt={title} 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>{title}</span>
              </div>
            ))}
            
            {/* Placeholder cards to maintain 5x3 layout */}
            {Array.from({ length: emptyCardsCount }).map((_, index) => (
              <div 
                key={`empty-${index}`} 
                className="opacity-0 pointer-events-none"
                aria-hidden="true"
              >
                <div className="p-2 sm:p-3 flex items-center">
                  <div className="p-1 sm:p-2 rounded-lg mr-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Placeholder</span>
                </div>
              </div>
            ))}
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