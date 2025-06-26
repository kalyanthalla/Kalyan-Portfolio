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

  // Responsive grid size with better empty card handling
  const currentSkills = categorizedSkills[activeTab];
  const gridSize = {
    base: 2,    // cols on mobile
    sm: 3,      // cols on small screens
    md: 4,      // cols on medium screens
    lg: 5       // cols on large screens
  };
  const emptyCardsCount = Math.max(0, gridSize.lg * 3 - currentSkills.length); // Maintain layout for 3 rows

  return (
    <section 
      id="skills" 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="skills-heading"
    >
      {/* Animated background elements - improved performance */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <div className={`absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl animate-float-delay`}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Heading section with better spacing */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-center">
          <h2 
            id="skills-heading"
            className='text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 relative inline-block'
          >
            <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              My Skills
            </span>
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies I've mastered through real-world projects
          </p>
        </div>

        {/* Tabs with better responsive behavior */}
        <div className={`flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 justify-center ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {['all', 'frontend', 'backend', 'database', 'tools'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? isDarkMode
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100 text-purple-700 shadow-md'
                  : isDarkMode
                    ? 'hover:bg-zinc-700 hover:text-white border-zinc-700'
                    : 'hover:bg-zinc-100 hover:text-gray-900 border-zinc-200'
              } border ${
                activeTab === tab ? 'border-transparent' : ''
              }`}
              aria-current={activeTab === tab ? "true" : "false"}
              aria-label={`Show ${tab} skills`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills cards grid with better responsive behavior */}
        <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[540px]">
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'>
            {/* Render actual skills with improved accessibility */}
            {currentSkills.map(({icon, title}, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border transition-all duration-300 w-full group ${
                  isDarkMode 
                    ? 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:shadow-lg' 
                    : 'bg-white/90 border-zinc-200 hover:bg-white hover:shadow-md'
                } hover:-translate-y-1`}
                role="listitem"
              >
                <div className={`p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 ${
                  isDarkMode ? 'bg-zinc-700/50' : 'bg-zinc-100/80'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Image 
                    src={icon} 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    aria-hidden="true"
                  />
                </div>
                <span className={`text-xs sm:text-sm font-medium text-center ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>{title}</span>
              </div>
            ))}
            
            {/* Improved invisible placeholder cards */}
            {Array.from({ length: emptyCardsCount }).map((_, index) => (
              <div 
                key={`empty-${index}`} 
                className="invisible"
                aria-hidden="true"
              >
                <div className="p-3 sm:p-4">
                  <div className="p-2 sm:p-3 rounded-lg mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-center">Placeholder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles with reduced motion support */}
      <style jsx global>{`
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
        @media (prefers-reduced-motion) {
          .animate-float,
          .animate-float-delay {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills