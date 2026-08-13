interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  center?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  action,
  center = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`
        flex
        flex-col
        gap-5
        ${center ? "items-center text-center" : "items-start"}
      `}
    >
      <div
        className={`
          ${center ? "max-w-3xl" : "max-w-2xl"}
          section-header-reveal
        `}
      >
        {/* Eyebrow */}
        <div
          className={`
            mb-3
            flex
            items-center
            gap-3
            ${center ? "justify-center" : "justify-start"}
          `}
        >
          <span className="h-px w-7 bg-primary/50" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
              sm:text-xs
            "
          >
            Discover
          </span>

          <span className="h-px w-7 bg-primary/50" />
        </div>

        {/* Heading */}
        <h2
          className="mt-1 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
          {title}
          
        </h2>

        {/* Accent */}
        <div
          className={`
            mt-1
            h-1
            w-10
            rounded-full
            bg-primary
            ${center ? "mx-auto" : ""}
          `}
        />

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              mt-1
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}