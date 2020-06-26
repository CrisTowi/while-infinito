const MONTHS = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatEntryDate = (date) => {
  return `${MONTHS[date.getMonth()]} ${date.getDate()} - ${date.getFullYear()}`
};
