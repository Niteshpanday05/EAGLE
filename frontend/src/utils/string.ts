export function capitalize(
  value: string,
) {
  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
}

export function truncate(
  value: string,
  length = 50,
) {
  if (value.length <= length) {
    return value;
  }

  return value.substring(0, length) + "...";
}