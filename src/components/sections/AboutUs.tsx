import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { IconUsers, IconSparkles } from "@tabler/icons-react";

export function AboutUs() {
  const testimonials = [
    {
      quote:
        "Experienced entrepreneur and technology leader with a passion for financial innovation. Eugene brings deep expertise in blockchain technology and product development to drive PALMA's mission of democratizing financial access across Africa.",
      name: "Eugene Luzgin",
      designation: "Co-Founder & CEO",
      src: "/images/eugene.jpg",
    },
    {
      quote:
        "African fintech expert with deep understanding of local payment challenges and solutions. Alex's technical leadership and market insights are instrumental in building PALMA's Africa-first approach to cryptocurrency adoption.",
      name: "Alex ‘Zico’ Ibe",
      designation: "Cofounder & CMO",
      src: "/images/alex.png",
    },
  ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/30 py-24 dark:from-neutral-950 dark:via-neutral-900 dark:to-emerald-950/30"
      id="about-us"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-emerald-500/5 blur-2xl" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative transform transition-transform duration-300 hover:scale-110 group">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg lg:h-20 lg:w-20">
                <IconUsers className="h-8 w-8 text-white lg:h-10 lg:w-10" />
              </div>
              <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 lg:h-8 lg:w-8">
                <IconSparkles className="h-3 w-3 text-yellow-600 lg:h-4 lg:w-4" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 dark:text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8 dark:text-neutral-400">
            The visionary leaders behind Africa&apos;s most trusted crypto
            wallet, dedicated to building the future of digital finance across
            the continent.
          </p>

          {/* Accent Line */}
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
        </div>

        {/* Enhanced Testimonials Container */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 -m-8 dark:bg-neutral-800/80 dark:border-neutral-700" />

          {/* Testimonials Component */}
          <div className="relative z-10">
            <AnimatedTestimonials
              testimonials={testimonials}
              autoplay={false}
            />
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-6 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            Meet the Innovators
          </div>
        </div>
      </div>
    </div>
  );
}
