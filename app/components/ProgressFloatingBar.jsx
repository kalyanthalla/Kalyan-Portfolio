import React, { useState, useEffect, useRef } from 'react';

const ProgressFloatingBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      
      const currentScrollY = window.scrollY;
      if (circleRef.current) {
        if (currentScrollY > prevScrollY) {
          circleRef.current.style.setProperty('--direction', '0');
        } else {
          circleRef.current.style.setProperty('--direction', '1');
        }
      }
      setPrevScrollY(currentScrollY);
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const circumference = 2 * Math.PI * 36;
  const dashOffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div 
      className={`fixed ${isMobile ? 'left-4' : 'right-4'} bottom-4 z-50 transition-all duration-300`}
      ref={circleRef}
      style={{
        '--dash-offset': dashOffset,
        '--circumference': circumference,
      }}
    >
      <div className="relative w-16 h-16">
        {/* Progress track - larger circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100" style={{ position: 'absolute' }}>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeDasharray={`var(--circumference)`}
            strokeDashoffset={`var(--dash-offset)`}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
          />
        </svg>
        
        {/* Blue button - smaller and centered */}
        <button 
          onClick={scrollToTop}
          className="absolute w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 transition-colors duration-200"
          aria-label="Scroll to top"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProgressFloatingBar;