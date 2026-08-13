interface Props {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}