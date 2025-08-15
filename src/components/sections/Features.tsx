import { cn } from "@/lib/utils";
import {
  IconBolt, // New icon for lightning fast
  IconShield, // New icon for privacy
  IconMapPin, // New icon for Africa-first
  IconLock, // Retained from the last conversation
  IconDeviceMobile,
  IconUsers,
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Self-Custody Security",
      description:
        "Your keys, your crypto. Complete control over your digital assets with military-grade security.",
      icon: <IconLock />,
    },
    {
      title: "Lightning Fast",
      description:
        "Send and receive crypto instantly across Africa with minimal fees and maximum speed.",
      icon: <IconBolt />, // Changed from IconGauge
    },
    {
      title: "Africa-First Design",
      description:
        "Built for African users, supporting local currencies and payment methods.",
      icon: <IconMapPin />, // Changed from IconGlobe
    },
    {
      title: "Mobile-First",
      description:
        "Optimized for mobile devices with offline capabilities for areas with limited connectivity.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Privacy Protected",
      description:
        "Your financial privacy is paramount. No KYC required for basic wallet functions.",
      icon: <IconShield />, // Changed from IconMasks
    },
    {
      title: "Global Community",
      description:
        "Join a growing global community of crypto enthusiasts building financial freedom together.",
      icon: <IconUsers />,
    },
  ];
  return (
    <div id="features" className="mx-auto max-w-7xl">
      <h2 className="text-center text-4xl font-bold text-gray-900 sm:text-5xl mb-4 dark:text-white">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
          Palma?
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {(index === 0 || index === 1 || index === 2) && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {(index === 3 || index === 4 || index === 5) && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10  md:text-lg">
        {description}
      </p>
    </div>
  );
};
