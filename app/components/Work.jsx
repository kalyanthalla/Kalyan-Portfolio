import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Work = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workData.length - 1 : prevIndex - 1
    )
  }

  const currentProject = workData[currentIndex];

  return (
    <section 
      id="work" 
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Updated Heading Section */}
        <div className="flex flex-col md:flex-row items-start mb-16">
          {/* Left side - heading and paragraph */}
          <div className="md:w-1/2">
            <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block group'>
  <span className="relative z-10 transition-all duration-200 group-hover:scale-x-[1.03] group-hover:origin-left">
    My Projects
    <span className={`absolute -bottom-1 left-0 h-1 w-full ${
      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
    } rounded-full transition-all duration-300 group-hover:scale-x-110 group-hover:origin-left`}></span>
  </span>
</h2>
            <p className={`text-base md:text-lg text-justify ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A collection of projects showcasing my skills, creativity, and growth as a developer.
            </p>
          </div>

          {/* Vertical separator with downward arrow - desktop only */}
          <div className="hidden md:flex items-center justify-center relative h-32 w-10 mx-8">
            <div className={`absolute top-0 bottom-0 w-px ${
              isDarkMode ? 'bg-neutral-700' : 'bg-neutral-300'
            }`}></div>
            <div className={`absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full border ${
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
                  d="M19 9L12 16L5 9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop: 3 Cards */}
        <div className='hidden md:flex items-center justify-center gap-6'>
          {/* Left Arrow */}
          <button 
            onClick={prevProject}
            className={`p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-neutral-800 hover:bg-neutral-700 text-purple-400' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-purple-600'
            } transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-x-1`}
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-3 gap-6 w-full">
            {[
              currentIndex === 0 ? workData[workData.length - 1] : workData[currentIndex - 1],
              workData[currentIndex],
              currentIndex === workData.length - 1 ? workData[0] : workData[currentIndex + 1]
            ].map((project, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? 'bg-neutral-900 border border-neutral-700' : 'bg-white border border-neutral-200'
              } ${index === 1 ? 'scale-105 z-10' : 'scale-95 opacity-90'}`}>
                <div className="p-4">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="relative aspect-video w-full">
                  <Image 
                    src={project.bgImage} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-4">
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      <span className="mr-2">Visit</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode 
                            ? 'bg-neutral-700 hover:bg-neutral-600 text-white' 
                            : 'bg-neutral-200 hover:bg-neutral-300 text-gray-800'
                        } transition-colors`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextProject}
            className={`p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-neutral-800 hover:bg-neutral-700 text-purple-400' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-purple-600'
            } transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-x-1`}
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile: Single Card */}
        <div className="md:hidden">
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 mb-6 ${
            isDarkMode ? 'bg-neutral-800 border border-neutral-700' : 'bg-white border border-neutral-200'
          }`}>
            <div className="p-4">
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentProject.title}
              </h3>
            </div>
            
            <div className="relative aspect-video w-full">
              <Image 
                src={currentProject.bgImage} 
                alt={currentProject.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
            <div className="p-4">
              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {currentProject.description}
              </p>
              
              <div className="flex justify-between items-center">
                <a 
                  href={currentProject.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  <span className="mr-2">Visit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                {currentProject.github && (
                  <a 
                    href={currentProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-neutral-700 hover:bg-neutral-600 text-white' 
                        : 'bg-neutral-200 hover:bg-neutral-300 text-gray-800'
                    } transition-colors`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Arrows Below Card */}
          <div className="flex justify-center gap-8">
            <button 
              onClick={prevProject}
              className={`p-3 rounded-full flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-purple-400' 
                  : 'bg-neutral-100 hover:bg-neutral-200 text-purple-600'
              } transition-all duration-300 shadow-md`}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-1">
              {workData.map((_, index) => (
                <span 
                  key={index}
                  className={`inline-block w-2 h-2 rounded-full ${
                    currentIndex === index 
                      ? isDarkMode ? 'bg-purple-400 w-4' : 'bg-purple-600 w-4'
                      : isDarkMode ? 'bg-neutral-600' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProject}
              className={`p-3 rounded-full flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-purple-400' 
                  : 'bg-neutral-100 hover:bg-neutral-200 text-purple-600'
              } transition-all duration-300 shadow-md`}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work