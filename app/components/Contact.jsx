import React, { useState } from 'react'

function Contact({ isDarkMode }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        document.querySelector('.word-counter').textContent = '0';
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

  return (
    <section 
      id="contact" 
      className={`w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-[calc(100vh-80px)] flex items-center scroll-mt-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'darkTheme text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div className={`absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        } blur-3xl animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-56 sm:w-80 h-56 sm:h-80 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'
        } blur-3xl animate-float-delay`}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className={`flex flex-col lg:flex-row rounded-xl overflow-hidden ${
          isDarkMode ? 'bg-neutral-900/50 border border-neutral-700' : 'bg-white/90 border border-neutral-200'
        } shadow-lg`}>
          {/* Left Section - Headings */}
          <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h4 className={`mb-2 sm:mb-3 text-xs sm:text-sm poppins font-semibold ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Let's Connect ...
            </h4>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get in <span className={`bg-gradient-to-r from-blue-600 to-purple-600 ${
                isDarkMode ? 'dark:to-purple-400' : 'dark:from-blue-500'
              } bg-clip-text text-transparent`}>Touch</span>
            </h2>
            <p className={`text-xs sm:text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Have a question, idea, or just want to say Hi! I'm always open to new opportunities and tech conversations.
            </p>
            
            {/* Contact Info */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className={`text-xs sm:text-sm poppins ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>thallasaikalyan@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className={`hidden lg:block w-px ${
            isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'
          }`}></div>

          {/* Right Section - Form */}
          <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
            <form onSubmit={onSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5'>
                <div>
                  <label className={`block text-xs sm:text-sm poppins font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Name</label>
                  <input 
                    type='text' 
                    placeholder='Your name' 
                    required 
                    className={`w-full p-2 sm:p-2.5 text-xs sm:text-sm outline-none border rounded-lg transition-all ${
                      isDarkMode 
                        ? 'bg-neutral-800/50 border-neutral-700 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                    }`}
                    name='Name'
                  />
                </div>
                <div>
                  <label className={`block text-xs sm:text-sm poppins font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Email</label>
                  <input 
                    type='email' 
                    placeholder='Your email' 
                    required 
                    className={`w-full p-2 sm:p-2.5 text-xs sm:text-sm outline-none border rounded-lg transition-all ${
                      isDarkMode 
                        ? 'bg-neutral-800/50 border-neutral-700 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                    }`}
                    name='E-mail'
                  />
                </div>
              </div>
              
              <div className='mb-3 sm:mb-4'>
                <label className={`block text-xs sm:text-sm poppins font-medium mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  rows='4'
                  className={`w-full p-2 sm:p-2.5 text-xs sm:text-sm outline-none border rounded-lg transition-all resize-none ${
                    isDarkMode
                      ? 'bg-neutral-800/50 border-neutral-700 text-white focus:border-purple-500 hover:border-purple-500'
                      : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 hover:border-purple-500'
                  } lg:h-[120px]`}
                  placeholder='Your message ...'
                  maxLength={600}
                  name='Message'
                  onChange={(e) => {
                    const wordCount = e.target.value.trim().split(/\s+/).filter(Boolean).length;
                    document.querySelector('.word-counter').textContent = wordCount;
                    if (wordCount >= 120) {
                      e.target.value = e.target.value.split(/\s+/).slice(0,120).join(' ');
                    }
                  }}
                ></textarea>
                <div className={`text-xs mt-1 text-right ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <span className="word-counter">0</span>/120 words
                </div>
              </div>
              
              {result && (
                <p className={`mb-3 sm:mb-4 text-center text-xs sm:text-sm ${
                  result.includes("success") 
                    ? 'text-green-500' 
                    : isDarkMode 
                      ? 'text-red-400' 
                      : 'text-red-500'
                }`}>
                  {result}
                </p>
              )}

              <div className="text-center">
                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium poppins transition-all duration-300 flex items-center gap-1 sm:gap-2 mx-auto ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md hover:shadow-purple-500/30' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-600/30'
                  } ${isSubmitting ? 'opacity-80' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13"></path>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
      `}</style>
    </section>
  )
}

export default Contact