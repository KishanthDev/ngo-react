import { Accordion } from '../ui/Accordion';

const FAQ_DATA = [
  { question: "What does Voice Of People NGO do?", answer: "Voice Of People is India's most trusted online donation platform..." },
  { question: "How can I donate online?", answer: "You can easily donate by selecting a mission or a specific NGO, choosing your desired donation amount..." },
  { question: "Is there a minimum donation amount?", answer: "The minimum donation amount typically depends on the payment gateway requirements, but generally, you can start with as little as ₹100." },
  { question: "How do I claim tax exemption against my donation?", answer: "Upon successful donation, you will automatically receive an 80G tax exemption receipt on your registered email address..." },
  { question: "Why donate monthly?", answer: "Monthly donations provide a steady and predictable source of funding for NGOs, allowing them to plan long-term interventions..." }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 rounded-2xl shadow-sm border border-gray-100 mt-16">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        <div className="md:w-5/12 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">FAQs</h2>
          <p className="text-[16px] text-gray-600 leading-relaxed max-w-md">
            Everything you need to know about our initiatives, if you have any other questions please reach out to us at: 
            <a href="mailto:voiceofpeoplegvt@gmail.com" className="text-[#E7424B] font-semibold hover:underline ml-1">
              voiceofpeoplegvt@gmail.com
            </a>
          </p>
        </div>
        <div className="md:w-7/12">
          <Accordion items={FAQ_DATA} />
        </div>
      </div>
    </section>
  );
};