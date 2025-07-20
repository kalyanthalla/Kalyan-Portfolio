import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking on nav links
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Navigation items
  const navItems = [
    { name: 'About', href: '#about', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )},
    { name: 'Work', href: '#work', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )},
    { name: 'Contact', href: '#contact', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )}
  ]

  // Social links
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/kalyanthalla', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com/in/kalyan-thalla', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )}
  ]

  return (
    <>
      <nav className={`w-full fixed h-18 md:h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] py-3 flex items-center justify-between z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        {/* Logo */}
        <div className='flex items-center'>
          <a href="#top" className='mr-auto ml-4' aria-label="Home">
            <Image 
              src={assets.logo} 
              alt="Logo"
              width={80}
              height={80}
              className="w-16 sm:w-18 md:w-20 h-auto transition-transform hover:scale-105" 
              priority
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className='flex items-center gap-4 sm:gap-6 md:gap-8'>
          <ul className='hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8'>
            {navItems.map((item) => (
              <li key={item.name}>
                {item.name === 'Contact' ? (
                  <a 
                    href={item.href} 
                    className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-base font-medium font-poppins rounded-lg hover:bg-blue-700 transition-all hover:shadow-md'
                  >
                    {item.name}
                    <Image 
                      src={assets.arrow_icon} 
                      alt="Arrow" 
                      width={16} 
                      height={16} 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ) : (
                  <a 
                    href={item.href} 
                    className='text-base font-medium font-poppins text-gray-700 hover:text-blue-600 transition-colors relative group'
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className='p-2 md:hidden rounded-md hover:bg-gray-100 transition-colors'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Image 
              src={isMenuOpen ? assets.close_icon : assets.menu_icon} 
              alt={isMenuOpen ? "Close menu" : "Open menu"} 
              width={24} 
              height={24} 
              className="w-7 h-7"
            />
          </button>
        </div>
        
        {/* Mobile Side Menu */}
        <div 
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col`}
          aria-modal="true"
          role="dialog"
        >
          {/* Close button at top right */}
          <div className="absolute top-4 right-4">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <Image 
                src={assets.close_icon} 
                alt="Close menu" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Profile section */}
          <div className="flex flex-col items-center pt-16 pb-6 px-6 border-b border-gray-100">
            <div className='relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-100 shadow-md'>
              <Image 
                src={assets.profile_image} 
                alt='Profile' 
                fill
                className='object-cover'
                priority
              />
            </div>
            
            <div className="text-center">
              <h2 className='text-xl font-semibold text-gray-800 font-poppins'>
                Thalla Sai Kalyan
              </h2>
              <p className='text-sm text-gray-600 mt-1 flex items-center justify-center'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="mr-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Hyderabad, India
              </p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex flex-col px-4 py-6 space-y-2 flex-grow">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium font-poppins text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social Icons at bottom */}
          <div className="p-6 flex justify-center gap-4 border-t border-gray-100">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Overlay when mobile menu is open */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
        onClick={toggleMenu}
        aria-hidden="true"
      />
    </>
  )
}