import { ABOUT_STATS } from "../about.constants";
import AboutStatCounter from "./AboutStatCounter";

export default function AboutStats() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-[#f7f6f3]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {ABOUT_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  group relative px-6 py-7
                  transition-all duration-300
                  hover:bg-white
                  sm:px-8 sm:py-8
                  lg:px-10 lg:py-9
                  ${index % 2 !== 0 ? "border-l border-neutral-200" : ""}
                  ${index >= 2 ? "border-t border-neutral-200" : ""}
                  lg:border-t-0
                  ${index !== 0 ? "lg:border-l lg:border-neutral-200" : ""}
                `}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 transition-all duration-300 group-hover:bg-neutral-950" />
                </div>

                {/* Animated Value */}
                <AboutStatCounter value={stat.value} />

                {/* Label */}
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-400 sm:text-[10px]">
                  {stat.label}
                </p>

                {/* Hover Line */}
                <div className="mt-5 h-px w-0 bg-neutral-950 transition-all duration-500 group-hover:w-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}