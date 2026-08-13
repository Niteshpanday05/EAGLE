import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Sparkles,
    title: "Quality",
    description:
      "Thoughtfully selected products with lasting value and everyday usefulness.",
  },
  {
    number: "02",
    icon: Heart,
    title: "People First",
    description:
      "Every decision starts with creating a simple and enjoyable customer experience.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Clear information, dependable service, and honest communication.",
  },
  {
    number: "04",
    icon: Users,
    title: "Community",
    description:
      "Building a store people trust, enjoy, and want to return to.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-neutral-300" />

              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
                Our Values
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
              What matters to us.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500 sm:text-right">
            Simple principles that guide how we build our products,
            experience, and relationships.
          </p>
        </div>

        {/* Values */}
        <div className="mt-10 grid border-t border-neutral-200 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className={`
                  group border-b border-neutral-200 py-7
                  sm:px-6 sm:py-8
                  lg:border-b-0 lg:px-7 lg:py-8
                  ${index !== 0 ? "lg:border-l lg:border-neutral-200" : ""}
                `}
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-neutral-300">
                    {value.number}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-neutral-300 group-hover:bg-neutral-50">
                    <Icon
                      className="h-3.5 w-3.5 text-neutral-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-base font-semibold tracking-[-0.02em] text-neutral-950">
                  {value.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  {value.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-px w-0 bg-neutral-950 transition-all duration-500 group-hover:w-8" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}