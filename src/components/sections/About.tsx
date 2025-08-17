import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import Image from "next/image"; // Import the Next.js Image component

export function AboutTimeline() {
  const data = [
    {
      title: "🌱 Deep Roots, Strong Foundation",
      content: (
        <div>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
            Like the palm tree, financial independence begins with strong roots.
            Palma Wallet is built on the principles of self-custody, security,
            and trust — empowering Africans to own and protect their wealth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/palma-2.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
            <img
              src="/images/palma-3.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "💪 Built to Withstand Any Storm",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
            Palm trees bend but never break. In the same way, Palma Wallet is
            designed to adapt to market shifts while keeping your assets secure.
          </p>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
            Our platform is resilient, forward-looking, and ready to evolve with
            the African Web3 landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/palma-4.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
            <img
              src="/images/palma-5.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "🚀 Sky-High Potential",
      content: (
        <div>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
            Like the palm tree reaching for the sky, Palma Wallet aims to unlock
            limitless opportunities — connecting Africans to the global economy
            through secure, borderless finance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/palma-6.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
            <img
              src="/images/palma-7.png"
              alt="Palma Wallet UI screen"
              width={300}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 h-60 md:h-80 lg:h-96"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
