"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="card w-full max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-2 sm:mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:patel.avni@northeastern.edu"
                    className="text-sm sm:text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    patel.avni@northeastern.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-2 sm:mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:+18576939988"
                    className="text-sm sm:text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    +1 (857) 693-9988
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-2 sm:mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-white">
                    USA
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-6 sm:mt-8 mb-3 sm:mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/avnish-patel07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.github.com/avnishnp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="card">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Send Me a Message</h3>
            <form className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Let me know how I can help you" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Your message here..." 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full text-xs sm:text-sm py-2 px-4"
              >
                <a href="mailto:doye.n@northeastern.edu?subject=subject+message=message">Send Message</a>
              </button>
            </form>
          </div>*/}
      </div>
    </section>
  );
};

export default ContactSection;
