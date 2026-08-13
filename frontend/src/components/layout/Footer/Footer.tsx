import Link from "next/link";
import {
//   Facebook,
//   Instagram,
//   Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              Sajilo Order
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Shop your favorite products with ease. Fast delivery,
              secure payments, and quality products all in one place.
            </p>

            {/* <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-white p-2 shadow-sm transition hover:bg-orange-500 hover:text-white"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-white p-2 shadow-sm transition hover:bg-orange-500 hover:text-white"
              >
                <Instagram size={18} />
              </Link>

              {/* <Link
                href="#"
                className="rounded-full bg-white p-2 shadow-sm transition hover:bg-orange-500 hover:text-white"
              >
                <Twitter size={18} />
              </Link> */}
            {/* </div> */}
          </div> 

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/products" className="hover:text-orange-500">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="/categories" className="hover:text-orange-500">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/offers" className="hover:text-orange-500">
                  Offers
                </Link>
              </li>

              <li>
                <Link href="/cart" className="hover:text-orange-500">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+977 98XXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>support@sajiloorder.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sajilo Order. All rights reserved.
        </div>
      </div>
    </footer>
  );
}