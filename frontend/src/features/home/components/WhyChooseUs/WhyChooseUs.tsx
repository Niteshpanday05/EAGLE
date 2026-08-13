import SectionHeader from "@/components/common/SectionHeader";

import WhyChooseUsGrid from "./WhyChooseUsGrid";
import { WHY_CHOOSE_US } from "./WhyChooseUs.constants";
import { whyChooseUsData } from "./WhyChooseUs.data";

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden

        bg-[#faf9f7]

        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* Subtle Background */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_10%_20%,rgba(249,115,22,0.07),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(245,158,11,0.05),transparent_30%)]
        "
      />

      {/* Soft Decorative Glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-orange-200/20
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-amber-100/30
          blur-[140px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Main Container */}

        <div
          className="
            overflow-hidden

            rounded-[28px]
            sm:rounded-[32px]

            border
            border-neutral-200/80

            bg-white/90

            shadow-[0_20px_60px_rgba(0,0,0,0.045)]

            backdrop-blur-xl
          "
        >
          <div
            className="
              px-5
              py-10

              sm:px-8
              sm:py-12

              lg:px-12
              lg:py-14
            "
          >
            {/* Header */}

            <div
              className="
                mb-10
                sm:mb-12
                lg:mb-14
              "
            >
              <SectionHeader
                title={WHY_CHOOSE_US.title}
                subtitle={WHY_CHOOSE_US.subtitle}
                center
              />
            </div>

            {/* Cards */}

            <WhyChooseUsGrid items={whyChooseUsData} />
          </div>
        </div>
      </div>
    </section>
  );
}