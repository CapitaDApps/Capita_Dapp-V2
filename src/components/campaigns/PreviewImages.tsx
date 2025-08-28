"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

export default function PreviewImages({
  supportImages,
}: {
  supportImages?: string[];
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="space-y-2">
        <p className="font-normal text-xs text-white">Supporting Images</p>
        <div className="flex gap-2.5 items-center">
          {supportImages?.slice(0, 2).map((img: string, i: number) => (
            <div key={i} className="relative aspect-auto w-[60px] h-[60px]">
              <Image
                onClick={() => setShow(!show)}
                src={img || ""}
                alt="avatar"
                fill
                className="rounded-[16px] w-full h-full  object-center object-cover"
              />
            </div>
          ))}
          {supportImages && (
            <>
              {supportImages?.length > 2 && (
                <div
                  onClick={() => setShow(!show)}
                  className="bg-black/50 cursor-pointer rounded-[16px] flex items-center justify-center size-[60px] text-secondary-text"
                >
                  +{supportImages?.length - 2}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={`
        ${
          show ? "visible opacity-100  " : "invisible opacity-0"
        } duration-300 transition-all
        `}
      >
        <div
          onClick={() => setShow(!show)}
          className=" fixed top-[-3%] bottom-0  inset-0 z-50 bg-black/40 backdrop-blur-sm"
        ></div>
        <div className="fixed left-[50%] top-[50%]   z-50 grid w-full place-items-center  translate-x-[-50%] translate-y-[-50%]">
          <Carousel className="w-full max-w-[280px]">
            <CarouselContent>
              {supportImages?.map((img: string, index: number) => (
                <CarouselItem
                  className="flex flex-col gap-2 items-center"
                  key={index}
                >
                  <div className="relative aspect-square size-full">
                    <Image
                      src={img || ""}
                      className="rounded-[16px]  object-center object-cover z-[900]"
                      fill
                      alt=""
                    />
                  </div>
                  <p className="text-white">
                    <span>{index + 1}</span> / {supportImages.length}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary-bg bg-white" />
            <CarouselNext className="text-primary-bg bg-white" />
          </Carousel>
          <div
            onClick={() => setShow(!show)}
            className="text-primary-bg p-2 cursor-pointer rounded-full z-[90] bg-white absolute top-[-40%] left-[88%]"
          >
            <FaXmark />
          </div>
        </div>
      </div>
    </div>
  );
}
