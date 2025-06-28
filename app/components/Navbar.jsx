import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.right = '0'
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        sideMenuRef.current.style.right = '-100%'
        setIsMenuOpen(false)
    }

    useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
        setIsScroll(window.scrollY > 50)
    }
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
        e.preventDefault()
        const targetId = e.currentTarget.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        } else {
            // Fallback to default behavior if target doesn't exist
            window.location.href = targetId
        }
    }

    window.addEventListener('scroll', handleScroll)
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
        window.removeEventListener('scroll', handleScroll)
        anchorLinks.forEach(anchor => {
            anchor.removeEventListener('click', handleAnchorClick)
        })
    }
}, [])

// Navigation items data
const navItems = ['Home', 'About', 'Skills', 'Work', 'Contact']

    return (
        <>
            <nav
                className={`w-full fixed h-18 md:h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] py-3 flex items-center justify-between z-50 transition-all duration-300 ${
                    isDarkMode ? 'shadow-white' : 'shadow-black'
                } ${
                    isScroll
                        ? `${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm`
                        : 'bg-transparent'
                }`}
            >
                {/* Backdrop for mobile menu */}
                {isMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={closeMenu}
                    />
                )}

                {/* Logo */}
                <div className="flex items-center">
                    <a href="#top" className="group cursor-default">
                        <Image 
                            src={isDarkMode ? assets.logo_dark : assets.logo} 
                            alt="Logo" 
                            width={80}
                            height={40}
                            className="w-16 sm:w-18 md:w-20 h-auto"
                            priority
                        />
                    </a>
                </div>

                {/* Navigation Items */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a 
                                    className={`relative text-base font-medium poppins cursor-default ${
                                        isDarkMode 
                                            ? 'text-gray-200 hover:text-white' 
                                            : 'text-gray-700 hover:text-gray-900'
                                    } transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300`}
                                    href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`}
                                    aria-label={`Navigate to ${item}`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button 
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className="group relative p-2"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {/* Regular icon */}
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt="" 
                            width={28}
                            height={28}
                            className="w-7 h-7 cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-0"
                        />
                        
                        {/* Filled icon */}
                        <Image 
                            src={isDarkMode ? assets.sun_icon_fill : assets.moon_icon_fill} 
                            alt="" 
                            width={28}
                            height={28}
                            className="w-7 h-7 cursor-pointer absolute top-2 left-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                        />
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        className="block md:hidden p-3" 
                        onClick={openMenu} 
                        aria-label="Open menu"
                    >
                        <Image 
                            src={isDarkMode ? assets.menu_icon_dark : assets.menu_icon} 
                            alt="Menu" 
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </button>

                    {/* Mobile Menu */}
                    <div 
                        ref={sideMenuRef} 
                        className={`flex md:hidden flex-col fixed right-[-100%] top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500 ease-in-out ${
                            isDarkMode ? 'bg-gray-900' : 'bg-white'
                        } shadow-xl`}
                    >
                        <div 
                            className="absolute right-6 top-6 p-2" 
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <Image 
                                src={isDarkMode ? assets.close_icon_dark : assets.close_icon} 
                                alt="Close menu" 
                                width={28}
                                height={28}
                                className="w-7 h-7 transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-20 px-4">
                            {navItems.map((item) => (
                                <a 
                                    key={item} 
                                    className={`text-lg font-medium poppins py-4 px-6 rounded-lg transition-colors ${
                                        isDarkMode 
                                            ? 'text-gray-200 hover:text-white hover:bg-gray-800' 
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                    }`} 
                                    onClick={closeMenu} 
                                    href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`}
                                    aria-label={`Navigate to ${item}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar