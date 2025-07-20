import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <section id='work' className='pt-24 w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] bg-gray-50 relative'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent opacity-30'></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4'>
            My <span className='text-blue-600'>Work</span>
          </h3>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Each project represents a unique challenge and solution
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {workData.map((project, index) => (
            <div 
              key={project.title}
              className={`relative group transition-all duration-500 md:hover:z-10 
                ${index % 3 === 0 ? 'md:hover:-rotate-1' : ''}
                ${index % 3 === 1 ? 'md:hover:-translate-y-2' : ''}
                ${index % 3 === 2 ? 'md:hover:rotate-1' : ''}
              `}
            >
              {/* Main Card */}
              <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col transform transition-transform duration-300 md:group-hover:scale-105'>
                {/* Project Image with Overlay */}
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 md:group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                    <p className='text-white text-sm'>{project.description}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className='p-6 flex-1 flex flex-col'>
                  <div className='flex-1'>
                    <h4 className='text-xl font-semibold text-gray-800 mb-3 font-poppins'>{project.title}</h4>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className='px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex justify-between items-center mt-auto pt-4 border-t border-gray-100'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium'
                    >
                      <Image 
                        src={assets.github_icon} 
                        alt="GitHub" 
                        width={18} 
                        height={18} 
                        className='w-4 h-4'
                      />
                      Code
                    </a>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      <Image 
                        src={assets.link_icon} 
                        alt="Live Demo" 
                        width={16} 
                        height={16} 
                        className='w-3 h-3'
                      />
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative layered effect */}
              <div className={`absolute inset-0 rounded-xl border-2 border-blue-200 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 -z-10 
                ${index % 3 === 0 ? 'md:-rotate-2 md:translate-y-1' : ''}
                ${index % 3 === 1 ? 'md:translate-y-2' : ''}
                ${index % 3 === 2 ? 'md:rotate-2 md:translate-y-1' : ''}
              `}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className='text-center mt-16'>
          <a
            href="https://github.com/kalyanthalla?tab=repositories"
            className='inline-flex items-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:bg-gray-50'
          >
            <Image 
              src={assets.github_icon} 
              alt="GitHub" 
              width={20} 
              height={20} 
              className='w-5 h-5 mr-2'
            />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work