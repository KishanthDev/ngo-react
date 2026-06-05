const NGO_PARTNERS = [
  {
    name: "Saint Hardyal Educational and Orphans Welfare Society",
    logo: "https://cfstatic.give.do/066c13ff-9391-4175-b22e-93d6a6b0121e.jpg",
  },
  {
    name: "Sharanalayam",
    logo: "https://cfstatic.give.do/a8185fad-f8cb-408c-b741-4e769db0bf3c.png",
  },
  {
    name: "The Akshaya Patra Foundation",
    logo: "https://cfstatic.give.do/f5e6e43e-36e0-4a9b-aff7-aabdfda2b29e.png",
  },
  {
    name: "Satya Special School",
    logo: "https://cfstatic.give.do/c6bd5ee4-223b-4d90-81c0-176981309b74.png",
  },
  {
    name: "Jeevan Aanand Sanstha",
    logo: "https://cfstatic.give.do/98a6bc26-4246-4c53-96ec-39e6d772603d.png",
  },
  {
    name: "Udayan Care",
    logo: "https://cfstatic.give.do/617e1e69-72aa-4cc7-9799-05a3948aa2e2.jpg",
  },
  {
    name: "Bhumi",
    logo: "https://cfstatic.give.do/3775b557-fcc0-4b35-8d72-531efb281f15.jpg",
  },
  {
    name: "Cuddles Foundation",
    logo: "https://cfstatic.give.do/3400e187-5eba-4728-8abc-cb93be955633.jpg",
  },
  {
    name: "VOICE OF SLUM",
    logo: "https://cfstatic.give.do/d87b5e98-c19a-48d5-9a50-4084a81793aa.png",
  },
];

export const NGOSection = () => {
  return (
    <section
      id="ngo-partners"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Trusted NGO Partners
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We have been raising funds for credible nonprofits for 20+ years
          </p>
        </div>

        {/* Logo Slider */}
        <div
          className="
            flex
            gap-8
            overflow-x-auto
            no-scrollbar
            snap-x
            snap-mandatory
            pb-4
            px-1
          "
        >
          {NGO_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="
                snap-start
                shrink-0
                w-[160px]
                sm:w-[180px]
                md:w-[220px]
                flex
                flex-col
                items-center
                text-center
              "
            >
              <div
                className="
                  h-[100px]
                  sm:h-[120px]
                  w-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  draggable={false}
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              <p className="mt-4 text-sm font-medium text-gray-700 leading-snug">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};