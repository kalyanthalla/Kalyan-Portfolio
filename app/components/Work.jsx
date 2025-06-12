import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({ isDarkMode }) => {
  return (
    <section 
      id="work" 
      className={`w-full px-[5%] md:px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? 'bg-darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className='mb-2 text-lg font-Ovo text-amber-600'>What I've Built ...</h4>
          <h2 className='text-4xl md:text-5xl font-Ovo font-bold mb-4'>My Projects</h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a collection of hands-on projects that showcase my skills, creativity, and growth as a developer.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {workData.map((project, index) => (
            <div 
              key={index} 
              className='aspect-square rounded-lg relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <Image 
                src={project.bgImage} 
                alt={project.title} 
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode ? 'from-gray-900/80 to-gray-900/20' : 'from-black/80 to-black/20'
              }`}></div>
              
              <div className={`absolute w-11/12 left-1/2 -translate-x-1/2 bottom-4 rounded-md p-4 ${
                isDarkMode 
                  ? 'bg-gray-800/90 backdrop-blur-sm' 
                  : 'bg-white/90 backdrop-blur-sm'
              } transition-all duration-500 group-hover:bottom-6`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                  </div>
                  <button className={`p-2 rounded-full ${
                    isDarkMode 
                      ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  } transition-colors duration-300 shadow-md`}>
                  </button>
                </div>
              </div>
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

export default Work