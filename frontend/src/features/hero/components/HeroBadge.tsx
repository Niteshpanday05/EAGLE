interface Props {
  badge: string;
}

export default function HeroBadge({ badge }: Props) {
  return (
    <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
      {badge}
    </span>
  );
}