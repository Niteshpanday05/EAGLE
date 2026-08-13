export function formatNumber(
  value: number,
) {
  return new Intl.NumberFormat().format(
    value
  );
}

export function formatPercentage(
  value: number,
) {
  return `${value}%`;
}