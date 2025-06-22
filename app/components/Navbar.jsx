import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    // Navigation items data
    const navItems = ['Home', 'About', 'Skills', 'Work', 'Contact']

    return (
        <>
            <nav
                className={`w-full fixed h-[70px] px-4 lg:px-5 xl:px-[5%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                    isDarkMode ? 'shadow-white' : 'shadow-black'
                } ${
                    isScroll
                        ? `${isDarkMode ? 'bg-neutral-900/90' : 'bg-white/90'}`
                        : 'bg-transparent'
                }`}
            >
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#top" className="group cursor-default">
                        <Image 
                            src={isDarkMode ? assets.logo_dark : assets.logo} 
                            alt="Logo" 
                            className="w-20"
                        />
                    </a>
                </div>

                {/* Navigation Items */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a 
                                    className={`relative text-base font-semibold cursor-default ${
                                        isDarkMode 
                                            ? 'text-gray-200 hover:text-white' 
                                            : 'text-gray-700 hover:text-black'
                                    } transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300`}
                                    href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button 
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className="group relative"
                    >
                        {/* Regular icon */}
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt="" 
                            className="w-7 cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-0"
                        />
                        
                        {/* Filled icon */}
                        <Image 
                            src={isDarkMode ? assets.sun_icon_fill : assets.moon_icon_fill} 
                            alt="" 
                            className="w-7 cursor-pointer absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                        />
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        className="block md:hidden p-2" 
                        onClick={openMenu} 
                        aria-label="Open menu"
                    >
                        <Image 
                            src={isDarkMode ? assets.menu_icon_dark : assets.menu_icon} 
                            alt="Menu" 
                            className="w-8"
                        />
                    </button>

                    {/* Mobile Menu */}
                    <div 
                        ref={sideMenuRef} 
                        className={`flex md:hidden flex-col fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500 ease-in-out ${
                            isDarkMode ? 'bg-neutral-900' : 'bg-white'
                        } shadow-xl`}
                    >
                        <div 
                            className="absolute right-6 top-6 p-2" 
                            onClick={closeMenu}
                        >
                            <Image 
                                src={isDarkMode ? assets.close_icon_dark : assets.close_icon} 
                                alt="Close menu" 
                                className="w-7 transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        <div className="flex flex-col gap-4 mt-20 px-8">
                            {navItems.map((item) => (
                                <a 
                                    key={item} 
                                    className={`text-base font-normal py-2 px-4 cursor-default ${
                                        isDarkMode 
                                            ? 'text-gray-200 hover:text-white' 
                                            : 'text-gray-700 hover:text-black'
                                    }`} 
                                    onClick={closeMenu} 
                                    href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`}
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