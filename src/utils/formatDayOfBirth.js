export default function formatDayOfBirth(date) {
  const [y, m, d] = date.split("-");

  return `${d.padStart(2, "0")}/${m.padStart(2, "0")}/${y.padStart(2, "0")}`;
}
