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

  // Fixed grid size - 5 columns x 3 rows (15 cards total)
  const gridSize = 15;
  const currentSkills = categorizedSkills[activeTab];
  const emptyCardsCount = Math.max(0, gridSize - currentSkills.length);

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
        {/* Fixed heading section - won't move with tab changes */}
        <div className="mb-12 text-center">
          <h2 className='text-3xl font-bold mb-3 relative inline-block'>
            <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
              isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
            } bg-clip-text text-transparent`}>
              My Skills
            </span>
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies I've mastered through real-world projects
          </p>
        </div>

        {/* Tabs - centered */}
        <div className={`flex flex-wrap gap-2 mb-8 justify-center ${
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

        {/* Fixed size container for the grid */}
        <div className="min-h-[540px]"> {/* Fixed height to prevent layout shift */}
          {/* Skills cards grid - fixed 5x3 layout (15 cards total) */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {/* Render actual skills */}
            {currentSkills.map(({icon, title}, index) => (
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
            
            {/* Invisible placeholder cards to maintain layout */}
            {Array.from({ length: emptyCardsCount }).map((_, index) => (
              <div 
                key={`empty-${index}`} 
                className="opacity-0 pointer-events-none"
                aria-hidden="true"
              >
                <div className="p-4">
                  <div className="p-3 rounded-lg mb-3">
                    <div className="w-6 h-6"></div>
                  </div>
                  <span className="text-sm font-medium text-center">Placeholder</span>
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