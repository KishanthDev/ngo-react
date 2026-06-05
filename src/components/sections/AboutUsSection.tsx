export const AboutSection = () => {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                The Visionary
                <br />
                Pillars.
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Philosophy */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-sm font-mono font-bold text-gray-400">
                    01
                  </span>

                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Philosophy
                  </h3>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed">
                  True social work goes beyond giving a single meal—it is about
                  restoring a person’s right to live with honor. Our foundation
                  operates on a 360-degree rehabilitation model. We identify the
                  most vulnerable individuals on the streets, understand their
                  deepest crisis, and provide them with a complete ecosystem of
                  survival: a roof over their head, a source of income, and a
                  family to lean on.
                </p>
              </div>

              {/* Journey */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-sm font-mono font-bold text-gray-400">
                    02
                  </span>

                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Journey
                  </h3>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed">
                  What began as a heartfelt mission to document and help the
                  invisible souls on the street has now grown into a massive
                  humanitarian movement backed by lakhs of well-wishers. We
                  bridge the gap between social neglect and human dignity,
                  proving that with collective action, we can wipe out
                  homelessness and despair.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;