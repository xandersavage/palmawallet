"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import WorldMap from "@/components/ui/world-map";
import { motion, useInView } from "motion/react";

export function Map() {
  // 1. Create a ref to track the component's DOM element.
  const ref = useRef(null);

  // 2. Use useInView to detect when the ref is in the viewport.
  //    `once: true` ensures the effect only runs a single time.
  const isInView = useInView(ref, { once: true });

  // 3. Use state to hold the dots. It starts as an empty array.
  const [dots, setDots] = useState<
    { start: { lat: number; lng: number }; end: { lat: number; lng: number } }[]
  >([]);

  // The original dots array.
  const originalDots = useMemo(
    () => [
      {
        start: {
          lat: 64.2008,
          lng: -149.4937,
        }, // Alaska (Fairbanks)
        end: {
          lat: 34.0522,
          lng: -118.2437,
        }, // Los Angeles
      },
      {
        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      },
      {
        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
      },
      {
        start: { lat: 51.5074, lng: -0.1278 }, // London
        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
      },
      {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
      },
      {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: 9.082, lng: 8.6753 }, // Nigeria
      },
    ],
    []
  );

  // 4. Use useEffect to update the dots state when the component is in view.
  useEffect(() => {
    if (isInView) {
      setDots(originalDots);
    }
  }, [isInView, originalDots]);

  return (
    // 5. Attach the ref to the main div.
    <div ref={ref} className="py-10 md:py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        {/* <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          🚀 Launching in Africa, Expanding Globally
        </p> */}
        <h2 className="mb-4 text-black dark:text-white max-w-4xl    text-2xl leading-snug tracking-wide md:text-xl lg:text:3xl xl:text-5xl font-bold">
          Launching in Africa, Expanding
          <span className="text-emerald-500"> Globally</span>
        </h2>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          PALMA Wallet is launching first in Africa, with plans to expand to
          Latin America and beyond. Be among the first to experience the future
          of global crypto.
        </p>
      </div>
      {/* 6. Pass the stateful `dots` to the WorldMap component. */}
      {/* This will trigger the animation when the state changes. */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <WorldMap dots={dots} />
      </motion.div>
    </div>
  );
}
