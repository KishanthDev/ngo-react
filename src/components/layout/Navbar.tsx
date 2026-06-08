import { useState } from "react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-white z-[99] border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-[1216px] mx-auto h-[86px] flex items-center justify-between lg:justify-start px-4 sm:px-6 lg:px-8 py-[18px]">
        {/* Logo */}
        <a href="/" className="h-full cursor-pointer flex items-center shrink-0">
          <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide">
            Voice Of People
          </h1>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-rose-600 focus:outline-none"
        >
          {!mobileOpen ? (
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow w-full justify-end ml-8">
          <ul className="flex items-center gap-6 xl:gap-8">

            {/* Donate Mega Menu */}
            <li className="group relative px-3 py-2 cursor-pointer">
              <div className="flex items-center text-gray-700 hover:text-rose-600 transition-colors">
                <span className="text-base font-medium">Donate</span>

                <svg
                  className="w-5 h-5 ml-1 fill-current transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0" />
                </svg>
              </div>

              <div className="absolute top-full left-1/2 -translate-x-[60%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex gap-8 w-max">

                  {/* Monthly Missions */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[13px] font-bold tracking-wider text-gray-500 uppercase">
                        To Our Monthly Missions
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-[15px] text-gray-700 hover:text-rose-600">
                        No Child Orphaned
                      </p>

                      <p className="text-[15px] text-gray-700 hover:text-rose-600">
                        Protect Abandoned Elders
                      </p>

                      <p className="text-[15px] text-gray-700 hover:text-rose-600">
                        Safe Water for All
                      </p>

                      <p className="text-[15px] text-gray-700 hover:text-rose-600 flex items-center">
                        Empower Disabled Lives
                        <span className="ml-2 bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      </p>

                      <p className="text-[15px] text-gray-700 hover:text-rose-600">
                        Feed the Hungry
                      </p>
                    </div>
                  </div>

                  {/* Causes */}
                  <div className="w-[176px] flex flex-col gap-4">
                    <div>
                      <p className="text-[13px] font-bold tracking-wider text-gray-500 uppercase">
                        To a Cause
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Children
                      </a>
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Health
                      </a>
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Animals
                      </a>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="w-[176px] flex flex-col gap-4">
                    <div>
                      <p className="text-[13px] font-bold tracking-wider text-gray-500 uppercase">
                        To NGOs in your area
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Mumbai
                      </a>
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Bangalore
                      </a>
                      <a href="#" className="text-[15px] text-gray-700 hover:text-rose-600">
                        Delhi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                href="#impact"
                className="text-base font-medium text-gray-700 hover:text-rose-600"
              >
                Our Impact
              </a>
            </li>

            <li>
              <a
                href="#what-we-do"
                className="text-base font-medium text-gray-700 hover:text-rose-600"
              >
                Projects
              </a>
            </li>

            {/* About */}
            <li className="group relative px-3 py-2 cursor-pointer">
              <div className="flex items-center text-gray-700 hover:text-rose-600">
                <span className="text-base font-medium">About</span>
              </div>

              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-[240px]">
                  <a href="#about-us" className="block px-5 py-2.5 hover:text-rose-600">
                    Our Story
                  </a>
                  <a href="#blog" className="block px-5 py-2.5 hover:text-rose-600">
                    Blog
                  </a>
                  <a href="#contact" className="block px-5 py-2.5 hover:text-rose-600">
                    Contact Us
                  </a>
                </div>
              </div>
            </li>

            {/* More */}
            <li className="group relative px-2 py-2 cursor-pointer">
              <div className="flex items-center text-gray-700 hover:text-rose-600 transition-colors">
                <span className="text-base font-medium">More</span>

                <svg
                  className="w-5 h-5 ml-1 fill-current transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0" />
                </svg>
              </div>

              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-[276px] flex flex-col">
                  <a
                    href="#ngo-partners"
                    className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-rose-600"
                  >
                    Our Partners
                  </a>

                  <a
                    href="#faq"
                    className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-rose-600"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </li>

            {/* Login */}
            <li className="ml-4 pl-4 border-l border-gray-200">
              <button className="bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-50 font-semibold px-6 py-2 rounded-full">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white w-full h-[calc(100vh-86px)] overflow-y-auto border-t border-gray-100">
          <div className="flex flex-col px-6 py-6 space-y-2">
            <details className="border-b border-gray-100 pb-2">
              <summary className="flex justify-between items-center text-lg font-medium py-3 cursor-pointer">
                Donate
              </summary>

              <div className="pl-4 pb-4 flex flex-col space-y-4">
                <p>No Child Orphaned</p>
                <p>Protect Abandoned Elders</p>
                <p>Support the Blind</p>
              </div>
            </details>

            <a
              href="#impact"
              className="text-lg py-3 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Our Impact
            </a>

            <a
              href="#what-we-do"
              className="text-lg py-3 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </a>
            
            {/* About */}
            <details className="border-b border-gray-100 pb-2">
              <summary className="text-lg font-medium py-3 cursor-pointer">
                About
              </summary>

              <div className="pl-4 pb-4 flex flex-col space-y-3">
                <a href="#about-us" onClick={() => setMobileOpen(false)}>
                  Our Story
                </a>

                <a href="#blog" onClick={() => setMobileOpen(false)}>
                  Blog
                </a>

                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </a>
              </div>
            </details>

            {/* More */}
            <details className="border-b border-gray-100 pb-2">
              <summary className="text-lg font-medium py-3 cursor-pointer">
                More
              </summary>

              <div className="pl-4 pb-4 flex flex-col space-y-3">
                <a href="#ngo-partners" onClick={() => setMobileOpen(false)}>
                  Our Partners
                </a>

                <a href="#faq" onClick={() => setMobileOpen(false)}>
                  FAQs
                </a>
              </div>
            </details>

            <div className="pt-8">
              <button className="w-full bg-rose-500 text-white font-semibold py-3.5 rounded-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

