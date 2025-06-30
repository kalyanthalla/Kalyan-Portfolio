import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      // Swiped right
      prevProject()
    } else if (info.offset.x < -50) {
      // Swiped left
      nextProject()
    }
  }

  const currentProject = workData[currentIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatDelayed: {
      y: [0, -20, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  }

  const cardVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  return (
    <motion.section 
      id="work" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`w-full px-4 pt-2 sm:px-6 pt-20 lg:px-8 pt-12 md:pt-24 pb-16 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="work-heading"
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <motion.div 
          variants={floatVariants}
          animate="float"
          className={`absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full ${
            isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
          } blur-3xl`}
        />
        <motion.div 
          variants={floatVariants}
          animate="floatDelayed"
          className={`absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full ${
            isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
          } blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Heading Section */}
        <motion.div 
          variants={containerVariants}
          className="mb-8 md:mb-10 lg:mb-12 text-center"
        >
          <motion.h2 
            variants={itemVariants}
            id="work-heading"
            className='text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 relative inline-block'
          >
            <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              My Work
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A collection of projects showcasing my skills, creativity, and growth as a developer.
          </motion.p>
        </motion.div>

        {/* Desktop: 3 Cards Layout */}
        <div className='hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8'>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className={`p-2 sm:p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-purple-400 border border-gray-700' 
                : 'bg-white hover:bg-gray-100 text-purple-600 border border-gray-200'
            } transition-all duration-300 shadow-lg hover:shadow-xl`}
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8 w-full"
          >
            {[
              currentIndex === 0 ? workData[workData.length - 1] : workData[currentIndex - 1],
              workData[currentIndex],
              currentIndex === workData.length - 1 ? workData[0] : workData[currentIndex + 1]
            ].map((project, index) => (
              <motion.div 
                key={`${project.title}-${index}`}
                layout
                initial={{ scale: 0.95, opacity: 0.9 }}
                animate={{ 
                  scale: index === 1 ? 1.05 : 0.95,
                  opacity: index === 1 ? 1 : 0.9
                }}
                whileHover={{ 
                  y: -5,
                  scale: index === 1 ? 1.1 : 1,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-800/70 border border-gray-700' : 'bg-white/90 border border-gray-200'
                } ${index === 1 ? 'z-10' : ''}`}
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
                    priority={index === 1}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode ? 'from-gray-900/80 to-transparent' : 'from-white/80 to-transparent'
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
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs px-2 py-1 rounded ${
                            isDarkMode 
                              ? 'bg-gray-700 text-purple-300' 
                              : 'bg-gray-100 text-purple-600'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3">
                      {project.github && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            isDarkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                          } shadow-md`}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                      
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode 
                            ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                            : 'bg-purple-600 hover:bg-purple-700 text-white'
                        } shadow-md`}
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" 
                          stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className={`p-2 sm:p-3 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-purple-400 border border-gray-700' 
                : 'bg-white hover:bg-gray-100 text-purple-600 border border-gray-200'
            } transition-all duration-300 shadow-lg hover:shadow-xl`}
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile: Single Card with swipe gestures */}
        <div className="md:hidden">
          <div className="relative">
            {/* Project Card with swipe gestures */}
            <AnimatePresence custom={1} mode='wait'>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={`mx-4 my-4 rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-800/70 border border-gray-700' : 'bg-white/90 border border-gray-200'
                } shadow-lg touch-pan-y select-none`}
              >
                <div className="p-4">
                  <h3 className={`text-lg font-bold mb-2 ${
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
                    isDarkMode ? 'from-gray-900/80 to-transparent' : 'from-white/80 to-transparent'
                  }`}></div>
                </div>
                
                <div className="p-4">
                  <p className={`mb-3 text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {currentProject.description}
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1">
                      {currentProject.techStack?.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs px-2 py-1 rounded ${
                            isDarkMode 
                              ? 'bg-gray-700 text-purple-300' 
                              : 'bg-gray-100 text-purple-600'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      {currentProject.github && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={currentProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            isDarkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                          } shadow-md`}
                          aria-label={`View ${currentProject.title} on GitHub`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                      
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={currentProject.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode 
                            ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                            : 'bg-purple-600 hover:bg-purple-700 text-white'
                        } shadow-md`}
                        aria-label={`Visit ${currentProject.title} live site`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" 
                          stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicators - Centered below card */}
            <div className="flex justify-center mt-4">
              <div className="flex gap-2">
                {workData.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => goToProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? isDarkMode ? 'bg-purple-400 w-4' : 'bg-purple-600 w-4'
                        : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work