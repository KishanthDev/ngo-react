import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-16">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
          
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li><Link to="#about-us" className="hover:text-rose-600 transition-colors">About Us</Link></li>
              <li><Link to="#blog" className="hover:text-rose-600 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-rose-600 transition-colors">Indian Festival Calendar</Link></li>
              <li><Link to="#" className="hover:text-rose-600 transition-colors">Careers</Link></li>
              <li><Link to="#contact" className="hover:text-rose-600 transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Fundraiser Support</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li><Link to="#faq" className="hover:text-rose-600 transition-colors">FAQs</Link></li>
              <li><Link to="#contact" className="hover:text-rose-600 transition-colors">Reach out</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Start a Fundraiser for</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li><Link to="#" className="hover:text-rose-600 transition-colors">NGO</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Donate to</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li><Link to="#what-we-do" className="hover:text-rose-600 transition-colors">Social Causes</Link></li>
              <li><Link to="#ngo-partners" className="hover:text-rose-600 transition-colors">NGOs</Link></li>
            </ul>
          </div>

          <div className="flex flex-col col-span-2 sm:col-span-1">
            <div className="mb-6 w-full sm:w-max">
              <button className="flex items-center justify-between w-full sm:w-[100px] border border-gray-300 rounded px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none transition-colors">
                <span className="flex items-center gap-1">INR <span className="text-gray-400 font-normal">(₹)</span></span>
                <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                </svg>
              </button>
            </div>

            <ul className="flex items-center gap-3 mt-auto">
              <li>
                <a href="mailto:voiceofpeoplegvt@gmail.com" className="flex p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-full transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="tel:+918660210206" className="flex p-2 text-gray-400 hover:text-green-600 hover:bg-gray-100 rounded-full transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/@_thevoiceofpeople_/" target="_blank" rel="noopener noreferrer" className="flex p-2 text-gray-400 hover:text-pink-600 hover:bg-gray-100 rounded-full transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 pb-4">
          <h5 className="text-[15px] font-bold text-gray-900 mb-2">Disclaimer</h5>
          <p className="text-xs text-gray-500 leading-relaxed max-w-full text-justify sm:text-left">
            Use of children’s information including images, videos, testimonials, etc. in the Campaign is
            necessary for creating awareness about the charitable cause in order to bring traction to the said
            charitable cause and obtain donations which can then be used for charitable activities. Information
            is used and processed with valid consent. This statement is issued in compliance with the Consumer
            Protection Act, 2019, as amended from time to time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-6">
          <span className="text-sm text-gray-600 mb-4 md:mb-0">© Voice Of People</span>
          <ul className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <Link to="#" className="hover:text-rose-600 transition-colors">Terms</Link>
              <span className="text-xs text-gray-400 mt-1 sm:mt-0">Updated on 1 April, 2026</span>
            </li>
            <li>
              <Link to="#" className="hover:text-rose-600 transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};