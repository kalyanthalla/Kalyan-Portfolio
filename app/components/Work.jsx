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

  const goToProject = (index) => {
    setCurrentIndex(index)
  }

  const currentProject = workData[currentIndex];

  return (
    <section 
      id="work" 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="work-heading"
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
        {/* Heading Section with better spacing */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-center">
          <h2 
            id="work-heading"
            className='text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 relative inline-block'
          >
            <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              My Work
            </span>
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A collection of projects showcasing my skills, creativity, and growth as a developer.
          </p>
        </div>

        {/* Desktop: 3 Cards Layout */}
        <div className='hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8'>
          {/* Left Arrow with better hover effect */}
          <button 
            onClick={prevProject}
            className={`p-2 sm:p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-zinc-800 hover:bg-zinc-700 text-purple-400 border border-zinc-700' 
                : 'bg-white hover:bg-zinc-100 text-purple-600 border border-zinc-200'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Projects Grid with better transitions */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8 w-full">
            {[
              currentIndex === 0 ? workData[workData.length - 1] : workData[currentIndex - 1],
              workData[currentIndex],
              currentIndex === workData.length - 1 ? workData[0] : workData[currentIndex + 1]
            ].map((project, index) => (
              <div 
                key={`${project.title}-${index}`}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-zinc-800/70 border border-zinc-700' : 'bg-white/90 border border-zinc-200'
                } ${index === 1 ? 'scale-105 z-10' : 'scale-95 opacity-90 hover:opacity-100'} hover:-translate-y-2`}
              >
                <div className="p-4 sm:p-5">
                  <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="relative aspect-video w-full">
                  <Image 
                    src={project.bgImage} 
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 1} // Only prioritize the center image
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode ? 'from-zinc-900/80 to-transparent' : 'from-white/80 to-transparent'
                  }`}></div>
                </div>
                
                <div className="p-4 sm:p-5">
                  <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.techStack?.map((tech, i) => (
                        <span 
                          key={i}
                          className={`text-xs px-2 py-1 rounded ${
                            isDarkMode 
                              ? 'bg-zinc-700 text-purple-300' 
                              : 'bg-zinc-100 text-purple-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
                              : 'bg-zinc-200 hover:bg-zinc-300 text-gray-800'
                          } shadow-md hover:shadow-lg hover:scale-105`}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      
                      <a 
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-all ${
                          isDarkMode 
                            ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                            : 'bg-purple-600 hover:bg-purple-700 text-white'
                        } shadow-md hover:shadow-lg hover:scale-105`}
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" 
                          stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow with better hover effect */}
          <button 
            onClick={nextProject}
            className={`p-2 sm:p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-zinc-800 hover:bg-zinc-700 text-purple-400 border border-zinc-700' 
                : 'bg-white hover:bg-zinc-100 text-purple-600 border border-zinc-200'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile: Single Card with better layout */}
        <div className="md:hidden">
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 mb-6 ${
            isDarkMode ? 'bg-zinc-800/70 border border-zinc-700' : 'bg-white/90 border border-zinc-200'
          } hover:shadow-xl hover:-translate-y-1 min-h-[400px]`}>
            <div className="p-4 sm:p-5">
              <h3 className={`text-lg font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentProject.title}
              </h3>
            </div>
            
            <div className="relative aspect-video w-full">
              <Image 
                src={currentProject.bgImage} 
                alt={`Screenshot of ${currentProject.title}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode ? 'from-zinc-900/80 to-transparent' : 'from-white/80 to-transparent'
              }`}></div>
            </div>
            
            <div className="p-4 sm:p-5">
              <p className={`mb-4 text-sm sm:text-base ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {currentProject.description}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack?.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        isDarkMode 
                          ? 'bg-zinc-700 text-purple-300' 
                          : 'bg-zinc-100 text-purple-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end gap-3">
                  {currentProject.github && (
                    <a 
                      href={currentProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-all ${
                        isDarkMode 
                          ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
                          : 'bg-zinc-200 hover:bg-zinc-300 text-gray-800'
                      } shadow-md hover:shadow-lg hover:scale-105`}
                      aria-label={`View ${currentProject.title} on GitHub`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  
                  <a 
                    href={currentProject.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${
                      isDarkMode 
                        ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    } shadow-md hover:shadow-lg hover:scale-105`}
                    aria-label={`Visit ${currentProject.title} live site`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                      stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation with indicators */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              {workData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? isDarkMode ? 'bg-purple-400 w-4' : 'bg-purple-600 w-4'
                      : isDarkMode ? 'bg-zinc-600' : 'bg-zinc-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-center items-center gap-6">
              <button 
                onClick={prevProject}
                className={`p-3 rounded-full flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-purple-400 border border-zinc-700' 
                    : 'bg-white hover:bg-zinc-100 text-purple-600 border border-zinc-200'
                } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
                aria-label="Previous project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                  stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextProject}
                className={`p-3 rounded-full flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-purple-400 border border-zinc-700' 
                    : 'bg-white hover:bg-zinc-100 text-purple-600 border border-zinc-200'
                } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
                aria-label="Next project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                  stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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

export default Work