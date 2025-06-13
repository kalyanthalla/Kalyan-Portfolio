import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <section 
      id='about' 
      className={`w-full px-[5%] md:px-[12%] py-16 md:py-20 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'darkTheme text-neutral-100' : 'bg-white text-neutral-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center lg:text-left">
          <h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block roboto'>
            <span className="relative z-10">
              About Me
              <span className={`absolute -bottom-1 left-0 h-1 w-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`text-base md:text-lg max-w-3xl mx-auto lg:mx-0 ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Get to know more about my journey and skills
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
          {/* Image Container - Now properly aligned */}
          <div className='relative order-1 lg:order-2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72'>
            <div className={`w-full h-full rounded-full overflow-hidden shadow-xl ${
              isDarkMode ? 'ring-2 ring-purple-400' : 'ring-2 ring-purple-600'
            }`}>
              <Image 
                src={assets.profile_image} 
                alt='Profile picture' 
                width={400}
                height={538}
                className='w-full h-full object-cover object-top'
                priority
              />
            </div>
            <div className={`absolute -inset-3 rounded-full border-2 ${
              isDarkMode ? 'border-purple-400' : 'border-purple-600'
            } opacity-20 animate-spin-slow pointer-events-none`}></div>
          </div>

          {/* Text Content - Adjusted text size */}
          <div className='flex-1 order-2 lg:order-1'>
            <div className="space-y-4">
              <p className={`text-base md:text-lg leading-relaxed text-justify ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                I'm a passionate full stack web developer with hands-on experience through internships and personal projects. My journey has equipped me with strong skills in the MERN stack and modern web technologies.
              </p>
              
              <p className={`text-base md:text-lg leading-relaxed text-justify ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                I specialize in building responsive, accessible web applications that deliver exceptional user experiences, combining technical expertise with creative problem-solving.
              </p>
              
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-neutral-800 border border-neutral-700' : 'bg-neutral-50 border border-neutral-200'
              }`}>
                <h3 className={`text-lg font-semibold roboto mb-2 ${
                  isDarkMode ? 'text-purple-300' : 'text-purple-600'
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