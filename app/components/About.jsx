import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <section 
      id='about' 
      className={`w-full px-[5%] md:px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? 'bg-darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h4 className='text-lg font-Ovo text-amber-600'>Introduction</h4>
          <h2 className='text-4xl md:text-5xl font-bold mt-2 mb-6'>About Me</h2>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-12'>
          <div className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg'>
            <Image 
              src={assets.user_image} 
              alt='Profile picture' 
              width={320}
              height={320}
              className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500'
            />
          </div>
          
          <div className='flex-1'>
            <p className={`text-lg mb-10 max-w-2xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I am a passionate full stack web developer with solid hands-on experience through internship, certifications and personal projects. I have a strong command of the MERN stack and continuously strive to build impactful, user-focused applications.
            </p>
            
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mb-12'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <li 
                  key={index}
                  className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-darkTheme border-gray-700 hover:shadow-gray-800/50' 
                      : 'bg-white border-gray-200 hover:shadow-gray-200'
                  } border shadow-md`}
                >
                  <Image 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title} 
                    width={28}
                    height={28}
                    className='w-7 mb-4'
                  />
                  <h3 className={`my-3 font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{title}</h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{description}</p>
                </li>
              ))}
            </ul>

            <h4 className={`my-6 font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Tools I use</h4>

            <ul className='flex flex-wrap items-center gap-3 sm:gap-4'>
              {toolsData.map((tool, index) => (
                <li 
                  key={index} 
                  className={`flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode 
                      ? 'bg-darkTheme border-gray-700 hover:bg-gray-700' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  } border shadow-sm`}
                >
                  <Image 
                    src={tool} 
                    alt='Tool icon' 
                    width={28}
                    height={28}
                    className='w-6 sm:w-7 object-contain'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About