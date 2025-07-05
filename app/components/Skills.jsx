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
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="skills-heading"
    >
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <div className={`absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl`} />
        <div className={`absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl`} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Heading section */}
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

        {/* Tabs */}
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
                    ? 'hover:bg-gray-700 hover:text-white border-gray-700'
                    : 'hover:bg-gray-100 hover:text-gray-900 border-gray-200'
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

        {/* Skills cards grid */}
        <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[540px]">
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'>
            {categorizedSkills[activeTab].map(({icon, title}, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border transition-all duration-300 w-full ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1' 
                    : 'bg-white/90 border-gray-200 hover:bg-white hover:shadow-md hover:-translate-y-1'
                }`}
                role="listitem"
              >
                <div className={`p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
                } transition-transform duration-300 hover:scale-110`}>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills