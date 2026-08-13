import FooterBrand from "./FooterBrand";
import FooterShopLinks from "./FooterShopLinks";
import FooterCompanyLinks from "./FooterCompanyLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white sm:mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:gap-16">

          {/* Brand */}
          <FooterBrand />

          {/* Shop */}
          <FooterShopLinks />

          {/* Company */}
          <FooterCompanyLinks />

          {/* Contact */}
          <FooterContact />

        </div>

        {/* Bottom */}
        <FooterBottom />

      </div>
    </footer>
  );
}