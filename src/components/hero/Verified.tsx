import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function Verified() {
  const verificationFeatures = [
    "Establish trust with potential backers",
    "Increases campaign visibility",
    "Demonstrates transparency and accountability",
    "Grants access to exclusive features",
    "Attracts higher funding amounts",
  ];
  return (
    <div className="flex justify-center mb-20 ">
      <div className=" bg-verify rounded-2xl p-5 md:p-8 max-w-md w-full">
        <div className="items-start mb-6">
          <div className="flex items-center justify-center space-x-2.5 mb-2">
            <h3 className="text-2xl font-bold text-sidebar-content">
              Get Verified
            </h3>
            <Image
              src={"/layout/checkmark.svg"}
              alt="checkmark"
              width={25}
              height={25}
            />
          </div>
          <div className="flex items-baseline justify-center space-x-1">
            {/* <span className="text-2xl lg:text-3xl font-bold">$30</span>
            <span className="text-gray-400 text-sm">/annum</span> */}
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {verificationFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start text-xs md:text-sm space-x-3"
            >
              <GiCheckMark className=" flex-shrink-0 text-sidebar-content" />
              <span className="text-disabled-text">{feature}</span>
            </div>
          ))}
        </div>

        <button
          style={{
            background:
              "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
          }}
          className="w-full bg-primary text-xs text-white font-semibold py-3 rounded-full transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
