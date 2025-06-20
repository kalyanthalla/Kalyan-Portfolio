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
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Mobile: Heading and description at top */}
        <div className="md:hidden mb-8">
          <h2 className='text-3xl font-bold mb-4 relative inline-block group roboto'>
            <span className="relative z-10 transition-all duration-200 group-hover:scale-x-[1.03] group-hover:origin-left">
              My Skills
              <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              } rounded-full transition-all duration-300 group-hover:scale-x-110 group-hover:origin-left`}></span>
            </span>
          </h2>
          <p className={`text-base text-justify ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies and concepts I've mastered through real-world projects.
          </p>
        </div>

        {/* Tabs at top for all screens */}
        <div className={`flex flex-wrap gap-2 mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {['all', 'frontend', 'backend', 'database','tools'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex-shrink-0 ${
                activeTab === tab
                  ? isDarkMode
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-700'
                  : isDarkMode
                    ? 'hover:bg-neutral-700 hover:text-white'
                    : 'hover:bg-neutral-100 hover:text-gray-900'
              } capitalize`}
            >
              {tab === 'all' ? 'All' : tab === 'frontend' ? 'Frontend' : tab === 'backend' ? 'Backend' : tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - cards */}
          <div className="md:w-3/4">
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {categorizedSkills[activeTab].map(({icon, title}, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-3 rounded-md border transition-all duration-150 w-full ${
                    isDarkMode 
                      ? 'bg-neutral-900 border-neutral-700 hover:bg-neutral-800' 
                      : 'bg-white border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <div className={`p-2 rounded-md mr-3 ${
                    isDarkMode ? 'bg-neutral-700' : 'bg-neutral-100'
                  }`}>
                    <Image 
                      src={icon} 
                      alt={title} 
                      width={24} 
                      height={24} 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - fixed position relative to container */}
          <div className="hidden md:block md:w-1/4">
            <div className="sticky top-20 h-[calc(100vh-200px)] flex">
              {/* Vertical separator with arrow */}
              <div className="relative h-full flex items-center">
                <div className={`absolute left-0 top-0 h-full w-px ${
                  isDarkMode ? 'bg-neutral-700' : 'bg-neutral-300'
                }`}></div>
                <div className={`absolute left-0 top-1/2 transform -translate-x-1/2 p-2 rounded-full border ${
                  isDarkMode 
                    ? 'bg-neutral-800 border-neutral-600' 
                    : 'bg-white border-neutral-200'
                } shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer`}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}
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
              <div className="h-full flex flex-col justify-center pl-6 ml-4">
                <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block group roboto'>
                  <span className="relative z-10 transition-all duration-200 group-hover:scale-x-[1.03] group-hover:origin-left">
                    My Skills
                  <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                    isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    } rounded-full transition-all duration-300 group-hover:scale-x-110 group-hover:origin-left`}></span>
                  </span>
                </h2>
                <p className={`text-base md:text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Here's a glimpse of the technologies and concepts I've mastered through real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills