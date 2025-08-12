"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";

export function DownloadCTA() {
  return (
    <BackgroundBeamsWithCollision className="relative py-20">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-4">
        {/* Card */}
        <div className="relative z-0 flex flex-col items-center justify-center rounded-3xl border border-white/30 bg-white/70 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-black/60 md:p-16 p-8">
          {/* Decorative gradient glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-purple-500/20 blur-2xl" />

          {/* Heading */}
          <h2 className="relative z-10 text-center text-3xl font-extrabold text-slate-800 dark:text-white md:text-5xl lg:text-6xl">
            Get Started with <span className="text-emerald-500">Palma</span>{" "}
            Wallet Today
          </h2>

          {/* Subheading */}
          <p className="relative z-10 mt-4 max-w-xl text-center text-base font-normal text-neutral-600 dark:text-neutral-400 md:text-lg">
            Download the app to take control of your finances and unlock true
            financial freedom.
          </p>

          {/* Buttons */}
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="flex w-60 transform items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600">
              <IconBrandApple size={22} /> Get it on App Store
            </button>
            <button className="flex w-60 transform items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black shadow-lg shadow-gray-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              <IconBrandGooglePlay size={22} /> Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
