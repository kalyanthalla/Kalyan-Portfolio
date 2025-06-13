import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({ isDarkMode }) => {
  return (
    <section 
      id="work" 
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block roboto'>
            <span className="relative z-10">
              My Projects
              <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A collection of projects showcasing my skills, creativity, and growth as a developer.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {workData.map((project, index) => (
            <div 
              key={index} 
              className='aspect-square rounded-xl relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Image 
                src={project.bgImage} 
                alt={project.title} 
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode ? 'from-gray-900/90 via-gray-900/40 to-transparent' : 'from-black/90 via-black/40 to-transparent'
              }`}></div>
              
              <div className={`absolute w-11/12 left-1/2 -translate-x-1/2 bottom-4 rounded-lg p-4 ${
                isDarkMode 
                  ? 'bg-neutral-900/90 backdrop-blur-sm border border-gray-700/50' 
                  : 'bg-white/90 backdrop-blur-sm border border-gray-200/50'
              } transition-all duration-300 group-hover:bottom-5`}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <p className={`text-sm mt-1 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                  </div>
                  <button className={`p-2 rounded-full flex-shrink-0 ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  } transition-colors duration-300 shadow-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
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
            View all projects
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

export default Work