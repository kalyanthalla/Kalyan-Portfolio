import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending...")
    
    try {
      const formData = new FormData(event.target)
      formData.append("access_key", "840c6d59-9862-437a-b17b-65555c9eaa0b")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully!")
        event.target.reset()
        setWordCount(0)
      } else {
        setResult(data.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setResult("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setResult(""), 5000)
    }
  }

  const handleMessageChange = (e) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean)
    const count = words.length
    setWordCount(count)
    
    if (count >= 120) {
      e.target.value = words.slice(0, 120).join(' ')
      setWordCount(120)
    }
  }

  return (
    <section 
      id='contact' 
      className='pt-24 w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5%] bg-white relative'
    >
      {/* Decorative elements */}
      <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4'>
            Let's <span className='text-blue-600'>Connect!</span>
          </h3>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Have a question or want to work together? Reach out below!
          </p>
        </div>

        {/* Centered Contact Form */}
        <div className='w-full'>
          <form onSubmit={onSubmit} className='space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                  placeholder='name@example.com'
                />
              </div>
            </div>
            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                required
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                placeholder='Project Inquiry'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={3}
                required
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                placeholder='Tell me about your project...'
                onChange={handleMessageChange}
                maxLength={600}
              ></textarea>
              <div className="text-xs mt-2 text-right text-gray-500">
                <span>{wordCount}</span>/120 words
              </div>
            </div>
            
            {result && (
              <p 
                className={`text-center text-sm ${
                  result.includes("success") ? 'text-green-500' : 'text-red-500'
                }`}
                role="status"
                aria-live="polite"
              >
                {result}
              </p>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2 group ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Image 
                    src={assets.send_icon} 
                    alt="Send" 
                    width={16} 
                    height={16} 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}