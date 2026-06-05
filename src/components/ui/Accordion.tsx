'use client';

import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-colors duration-300 hover:border-gray-300 bg-white">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 focus:outline-none"
            >
              <span className={`text-[16px] sm:text-[17px] font-semibold pr-4 transition-colors ${isOpen ? 'text-[#E7424B]' : 'text-gray-800'}`}>
                {item.question}
              </span>
              <span className="text-gray-400 shrink-0">
                <svg className={`w-6 h-6 fill-current ${isOpen ? 'hidden' : 'block'}`} viewBox="0 0 24 24">
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                </svg>
                <svg className={`w-6 h-6 fill-current ${isOpen ? 'block' : 'hidden'}`} viewBox="0 0 24 24">
                  <path d="M7 11h10v2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};