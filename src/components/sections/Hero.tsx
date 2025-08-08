"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Cover } from "../ui/cover";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <Cover>PALMA Wallet 🌴 </Cover> <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Speed Meets{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  Security
                </span>
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/test-1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
