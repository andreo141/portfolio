export function calculateYearsSinceStarted(startDateMs) {
  const msInAYear = 1000 * 60 * 60 * 24 * 365.25; // Accounting for leap years
  return Math.floor((Date.now() - startDateMs) / msInAYear);
}
