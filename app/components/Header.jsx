import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Header({ isDarkMode }) {
  return (
    <header className='w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div className='absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-purple-500/10 blur-3xl animate-float'></div>
        <div className='absolute top-2/3 right-1/3 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-blue-500/10 blur-3xl animate-float-delay'></div>
      </div>

      {/* Main content */}
      <div className='text-center max-w-3xl px-4 w-full'>
        {/* Greeting */}
        <h3 className={`flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Hello, I'm <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-700'} font-semibold`}>Thalla Sai Kalyan</span>
          <span className="wave-emoji" role="img" aria-label="wave">👋</span>
        </h3>

        {/* Main headline */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8'>
          <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'} bg-clip-text text-transparent`}>
            Full-Stack Developer
          </span>
          <span className='typing-cursor'>_</span>
        </h1>

        {/* Description */}
        <p className={`text-sm sm:text-md max-w-2xl mx-auto mb-8 sm:mb-10`}>
          I build exceptional digital experiences with modern web technologies.
          Currently specializing in the MERN stack and responsive design.
        </p>

        {/* Action buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12'>
          <a 
            href="#work" 
            className='px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white poppins hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group'
          >
            View My Work
            <span className='group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
          </a>

          <a 
            href="/MyResume.pdf" 
            download 
            className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full border-2 ${isDarkMode ? 'border-white text-white poppins hover:border-purple-400 hover:text-purple-400' : 'border-black text-black hover:border-purple-500 hover:text-purple-600'} transition-all duration-300 flex items-center gap-2 group`}
          >
            Download CV
            <Image 
              src={isDarkMode ? assets.download_icon_dark : assets.download_icon} 
              alt='Download icon' 
              width={20} 
              height={20} 
              className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300'
            />
          </a>
        </div>

        {/* Social links */}
        <div className='flex gap-4 sm:gap-6 justify-center'>
          {[
            { 
              name: 'GitHub',
              url: 'https://github.com/kalyanthalla',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              )
            },
            { 
              name: 'LinkedIn',
              url: 'https://linkedin.com/in/kalyan-thalla',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              )
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-gray-800 transition-colors duration-300 ${
                social.name === 'Twitter' ? 'hover:text-blue-400 dark:hover:text-blue-300' :
                'hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

      <style jsx>{`
        .wave-emoji {
          animation: wave 2s infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .typing-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
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
    </header>
  )
}

export default Header