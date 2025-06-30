import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Contact({ isDarkMode }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "840c6d59-9862-437a-b17b-65555c9eaa0b");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
        setWordCount(0);
      } else {
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  const handleMessageChange = (e) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean);
    const count = words.length;
    setWordCount(count);
    
    if (count >= 120) {
      e.target.value = words.slice(0, 120).join(' ');
      setWordCount(120);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatDelayed: {
      y: [0, -20, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  }

  return (
    <motion.section 
      id="contact" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`w-full px-4 pt-18 sm:px-6 pt-8 lg:px-8 py-10 md:py-14 lg:py-14 flex items-center justify-center min-h-[calc(100vh-80px)] scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
      aria-labelledby="contact-heading"
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <motion.div 
          variants={floatVariants}
          animate="float"
          className={`absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full ${
            isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
          } blur-3xl`}
        />
        <motion.div 
          variants={floatVariants}
          animate="floatDelayed"
          className={`absolute top-2/3 right-1/3 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full ${
            isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
          } blur-3xl`}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          variants={itemVariants}
          className={`flex flex-col lg:flex-row rounded-xl overflow-hidden ${
            isDarkMode ? 'bg-gray-800/70 border border-gray-700' : 'bg-white/95 border border-gray-200'
          } shadow-lg`}
        >
          {/* Left Section - Contact Info */}
          <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <motion.h4 
              variants={itemVariants}
              className={`mb-3 text-sm sm:text-base font-semibold ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}
            >
              Let's Connect
            </motion.h4>
            <motion.h2 
              variants={itemVariants}
              id="contact-heading"
              className={`text-2xl sm:text-2xl md:text3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get in <span className={`bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>Touch</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-sm sm:text-base ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } mb-6 md:mb-8`}
            >
              Have a question, idea, or just want to say Hi! I'm always open to new opportunities and tech conversations.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              variants={containerVariants}
              className="space-y-3 sm:space-y-4"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-3 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a 
                  href="mailto:thallasaikalyan@gmail.com" 
                  className={`text-sm sm:text-base hover:underline ${
                    isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  thallasaikalyan@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.4 }}
            className={`hidden lg:block w-px ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`} 
            aria-hidden="true"
          />

          {/* Right Section - Form */}
          <motion.div 
            variants={containerVariants}
            className="lg:w-3/5 p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={onSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5'>
                <motion.div variants={itemVariants}>
                  <label 
                    htmlFor="name"
                    className={`block text-xs md:text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    id="name"
                    type='text'
                    required 
                    className={`w-full px-4 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none border rounded-lg transition-all ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                    }`}
                    name='Name'
                    aria-required="true"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label 
                    htmlFor="email"
                    className={`block text-xs md:text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    id="email"
                    type='email' 
                    required 
                    className={`w-full px-4 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none border rounded-lg transition-all ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                    }`}
                    name='E-mail'
                    aria-required="true"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className='mb-5'>
                <label 
                  htmlFor="message"
                  className={`block text-xs md:text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  rows='4'
                  className={`w-full px-4 py-3 text-sm sm:text-base outline-none border rounded-lg transition-all resize-none ${
                    isDarkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white focus:border-purple-500 hover:border-purple-500'
                      : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                  }`}
                  maxLength={600}
                  name='Message'
                  onChange={handleMessageChange}
                  aria-required="true"
                ></motion.textarea>
                <div className={`text-xs sm:text-sm mt-2 text-right ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <span>{wordCount}</span>/120 words
                </div>
              </motion.div>
              
              {result && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 text-center text-sm sm:text-base ${
                    result.includes("success") 
                      ? 'text-green-500' 
                      : isDarkMode 
                        ? 'text-red-400' 
                        : 'text-red-500'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {result}
                </motion.p>
              )}

              <motion.div variants={itemVariants} className="text-center">
                <motion.button 
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  type='submit' 
                  disabled={isSubmitting}
                  className={`px-8 py-3 sm:px-10 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/30' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-600/30'
                  } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 2L11 13"></path>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact