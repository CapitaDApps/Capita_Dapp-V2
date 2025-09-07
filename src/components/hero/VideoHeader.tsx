import Image from "next/image";
import React from "react";

export default function VideoHeader() {
  return (
    <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
      {/* <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/layout/mp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Image
        src="/layout/Headerimage.png"
        alt="Hero Background"
        className="object-fit object-buttom"
        fill
      />

      <div className="absolute inset-0 bg-black/25 z-10" />

      <div className="relative bg-custo h-full">
        <div className="flex flex-col lg:flex-row items-center z-20 absolute bottom-[15px] md:bottom-[10px] left-0 right-0 justify-center gap-2 md:gap-3">
          <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-semibold text-background leading-tight">
            Welcome to{" "}
          </h1>
          <div className="relative aspect-auto w-[200px] h-[30px] md:h-[50px] md:w-[320px] lg:w-[400px]">
            <Image src="/layout/wordmark.svg" alt="word" fill />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
    </div>
  );
}
