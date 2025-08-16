import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-500">PALMA</h3>
            <p className="text-neutral-400">
              Unlocking limitless financial possibilities for millions of
              Africans.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/palmawalletng"
                className="text-neutral-400 transition-colors hover:text-emerald-500"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram size={20} />
              </Link>
              <Link
                href="https://x.com/Palma_Wallet"
                className="text-neutral-400 transition-colors hover:text-emerald-500"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandX size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/palma-wallet/?viewAsMember=true"
                className="text-neutral-400 transition-colors hover:text-emerald-500"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={20} />
              </Link>
              <Link
                href="https://chat.whatsapp.com/CFu57CUkjS14jTKoX2pQmj"
                className="text-neutral-400 transition-colors hover:text-emerald-500"
                aria-label="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-emerald-500">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 transition-colors hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-neutral-400 transition-colors hover:text-emerald-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-400 transition-colors hover:text-emerald-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-neutral-400 transition-colors hover:text-emerald-500"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-emerald-500">
              Contact Us
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>info@palma.com</li>
              <li>support@palma.com</li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 transition-colors hover:text-emerald-500"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-emerald-500">
              Stay in the Loop
            </h4>
            <p className="mb-4 text-neutral-400">
              Join our community and get the latest updates on our expansion and
              features.
            </p>
            <form className="flex w-full max-w-full flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 flex-1 rounded-md bg-neutral-800 px-4 py-2 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md bg-emerald-500 px-4 py-2 font-semibold text-neutral-950 transition-colors hover:bg-emerald-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} PALMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
