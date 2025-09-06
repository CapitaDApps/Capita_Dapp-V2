import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

export default function Faq() {
  const faqs = [
    {
      question: "Is Capita Funding Campaign secure?",
      answer:
        "Yes, our platform utilizes robust security measures to protect user data and transactions.",
    },
    {
      question: "How do I withdraw funds from my campaign?",
      answer:
        "You can withdraw funds from your campaign by following the instructions on our platform.",
    },
    {
      question: " What is the minimum amount required to create a campaign?",
      answer:
        "The minimum amount varies depending on the campaign type and funding goals",
    },
  ];

  return (
    <div className="mb-20 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl  text-sidebar-content font-bold text-center mb-6 md:mb-12">
        FAQs
      </h2>

      <Accordion
        type="single"
        className="space-y-1 lg:space-y-4 max-w-3xl mx-auto"
        collapsible
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index + 1}`}
            className="border-none"
          >
            <AccordionTrigger className="text-sm text-sidebar-content cursor-pointer md:text-base  font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-xs md:text-sm  text-disabled-text leading-relaxed">
              {faq.answer}
            </AccordionContent>
            <div className="h-[1px] w-full bg-[#003def]/30" />
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex items-center justify-center mt-6 md:mt-8 gap-2 text-gray-400 text-sm md:text-base  whitespace-nowrap">
        <Link
          href="https://t.me/CapitatokenHQ"
          target="_blank"
          rel="noreferrer"
          className="block text-blue-400 hover:text-blue-300 underline overflow-hidden truncate max-w-[55vw] md:max-w-[40vw]"
        >
          Contact Telegram Support
        </Link>
        <span>for more information</span>
      </div>
    </div>
  );
}
