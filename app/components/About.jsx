import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <section 
      id='about' 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="about-heading"
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
        <div className="w-full">
          {/* Section header with better spacing */}
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 
              id="about-heading"
              className='text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 relative inline-block'
            >
              <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                About Me
              </span>
            </h2>
            <p className={`text-sm sm:text-base md:text-lg max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get to know more about my journey and skills
            </p>
          </div>

          {/* Main content with improved flex behavior */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full'>
            {/* Profile image with better hover effects */}
            <div className='relative order-1 lg:order-2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-10 group mx-auto lg:mx-0'>
              <div className={`absolute inset-0 rounded-full ${
                isDarkMode ? 'bg-purple-900/30' : 'bg-blue-100/40'
              } blur-md scale-95 group-hover:scale-100 transition-all duration-500`}></div>
              <div className={`w-full h-full rounded-full overflow-hidden shadow-lg relative ${
                isDarkMode ? 'ring-2 ring-purple-400/80' : 'ring-2 ring-purple-500/80'
              } transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl`}>
                <Image 
                  src={assets.profile_image} 
                  alt='Profile picture of Thalla Sai Kalyan' 
                  width={400}
                  height={538}
                  className='w-full h-full object-cover object-top'
                  priority
                />
              </div>
            </div>

            {/* Text Content with better typography */}
            <div className='flex-1 order-2 lg:order-1'>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose text-justify ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm a passionate <span className={`font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    full stack web developer
                  </span> with hands-on experience through internships and personal projects. My journey has equipped me with strong skills in the MERN stack and modern web technologies.
                </p>
                
                <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose text-justify ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I specialize in building <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    responsive, accessible web applications
                  </span> that deliver exceptional user experiences, combining technical expertise with creative problem-solving.
                </p>
                
                {/* Motivations card with improved design */}
                <div className={`p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm border ${
                  isDarkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-white/80 border-zinc-200'
                } transition-all duration-300 hover:shadow-lg`}>
                  <h3 className={`text-base sm:text-base font-semibold mb-3 sm:mb-4 flex items-center gap-3 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    <span className={`inline-block w-3 h-3 rounded-full ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`}></span>
                    What drives me:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 pl-5 sm:pl-6">
                    {[
                      "Creating elegant solutions to complex problems",
                      "Continuous learning and staying updated",
                      "Building applications that make a difference"
                    ].map((item, index) => (
                      <li 
                        key={index} 
                        className={`text-sm sm:text-base relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full ${
                          isDarkMode ? 'before:bg-purple-400 text-gray-300' : 'before:bg-purple-600 text-gray-700'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

export default About