import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-500">PALMA</h3>
            <p className="text-neutral-400">
              Unlocking limitless financial possibilities for millions of
              Africans.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-neutral-400 hover:text-emerald-500 transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-emerald-500 transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-emerald-500 transition-colors"
                aria-label="X"
              >
                <IconBrandX size={20} />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-emerald-500 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-500">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-500">
              Contact Us
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>info@palma.com</li>
              <li>support@palma.com</li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-500">
              Stay in the Loop
            </h4>
            <p className="text-neutral-400 mb-4">
              Join our community and get the latest updates on our expansion and
              features.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-full">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-500 text-neutral-950 rounded-md hover:bg-emerald-400 transition-colors font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} PALMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
