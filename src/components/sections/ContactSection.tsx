import React from 'react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-white mb-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">We would love to hear from you. Here's how you can reach us.</p>
            </div>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Ashrama</h3>
                  <p className="text-gray-600">Voice of People Ashrama<br />Davanagere-Harihara Road,<br />Opposite Bathi Lake</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:voiceofpeoplegvt@gmail.com" className="text-red-600 hover:underline">voiceofpeoplegvt@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <a href="tel:+918660210206" className="text-red-600 hover:underline">+91 8660210206</a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                  <a href="https://www.instagram.com/_thevoiceofpeople_/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                    @_thevoiceofpeople_
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 md:h-full w-full bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>

        </div>
      </div>
    </section>
  );
};