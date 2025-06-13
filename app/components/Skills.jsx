import { assets, skillsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Skills({ isDarkMode }) {
  return (
    <section 
      id="skills" 
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block roboto'>
            <span className="relative z-10">
              My Skills
              <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies and concepts I've mastered through real-world projects.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillsData.map(({icon, title, description, link}, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-neutral-900 border-gray-700 hover:shadow-purple-900/20 hover:border-purple-400/30' 
                  : 'bg-white border-gray-200 hover:shadow-purple-200/50 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Image 
                    src={icon} 
                    alt={title} 
                    width={40} 
                    height={40} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{title}</h3>
              </div>
              
              <p className={`text-sm mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {description}
              </p>
              
              <a 
                href={link} 
                className={`inline-flex items-center gap-2 text-sm font-medium ${
                  isDarkMode ? 'text-purple-300 hover:text-purple-200' : 'text-purple-600 hover:text-purple-700'
                } transition-colors`}
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                  stroke={isDarkMode ? "#c4b5fd" : "#7c3aed"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#" 
            className={`inline-flex items-center gap-2 rounded-full py-3 px-6 text-sm font-medium border ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-gray-800 text-gray-100 hover:border-purple-400' 
                : 'border-gray-300 hover:bg-gray-50 text-gray-700 hover:border-purple-500'
            } transition-all duration-300 hover:shadow-md`}
          >
            View all skills
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke={isDarkMode ? "#c4b5fd" : "#7c3aed"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills