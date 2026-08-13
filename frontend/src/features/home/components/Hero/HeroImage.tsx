import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      {/* Decorative background */}
      <div
        className="
          absolute
          -top-12
          -right-12
          h-72
          w-72
          rounded-full
          bg-gradient-to-br
          from-blue-100
          to-purple-100
          blur-3xl
          opacity-60
          -z-10
        "
      />

      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-3xl
          shadow-2xl
        "
      >
        <Image
          src="/images/hero/watch1.avif"
          alt="Premium shopping experience"
          fill
          priority
          quality={90}
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 80vw,
            600px
          "
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

    </div>
  );
}