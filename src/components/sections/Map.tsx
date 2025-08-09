"use client";
import { useMemo } from "react";
import WorldMap from "@/components/ui/world-map";
import { PointerHighlight } from "../ui/pointer-highlight";

export function Map() {
  // The original dots array.
  const dots = useMemo(
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

  return (
    // 5. Attach the ref to the main div.
    <div className="py-10 md:py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-black dark:text-white max-w-4xl    text-2xl leading-snug tracking-wide md:text-xl lg:text:3xl xl:text-5xl font-bold">
          Launching in Africa, Expanding
          <PointerHighlight
            rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1"
          >
            <span className="relative z-10 text-emerald-500"> Globally</span>
          </PointerHighlight>
        </h2>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl py-4">
          PALMA Wallet is launching first in Africa, with plans to expand to
          Latin America and beyond. Be among the first to experience the future
          of global crypto.
        </p>
      </div>
      <WorldMap dots={dots} />
    </div>
  );
}
