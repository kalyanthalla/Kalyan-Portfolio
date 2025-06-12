import { assets } from '@/assets/assets'
import Image from 'next/image'
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
      className={`w-full px-[5%] md:px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? 'bg-darkTheme' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row rounded-xl overflow-hidden ${
          isDarkMode ? 'bg-neutral-900/50 border border-neutral-800' : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          {/* Left Section - Headings */}
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
            <h4 className='mb-2 text-base font-bold text-purple-500'>Let's Connect ...</h4>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Get in Touch
            </h2>
            <p className={`text-base ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Have a question, idea, or just want to say Hi! I'm always open to new opportunities and tech conversations.
            </p>
            
            {/* Optional: Add social icons or additional info here */}
            <div className="mt-6 flex space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className={`hidden lg:block w-px ${
            isDarkMode ? 'bg-neutral-700' : 'bg-gray-200'
          }`}></div>

          {/* Right Section - Form */}
          <div className="lg:w-3/5 p-8 lg:p-12">
            <form onSubmit={onSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                <div>
                  <input 
                    type='text' 
                    placeholder='Your name' 
                    required 
                    className={`w-full p-3 text-sm outline-none border-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-neutral-800/50 border-white/50 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-gray-50 border-purple-500/30 text-gray-800 focus:border-purple-500'
                    }`}
                    name='Name'
                  />
                </div>
                <div>
                  <input 
                    type='email' 
                    placeholder='Your email' 
                    required 
                    className={`w-full p-3 text-sm outline-none border-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-neutral-800/50 border-white/50 text-white focus:border-purple-500 hover:border-purple-500' 
                        : 'bg-gray-50 border-purple-500/30 text-gray-800 focus:border-purple-500'
                    }`}
                    name='E-mail'
                  />
                </div>
              </div>
              
              <div className='mb-6'>
                <textarea 
                  rows='8' 
                  placeholder='Your message...' 
                  required 
                  className={`w-full p-3 text-sm outline-none border-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-neutral-800/50 border-white/50 text-white focus:border-purple-500 hover:border-purple-500' 
                      : 'bg-gray-50 border-purple-500/30 text-gray-800 focus:border-purple-500'
                  }`}
                  name='Message'
                ></textarea>
              </div>

              {result && (
                <p className={`mb-4 text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {result}
                </p>
              )}

              <div className="text-center">
                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  className={`py-2.5 px-6 inline-flex items-center gap-2 rounded-full text-sm border-2 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-transparent border-white text-white hover:border-purple-500 hover:text-purple-400' 
                      : 'bg-gray-900 border-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_white} alt='' className='w-4' />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact