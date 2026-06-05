import { Navbar } from '../components/layout/Navbar';
import { BlogSection } from '../components/sections/BlogSection';
import { FAQSection } from '../components/sections/FAQSection';
import { MissionCard } from '../components/ui/MissionCard';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { ImpactSection } from '../components/sections/ImpactSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen pt-[86px]">
      <Navbar />

      <HeroSection />

      {/* Monthly Missions Grid */}
      <section id="monthly-missions" className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Give Monthly</h2>
          <p className="text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create sustained impact. Support verified projects. Get regular updates. Save tax. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MissionCard
            title="Protect Abandoned Elders"
            image="https://cfstatic.give.do/5d693490-2265-424a-aa10-bbd3fc06b771.webp"
            raisedAmt="₹29,23,779"
            goalAmt="₹30L"
            percentage={49}
            donations={1900}
          />
          <MissionCard
            title="Empower Disabled Lives"
            image="https://cfstatic.give.do/e0ef4921-2747-477c-9561-2247f26ee428.webp"
            raisedAmt="₹4,58,096"
            goalAmt="₹45L"
            percentage={9}
            donations={230}
            isNew={true}
          />
          <MissionCard
            title="Every Girl in School"
            image="https://cfstatic.give.do/dd034353-70ec-4ec8-8586-78dfbc700f24.webp"
            raisedAmt="₹17,40,439"
            goalAmt="₹1C"
            percentage={10}
            donations={976}
          />
        </div>
      </section>

      <ImpactSection />

      {/* Dynamic Grabbing Blocks */}
      <BlogSection />
      <ContactSection />
      <FAQSection />

      <Footer />
    </main>
  );
}