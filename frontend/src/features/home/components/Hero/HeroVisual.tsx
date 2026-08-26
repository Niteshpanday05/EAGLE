import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative ml-auto w-full max-w-xl">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-[1.75rem] p-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] sm:aspect-[16/14]">
            <Image
              src="/images/about/222.png"
              alt="Featured products from our collection"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Decorative Number */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 left-2 hidden text-[5rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025] lg:block"
        >
          01
        </div>
      </div>
    </div>
  );
}