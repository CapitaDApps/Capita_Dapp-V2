"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
// import { ChevronDown, Check, MessageCircle } from "lucide-react";

const ChainFundMe = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
      question: "What is the minimum amount required to create a campaign?",
      answer:
        "The minimum amount varies depending on the campaign type and funding goals.",
    },
  ];

  const verificationFeatures = [
    "Establish trust with potential backers",
    "Increases campaign visibility",
    "Demonstrates transparency and accountability",
    "Grants access to exclusive features",
    "Attracts higher funding amounts",
  ];

  return (
    <div className="relative text-white overflow-hidden w-full min-h-screen">
      <div className="relative bg-custom">
        <header className="relative z-10 flex justify-between items-center px-6 py-4 md:py-6 mx-auto">
          <div className="flex items-center space-x-4 mt-12 md:mt-0">
            <div className="bg-blue-500 rounded-full flex items-center justify-center w-8 h-5">
              <Image
                src={"/layout/dot.svg"}
                alt="Logo"
                width={20}
                height={20}
              />
            </div>
            <span className="text-sm md:text-lg font-medium bg-clip-text">
              Create your funding campaigns now!
            </span>
          </div>
          <button className="bg-white text-black px-3  md:px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm md:text-base">
            Connect Wallet
          </button>
        </header>

        <div className="text-center mt-8 md:mt-12 py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
            Welcome to Chain
            <span className="text-secondary-purple">Fund</span>
            <span className="text-white">Me</span>
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-8 text-center">
        <p className="text-base md:text-xl text-gray-300 my-5 leading-relaxed tracking-wide">
          Create and manage funding campaigns onchain without limits,
          <br />
          restrictions and setbacks - bringing hope onchain.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 px-6 md:px-0">
        <button className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-custom px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors">
          Start a Chainfundme
        </button>

        <button className="w-full md:w-auto inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors">
          Explore Campaigns
        </button>
      </div>
      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-6 pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/layout/list2.svg"}
              alt="List illustration"
              width={400}
              height={240}
              className="w-60 md:w-96 h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/layout/list2.svg"}
              alt="List illustration"
              width={400}
              height={240}
              className="w-60 md:w-96 h-auto"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-12">
            FAQs
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl w-full">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-3 md:p-4 text-left rounded-xl"
                >
                  <span className="text-sm md:text-base lg:text-lg font-medium">
                    {faq.question}
                  </span>
                  <IoIosArrowDropdown
                    className={`transition-transform w-5 h-5 md:w-6 md:h-6 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-3 md:px-6 pb-3 md:pb-6">
                    <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}

                <hr className="hr-gradient my-6 w-full" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-6 md:mt-8 gap-2 text-gray-400 text-sm md:text-base lg:text-lg whitespace-nowrap">
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

        <div className="flex justify-center mb-20 px-4">
          <div className="border-2 border-[#0056CC] bg-[#000E29] rounded-2xl p-6 md:p-8 max-w-md w-full">
            <div className="items-start mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <h3 className="text-2xl font-bold">Get Verified</h3>
                <Image
                  src={"/layout/checkmark.svg"}
                  alt="checkmark"
                  width={35}
                  height={35}
                />
              </div>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-4xl font-bold">$30</span>
                <span className="text-gray-400">/annum</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {verificationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <GiCheckMark className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#0056CC] text-white font-semibold py-3 rounded-full transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChainFundMe;
