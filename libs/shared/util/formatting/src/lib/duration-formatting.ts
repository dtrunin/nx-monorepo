/**
 * Formats the duration in minutes to a string representation of hours and minutes.
 *
 * @param {number} minutes - The total duration in minutes.
 * @returns {string} The formatted duration in the format "HH:MM".
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString =
    remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;

  return `${hoursString}:${minutesString}`;
}
