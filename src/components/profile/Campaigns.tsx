"use client";

import React from "react";
// import Avatar from "@/components/ui/Avatar";
// import TokensList from "@/components/ui/TokensList";
import Image from "next/image";

export default function Campaigns() {
  const dummy = [
    {
      id: 1,
      title: "Help build wells",
      amount: "1.5 ETH",
      img: "/campaign/c.png",
    },
    {
      id: 2,
      title: "School supplies for kids",
      amount: "0.3 ETH",
      img: "/campaign/banner.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dummy.map((d) => (
          <div key={d.id} className="bg-[#071018] rounded-md p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={d.img}
                  alt="img"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">{d.title}</div>
                <div className="text-sm text-slate-400">{d.amount}</div>
              </div>
              <div>
                <button className="text-sm rounded-md bg-gradient-to-r from-[#003DEF] to-[#001F7A] px-3 py-1 text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
