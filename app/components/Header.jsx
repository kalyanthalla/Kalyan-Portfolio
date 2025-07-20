import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header id='home' className='min-h-[100vh] md:min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100'>
      {/* Enhanced background elements with subtle animation */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full bg-blue-500/10 blur-3xl animate-float-slow' />
        <div className='absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full bg-blue-300/10 blur-3xl animate-float-medium' />
        <div className='absolute bottom-1/4 left-1/3 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-full bg-white/20 blur-3xl animate-float-fast' />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20' />
      </div>

      <div className='w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-16 md:py-0'>
        {/* Text Content - Left side */}
        <div className='flex-1 text-center md:text-left space-y-6 md:space-y-8'>
          <div className='space-y-4 md:space-y-6'>
            <h2 className='text-lg sm:text-xl md:text-2xl text-blue-600 font-medium font-poppins animate-fade-in-up'>
              Hello, I'm <span className="text-blue-800 font-semibold">Thalla Sai Kalyan</span> 👋
            </h2>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight'>
              Full-Stack <span className='text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500'>Developer</span>
              <span className='ml-1 blinking-cursor'>_</span>
            </h1>
            <p className='text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-100'>
              I craft exceptional digital experiences with modern web technologies. 
              Specializing in the MERN stack, TypeScript, and responsive design.
            </p>
          </div>

          {/* Buttons with improved hover effects */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-200'>
            <a 
              href="#work" 
              className='px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium font-poppins rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group transform hover:-translate-y-0.5'
            >
              View My Work
              <Image
                src={assets.arrow_icon} 
                alt="Arrow" 
                width={16} 
                height={16} 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
            <a 
              href="#" 
              className='px-6 py-3 border-2 border-gray-700 bg-white/80 backdrop-blur-sm text-gray-700 font-medium font-poppins rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2 group transform hover:-translate-y-0.5'
            >
              Download CV
              <Image 
                src={assets.download_icon} 
                alt="Download" 
                width={16} 
                height={16} 
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>

          {/* Social Links with subtle hover animations */}
          <div className="flex justify-center md:justify-start gap-4 pt-4 animate-fade-in-up delay-300">
            <a 
              href="https://github.com/kalyanthalla" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100/50 transition-all duration-300 backdrop-blur-sm hover:text-blue-600 transform hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/kalyan-thalla" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100/50 transition-all duration-300 backdrop-blur-sm hover:text-blue-600 transform hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Enhanced Profile Image with blue/white animations */}
        <div className='relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 hidden md:flex items-center justify-center group'>
          {/* Blue/white gradient border */}
          <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-r from-blue-500 to-blue-300 animate-gradient-xy overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white/90 backdrop-blur-sm p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  src={assets.profile_image} 
                  alt='Thalla Sai Kalyan - Full Stack Developer' 
                  fill
                  className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
                  priority 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Floating dots decoration */}
          <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-blue-400/80 animate-float-slow" />
          <div className="absolute -bottom-2 -right-4 w-4 h-4 rounded-full bg-blue-300/80 animate-float-medium" />
          <div className="absolute top-8 -right-8 w-2 h-2 rounded-full bg-white/80 animate-float-fast" />
          
          {/* Blue glow effect */}
          <div className="absolute -inset-4 rounded-full bg-blue-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
      </div>

      {/* Scroll indicator with improved animation */}
      <div className='absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500'>
        <a href="#about" className='flex flex-col items-center group' aria-label="Scroll down">
          <span className='text-sm text-gray-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity'>Scroll down</span>
          <div className='bounce-arrow text-gray-700 group-hover:text-blue-600 transition-colors'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .blinking-cursor {
          animation: blink 1.5s infinite;
        }
        
        .bounce-arrow {
          animation: bounce 2s infinite;
        }

        .animate-gradient-xy {
          background-size: 300% 300%;
          animation: gradient-xy 8s ease infinite;
          background-image: linear-gradient(
            45deg,
            #3b82f6,  /* blue-500 */
            #93c5fd,  /* blue-300 */
            #ffffff,  /* white */
            #93c5fd,  /* blue-300 */
            #3b82f6   /* blue-500 */
          );
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </header>
  )
}