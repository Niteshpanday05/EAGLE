import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          absolute
          -top-12
          -right-12
          -z-10
          h-72
          w-72
          rounded-full
          bg-gradient-to-br
          from-blue-100
          to-purple-100
          opacity-60
          blur-3xl
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
          src="/images/hero/lap.jpg"
          alt="Premium watch"
          fill
          preload
          quality={75}
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 80vw,
            576px
          "
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}