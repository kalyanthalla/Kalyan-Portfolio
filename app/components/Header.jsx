import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Header({ isDarkMode }) {
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

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 relative overflow-hidden ${isDarkMode ? 'dark' : 'light'}`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <motion.div 
          variants={floatVariants}
          animate="float"
          className='absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full bg-purple-500/10 blur-3xl'
        />
        <motion.div 
          variants={floatVariants}
          animate="floatDelayed"
          className='absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full bg-blue-500/10 blur-3xl'
        />
      </div>

      {/* Main content */}
      <div className='text-center max-w-2xl px-4 w-full'>
        {/* Greeting */}
        <motion.h3 
          variants={itemVariants}
          className={`flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
        >
          Hello, I'm <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>Thalla Sai Kalyan</span>
          <motion.span 
            animate={{ rotate: [0, -10, 12, -10, 9, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
            }}
            className="inline-block" 
            role="img" 
            aria-label="wave"
            style={{ transformOrigin: '70% 70%' }}
          >
            👋
          </motion.span>
        </motion.h3>

        {/* Main headline */}
        <motion.h1 
          variants={itemVariants}
          className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8'
        >
          <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 via-purple-400 to-purple-500' : 'from-blue-600 via-purple-600 to-purple-700'} bg-clip-text text-transparent`}>
            Full-Stack Developer
          </span>
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className='ml-1'
          >
            _
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          I build exceptional digital experiences with modern web technologies.
          Currently specializing in the MERN stack and responsive design.
        </motion.p>

        {/* Action buttons */}
        <motion.div 
          variants={containerVariants}
          className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12'
        >
          <motion.a 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work" 
            className={`px-8 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r ${isDarkMode ? 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' : 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white poppins transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group w-full sm:w-auto justify-center`}
            aria-label="View my work"
          >
            View My Work
            <motion.span 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/MyResume.pdf" 
            download 
            className={`px-8 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full border-2 ${isDarkMode ? 'border-gray-300 text-gray-300 hover:border-purple-400 hover:text-purple-400' : 'border-gray-700 text-gray-700 hover:border-purple-600 hover:text-purple-600'} transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center`}
            aria-label="Download my CV"
          >
            Download CV
            <motion.div whileHover={{ y: 2 }}>
              <Image 
                src={isDarkMode ? assets.download_icon_dark : assets.download_icon} 
                alt='Download icon' 
                width={20} 
                height={20} 
                className='w-4 h-4 sm:w-5 sm:h-5'
                aria-hidden="true"
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div 
          variants={containerVariants}
          className='flex gap-4 sm:gap-5 md:gap-6 justify-center'
        >
          {[
            { 
              name: 'GitHub',
              url: 'https://github.com/kalyanthalla',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              )
            },
            { 
              name: 'LinkedIn',
              url: 'https://linkedin.com/in/kalyan-thalla',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              )
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)' }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-2.5 rounded-full ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-all duration-300`}
              aria-label={`Visit my ${social.name} profile`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          transition: { 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className='absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#e5e7eb' : '#1f2937'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </motion.header>
  )
}

export default Header