import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Secure storage illustration"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Financial empowerment illustration"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
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
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Hero section example"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="Features section example"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
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
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Creative layout example"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="Card layout example"
              className="rounded-lg object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300 md:h-60"
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
