import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <section 
      id='about' 
      className={`w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-16 pb-16 md:py-20 min-h-screen flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl animate-float-delay`}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="w-full">
          <div className="mb-8 text-center">
            <h2 className='text-3xl font-bold mb-3 relative inline-block'>
              <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
                isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
              } bg-clip-text text-transparent`}>
                About Me
              </span>
            </h2>
            <p className={`text-base poppins max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get to know more about my journey and skills
            </p>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full'>
            {/* Profile image - keeping original position */}
            <div className='relative order-1 lg:order-2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 z-10 group mx-auto lg:mx-0'>
              <div className={`absolute inset-0 rounded-full ${
                isDarkMode ? 'bg-purple-900/30' : 'bg-blue-50/40'
              } blur-md scale-95 group-hover:scale-100 transition-transform duration-500`}></div>
              <div className={`w-full h-full rounded-full overflow-hidden shadow-xl relative ${
                isDarkMode ? 'ring-2 ring-purple-400' : 'ring-2 ring-purple-500'
              } transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
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

            {/* Text Content - adjusted spacing */}
            <div className='flex-1 order-2 lg:order-1'>
              <div className="space-y-6">
                <p className={`text-base leading-relaxed text-justify ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm a passionate <span className={`font-medium poppins ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>full stack web developer</span> with hands-on experience through internships and personal projects. My journey has equipped me with strong skills in the MERN stack and modern web technologies.
                </p>
                
                <p className={`text-base leading-relaxed text-justify ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I specialize in building <span className={`font-medium poppins ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>responsive, accessible web applications</span> that deliver exceptional user experiences, combining technical expertise with creative problem-solving.
                </p>
                
                <div className={`p-5 rounded-xl backdrop-blur-sm border ${
                  isDarkMode ? 'bg-neutral-800/50 border-neutral-700' : 'bg-white/80 border-neutral-200'
                } transition-all duration-300 hover:shadow-lg`}>
                  <h3 className={`text-base font-semibold poppins mb-3 flex items-center gap-2 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`}></span>
                    What drives me:
                  </h3>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Creating elegant solutions to complex problems",
                      "Continuous learning and staying updated",
                      "Building applications that make a difference"
                    ].map((item, index) => (
                      <li key={index} className={`text-sm relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full ${
                        isDarkMode ? 'before:bg-purple-400 text-gray-300' : 'before:bg-purple-600 text-gray-700'
                      }`}>
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

      <style jsx>{`
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
    </section>
  )
}

export default About