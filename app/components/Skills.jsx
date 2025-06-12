import { assets, skillsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Skills({ isDarkMode }) {
  return (
    <section 
      id="skills" 
      className={`w-full px-[5%] md:px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? 'bg-darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className='mb-2 text-lg font-Ovo text-amber-600'>Things I'm Good At ...</h4>
          <h2 className='text-4xl md:text-5xl font-Ovo font-bold mb-4'>My Skills</h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a glimpse of the technologies and concepts I've worked with while building real-world projects.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {skillsData.map(({icon, title, description, link}, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-gray-800/50' 
                  : 'bg-white border-gray-200 hover:shadow-gray-200'
              } border`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Image 
                    src={icon} 
                    alt={title} 
                    width={40} 
                    height={40} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className={`text-xl font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{title}</h3>
              </div>
              
              <p className={`text-sm mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {description}
              </p>
              
              <a 
                href={link} 
                className={`inline-flex items-center gap-2 text-sm ${
                  isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'
                } transition-colors`}
              >
                Read more 
                <Image 
                  src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
                  alt="Right arrow" 
                  width={16}
                  height={16}
                />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className={`inline-flex items-center gap-2 rounded-full py-3 px-8 border ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-gray-800 text-gray-100 hover:border-amber-500' 
                : 'border-gray-300 hover:bg-gray-100 text-gray-700 hover:border-amber-500'
            } transition-all duration-300`}
          >
            Show more 
            <Image 
              src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} 
              alt="Right arrow" 
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills