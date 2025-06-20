import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <section 
      id='about' 
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Modern gradient abstract background - toned down for light mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Reduced opacity and softer colors for light mode */}
        <div className={`absolute -right-[20%] -top-[30%] w-[80%] h-[160%] rounded-full blur-[100px] ${
          isDarkMode ? 'bg-purple-600 opacity-20' : 'bg-blue-100 opacity-10'
        }`}></div>
        
        <div className={`absolute -left-[15%] top-[40%] w-[70%] h-[80%] rounded-full blur-[100px] ${
          isDarkMode ? 'bg-indigo-600 opacity-20' : 'bg-purple-100 opacity-10'
        }`}></div>
        
        {/* Angular shapes with much lower opacity in light mode */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1200 0L600 0L0 800H1200V0Z" 
            fill={`url(#${isDarkMode ? 'darkGradient' : 'lightGradient'})`}
            opacity={isDarkMode ? 0.08 : 0.03}
          />
          
          <path 
            d="M800 0L400 0L0 400V800H800V0Z" 
            fill={`url(#${isDarkMode ? 'darkGradient2' : 'lightGradient2'})`}
            opacity={isDarkMode ? 0.06 : 0.02}
          />
          
          <defs>
            {/* Much softer light mode gradients */}
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>
            <linearGradient id="lightGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
            
            {/* Unchanged dark mode gradients */}
            <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="darkGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5b21b6" />
              <stop offset="100%" stopColor="#3730a3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center lg:text-left">
          <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block group roboto'>
            <span className="relative z-10 transition-all duration-200 group-hover:scale-x-[1.03] group-hover:origin-left">
              About Me
              <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              } rounded-full transition-all duration-300 group-hover:scale-x-110 group-hover:origin-left`}></span>
            </span>
          </h2>
          <p className={`text-base md:text-lg max-w-3xl mx-auto lg:mx-0 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get to know more about my journey and skills
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
          {/* Profile image with enhanced visibility in light mode */}
          <div className='relative order-1 lg:order-2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 z-10 group'>
            <div className={`absolute inset-0 rounded-full ${
              isDarkMode ? 'bg-purple-900/30' : 'bg-blue-50/40'
            } blur-md scale-95 group-hover:scale-100 transition-transform duration-500`}></div>
            <div className={`w-full h-full rounded-full overflow-hidden shadow-xl relative ${
              isDarkMode ? 'ring-2 ring-purple-400' : 'ring-2 ring-purple-500'
            } transition-transform duration-300 group-hover:scale-105`}>
              <Image 
                src={assets.profile_image} 
                alt='Profile picture' 
                width={400}
                height={538}
                className='w-full h-full object-cover object-top'
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className='flex-1 order-2 lg:order-1'>
            <div className="space-y-4">
              <p className={`text-base md:text-base leading-relaxed text-justify ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate full stack web developer with hands-on experience through internships and personal projects. My journey has equipped me with strong skills in the MERN stack and modern web technologies.
              </p>
              
              <p className={`text-base md:text-base leading-relaxed text-justify ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I specialize in building responsive, accessible web applications that deliver exceptional user experiences, combining technical expertise with creative problem-solving.
              </p>
              
              <div className={`p-4 rounded-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-neutral-800/70 border border-neutral-700' : 'bg-white/80 border border-neutral-100 shadow-sm'
              }`}>
                <h3 className={`text-base font-semibold mb-2 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-500'
                }`}>
                  What drives me:
                </h3>
                <ul className="space-y-1 pl-5 list-disc text-sm md:text-base">
                  <li>Creating elegant solutions to complex problems</li>
                  <li>Continuous learning and staying updated</li>
                  <li>Building applications that make a difference</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About