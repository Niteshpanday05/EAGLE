import PromoBannerContent from "./PromoBannerContent";
import PromoBannerActions from "./PromoBannerActions";
import PromoBannerImage from "./PromoBannerImage";

export default function PromoBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        lg:py-32
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-neutral-900
        "
      />

      {/* Decorative Glow */}

      <div
        className="
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-40
          -bottom-40
          h-96
          w-96
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-6
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              px-6
              py-12
              sm:px-10
              lg:grid-cols-2
              lg:px-16
              lg:py-20
            "
          >
            {/* Left */}

            <div
              className="
                order-2
                text-center
                lg:order-1
                lg:text-left
              "
            >
              <PromoBannerContent />

              <div className="mt-8">
                <PromoBannerActions />
              </div>
            </div>

            {/* Right */}

            <div
              className="
                order-1
                flex
                justify-center
                lg:order-2
                lg:justify-end
              "
            >
              <PromoBannerImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}