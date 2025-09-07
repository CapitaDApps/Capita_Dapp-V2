import Image from "next/image";
import React from "react";

export default function VideoHeader() {
  return (
    <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
      <Image
        src="/layout/Headerimage.png"
        alt="Hero Background"
        className="object-bottom object-cover"
        fill
      />

      <div className="relative bg-custo h-full">
        <div className="flex flex-col lg:flex-row items-center z-20 absolute bottom-[15px] md:bottom-[10px] left-0 right-0 justify-center gap-2 md:gap-3">
          <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-semibold text-background leading-tight">
            Welcome to{" "}
          </h1>
          <div className="relative aspect-auto w-[200px] h-[30px] md:h-[50px] md:w-[320px] lg:w-[400px]">
            <Image
              src="/layout/wordmark.svg"
              alt="word"
              fill
              className="object-center"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/10 z-[1]" />
    </div>
  );
}
