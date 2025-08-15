"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 dark:text-white">
        What Our Users Are{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
          Saying
        </span>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Moving my finances to Palma Wallet was the best decision I've made. The security gives me peace of mind, and the app is so intuitive.",
    name: "Aisha M.",
    title: "Satisfied User",
  },
  {
    quote:
      "I was looking for a wallet that was sleek, functional, and secure. Palma Wallet delivered on all fronts. It’s exactly what I needed for my daily transactions.",
    name: "Anup S.",
    title: "Minimalist Enthusiast",
  },
  {
    quote:
      "Palma Wallet is simply awesome. It's so easy to use, and I love having full control over my money without any fuss.",
    name: "Mohamed Y.",
    title: "Everyday User",
  },
  {
    quote:
      "I had been searching for a premium, minimal wallet for a long time. Palma Wallet is as exceptional as it promises—excellent design and fits all my needs without any fuss.",
    name: "Rohan A.",
    title: "Financial Freedom Advocate",
  },
  {
    quote:
      "The design is elegant and the quality is exceptional. Palma Wallet has simplified my financial life in a way I didn't think was possible.",
    name: "Arwa K.",
    title: "Design Connoisseur",
  },
];
