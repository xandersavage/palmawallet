"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "About Us",
      link: "#about-us",
    },
    {
      name: "Features",
      link: "#features",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="dark"
              className="bg-emerald-500"
              href="https://apps.apple.com/us/app/palma-wallet/id6747275024"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get on IOS
            </NavbarButton>
            <NavbarButton
              variant="primary"
              href="https://play.google.com/store/apps/details?id=com.palmwallet&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get on Android
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="dark"
                className="w-full bg-emerald-500"
                href="https://apps.apple.com/us/app/palma-wallet/id6747275024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get on IOS
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="https://play.google.com/store/apps/details?id=com.palmwallet&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get on Android
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
