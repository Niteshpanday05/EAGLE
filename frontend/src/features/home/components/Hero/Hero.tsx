import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import AboutStatCounter from "@/features/about/components/AboutStatCounter";

export default function Hero() {
  return (
     <section className="relative min-h-[300px] overflow-hidden">

      {/* Hero Background Image */}
      <Image
        src="/images/hero/watch.jpg"
        alt="Hero banner"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />


      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />


      {/* Content */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-16
          py-16
        "
      >

        <div
          className="
            max-w-xl
            space-y-8
            text-white
          "
        >

          <HeroContent />

          <HeroStats stats={AboutStatCounter} />

        </div>

      </div>

    </section>
  );
}