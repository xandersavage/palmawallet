"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

// The PhoneMockup component wraps a child element
export const PhoneMockup = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    // Outer div for the phone body, with dark mode colors and a subtle emerald highlight.
    <div
      ref={ref}
      className={cn(
        "relative mx-auto h-[580px] w-[280px] rounded-[48px] border-[10px] border-neutral-200 bg-neutral-900 shadow-xl transition-colors duration-300 dark:border-neutral-800",
        // Glowing emerald border effect on hover.
        "hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/30",
        className
      )}
      {...props}
    >
      {/* Inner div for the screen, with a curved border */}
      <div className="relative h-full w-full overflow-hidden rounded-[38px] border-[2px] border-black/80 dark:border-white/10">
        {children}
      </div>

      {/* Camera cutout at the top of the phone screen */}
      <div className="absolute left-1/2 top-4 h-5 w-20 -translate-x-1/2 rounded-full bg-black dark:bg-black/80" />
    </div>
  );
});

PhoneMockup.displayName = "PhoneMockup";
