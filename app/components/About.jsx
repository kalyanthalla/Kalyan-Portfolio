import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

export default function About() {
  const expertise = [
    {
      icon: assets.code_icon,
      title: "Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS, Redux",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: assets.server_icon,
      title: "Backend",
      description: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: assets.tool_icon,
      title: "Tools",
      description: "Git, Docker, Jest, Postman, Figma, Agile/Scrum",
      color: "bg-emerald-100 text-emerald-600"
    }
  ]

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Tailwind CSS',
    'Redux', 'GraphQL', 'Jest', 'Docker', 'REST APIs'
  ]

  return (
    <section 
      id='about' 
      className='pt-24 w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] bg-white'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 font-poppins'>
            About <span className='text-blue-600'>Me</span>
          </h2>
          <div className='w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full' />
          <p className='mt-6 text-gray-600 max-w-2xl mx-auto text-lg'>
            Get to know my skills and development approach
          </p>
        </div>

        {/* Content */}
        <div className='space-y-10'>
          {/* Introduction */}
          <div className='space-y-6 text-center'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
              Full-Stack Developer with a focus on <span className='text-blue-600'>quality</span> and <span className='text-blue-600'>performance</span>
            </h3>
            
            <div className='space-y-4 text-gray-600 text-base md:text-lg'>
              <p>
                I specialize in building responsive, accessible web applications using modern technologies.
                With expertise across the entire stack, I bridge the gap between elegant design and 
                robust technical implementation.
              </p>
              
              <p>
                My development philosophy emphasizes clean code, intuitive interfaces, and scalable
                architectures. I'm passionate about creating solutions that are both developer-friendly
                and user-centric.
              </p>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {expertise.map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${item.color} bg-opacity-50 hover:bg-opacity-70`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className={`p-2 rounded-lg ${item.color} bg-opacity-20`}>
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      width={24} 
                      height={24} 
                      className='w-6 h-6'
                    />
                  </div>
                  <h4 className='font-semibold text-gray-800'>{item.title}</h4>
                </div>
                <p className='text-gray-700 text-sm'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className='pt-6'>
            <h4 className='text-lg font-semibold text-gray-800 mb-5 text-center'>
              My Technical Toolkit
            </h4>
            <div className='flex flex-wrap justify-center gap-3'>
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className='px-4 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium shadow-sm border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}