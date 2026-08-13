import Image from "next/image";

export default function PromoBannerImage() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          h-80
          w-80
          rounded-full
          bg-blue-500/20
          blur-[100px]
        "
      />

      <img
        src="/images/hero/laptop.jpeg"
        alt="Promo Banner"
        width={520}
        height={520}
        
        className="
          relative
          z-10
          h-auto
          w-full
          max-w-md
          object-contain
          transition-transform
          duration-700
          hover:scale-105
        "
      />
    </div>
  );
}