export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  return `${new Array(cups || 1).join('')} ${minutes} min`
}
