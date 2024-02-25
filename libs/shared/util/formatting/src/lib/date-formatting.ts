import { assertNever } from '@nx-monorepo/shared-util-typescript';

/**
 * Represents a date format.
 * @typedef {string} DateFormat
 * @description The format can be one of the following predefined values:
 *  - 'short': '6/15/15, 9:03 AM'
 *  - 'medium': 'Jun 15, 2015, 9:03:01 AM'
 *  - 'long': 'June 15, 2015 at 9:03:01 AM GMT+1'
 *  - 'full': 'Monday, June 15, 2015 at 9:03:01 AM GMT+01:00'
 *  - 'shortDate': '6/15/15'
 *  - 'mediumDate': 'Jun 15, 2015'
 *  - 'longDate': 'June 15, 2015'
 *  - 'fullDate': 'Monday, June 15, 2015'
 *  - 'shortTime': '9:03 AM'
 *  - 'mediumTime': '9:03:01 AM'
 *  - 'longTime': '9:03:01 AM GMT+1'
 *  - 'fullTime': '9:03:01 AM GMT+01:00'
 */
export type DateFormat =
  | 'short'
  | 'medium'
  | 'long'
  | 'full'
  | 'shortDate'
  | 'mediumDate'
  | 'longDate'
  | 'fullDate'
  | 'shortTime'
  | 'mediumTime'
  | 'longTime'
  | 'fullTime';

/**
 * Formats a date into a string based on the given format, locale, and timezone.
 *
 * @param {string | Date | number} date - The date to format. It can be a string, Date object, or number representing the date.
 * @param {DateFormat} [format='shortDate'] - The format to use for the date.
 * @param {string} [locale='en-US'] - The locale to use for formatting the date.
 * @param {string} [timezone] - The timezone to use for formatting the date.
 * @returns {string} The formatted date string.
 */
export function formatDate(
  date: string | Date | number,
  format: DateFormat = 'shortDate',
  locale = 'en-US',
  timezone?: string
): string {
  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.dateStyle = 'short';
      options.timeStyle = 'short';
      break;
    case 'medium':
      options.dateStyle = 'medium';
      options.timeStyle = 'medium';
      break;
    case 'long':
      options.dateStyle = 'long';
      options.timeStyle = 'long';
      break;
    case 'full':
      options.dateStyle = 'full';
      options.timeStyle = 'full';
      break;
    case 'shortDate':
      options.dateStyle = 'short';
      break;
    case 'mediumDate':
      options.dateStyle = 'medium';
      break;
    case 'longDate':
      options.dateStyle = 'long';
      break;
    case 'fullDate':
      options.dateStyle = 'full';
      break;
    case 'shortTime':
      options.timeStyle = 'short';
      break;
    case 'mediumTime':
      options.timeStyle = 'medium';
      break;
    case 'longTime':
      options.timeStyle = 'long';
      break;
    case 'fullTime':
      options.timeStyle = 'full';
      break;
    default:
      assertNever(format);
  }

  return new Intl.DateTimeFormat(locale, {
    ...options,
    timeZone: timezone,
  }).format(dateObject);
}
