const projects = [
  {
    title: "Housing the Homeless",
    subtitle: "Mane Kattsikododu",
    quote: "Turning Shacks into Safe Spaces",
    description:
      "Temporary shelters cannot withstand the harsh realities of life. We identify families and individuals living on the verges of roads or broken huts and construct concrete, safe, and permanent houses for them. We give them an address, safety, and a foundation for a better future.",
  },
  {
    title: "Livelihood Empowerment",
    subtitle: "Shop Setup & Micro-Businesses",
    quote: "Ending Dependency, Enabling Self-Reliance",
    description:
      "True empowerment means making someone capable of earning their own bread. For individuals who have the will to work but lack resources, we set up small-scale businesses and grocery/tea shops. By funding their setup costs, we ensure they never have to beg on the streets again.",
  },
  {
    title: "Healthcare & Old Age Home",
    subtitle: "Ashrama Support",
    quote: "A Sanctuary of Love for Abandoned Elders",
    description:
      "For elderly individuals suffering from chronic illnesses or abandoned by their families, our Ashram serves as a lifelong home. We provide 24/7 medical supervision, specialized geriatric care, sanitation, and nutritious meals daily, wrapped in unconditional affection.",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="what-we-do"
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our 3 Mega Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                bg-white
                rounded-2xl
                border border-gray-100
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                h-full
              "
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mt-2">
                  {project.subtitle}
                </p>

                <p className="text-lg font-medium text-gray-700 italic mt-5">
                  "{project.quote}"
                </p>

                <p className="text-gray-600 leading-7 mt-5">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;