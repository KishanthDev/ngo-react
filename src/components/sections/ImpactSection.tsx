export const ImpactSection = () => {
  return (
    <section id="impact" className="w-full bg-white border-y border-gray-100 py-16 lg:py-24">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Main Heading & Stats */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-block">
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide leading-none">
                  Voice Of People
                </h1>
              </div>
            </div>

            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] font-bold text-[#222] mb-12 tracking-tight">
              India’s most trusted online <br className="hidden sm:block" /> donation platform
            </h2>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="text-4xl mb-3">🏠</div>
                <div className="text-3xl font-extrabold text-gray-800">150+</div>
                <p className="text-base font-semibold text-gray-600 mt-1">Permanent Homes Built</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="text-4xl mb-3">🏪</div>
                <div className="text-3xl font-extrabold text-gray-800">50+</div>
                <p className="text-base font-semibold text-gray-600 mt-1">Livelihoods Created</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="text-4xl mb-3">👴</div>
                <div className="text-3xl font-extrabold text-gray-800">300+</div>
                <p className="text-base font-semibold text-gray-600 mt-1">Elders Rehabilitated</p>
              </div>
            </div>
          </div>

          {/* Right Side: Impact Card */}
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-2/5 max-w-md mx-auto lg:mx-0">
            <div className="bg-[#faf9f9] border border-gray-100 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
              <div className="overflow-hidden rounded-2xl mb-6 w-full">
                <img src="/assets/oldagehome.jpeg" alt="Voice Of People Impact" className="w-full h-[280px] object-cover" />
              </div>
              <p className="text-[22px] sm:text-[24px] font-bold text-[#222] leading-tight mb-2">
                Witness the positive change we’ve made!
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Read about the impact that we have created over the past years
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};