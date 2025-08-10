"use client";

import { memo } from "react";
import Image from "next/image";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";

const headingWords = "Unlock Your Financial Freedom with Palma Wallet.".split(
  " "
);

// Background gradient lines - static & memoized
function BackgroundLinesComponent() {
  return (
    <>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>
    </>
  );
}

const BackgroundLines = memo(BackgroundLinesComponent);

export function Hero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <BackgroundLines />

      <div className="px-4 py-10 md:py-20">
        {/* HEADING */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl">
          {headingWords.map((word, index) => (
            <span
              key={index}
              className="mr-2 inline-block bg-gradient-to-r from-slate-800 to-emerald-500 bg-clip-text text-transparent dark:from-slate-200 dark:to-emerald-400"
            >
              {word}
            </span>
          ))}
        </h1>

        {/* SUBHEADING */}
        <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-medium text-slate-700 dark:text-neutral-300">
          Your money, your rules. Palma Wallet is the secure, non-custodial way
          for Nigerians to manage their wealth and build their financial future.
        </p>

        {/* BUTTONS */}
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="flex w-60 transform items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600">
            <IconBrandApple /> Get it on App Store
          </button>
          <button className="flex w-60 transform items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            <IconBrandGooglePlay /> Get it on Google Play
          </button>
        </div>

        {/* PREVIEW IMAGE */}
        <div className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Crypto wallet UI preview"
              width={1000}
              height={562}
              className="aspect-[16/9] h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
