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
        gap-4
        ${center ? "items-center text-center" : "items-start"}
      `}
    >
      <div className={center ? "max-w-2xl" : ""}>
        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
            text-neutral-900
            sm:text-4xl
          "
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="
              mt-3
              text-base
              leading-7
              text-neutral-600
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