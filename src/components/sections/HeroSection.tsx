export const HeroSection = () => {
  return (
    <section
      id="hero-banner"
      className="relative min-h-70vh flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Voice of People"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24 pb-12 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs sm:text-sm font-medium tracking-widest uppercase rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          Voice of People Foundation
        </div>

        {/* Heading */}
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
          Shelter for the Homeless,
          <br className="hidden md:block" />
          <span className="text-white/90">
            Food for the Hungry...
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">
            A Sanctuary of Pure Love!
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-light drop-shadow-md">
          Restoring dignity through housing, livelihood support,
          healthcare, and compassionate care for the most vulnerable
          members of our society.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-rose-600 text-white font-medium text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:bg-rose-700 transition-all duration-300"
          >
            Support Our Mission

            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href="#ngo-partners"
            className="inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium text-lg py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};