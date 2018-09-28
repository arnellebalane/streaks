import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import format from 'date-fns/format';

export function getHighestValue(streak) {
  const highestValue = { value: 0, date: null };
  for (const date in streak.values) {
    const value = streak.values[date];
    if (value >= highestValue.value) {
      highestValue.value = value;
      highestValue.date = new Date(date);
    }
  }
  return highestValue.value ? highestValue : null;
}

export function getCurrentStreak(streak) {
  const values = streak.values || {};
  let date = new Date();
  let dateKey = format(date, 'YYYY-MM-DD');
  if (!values[dateKey]) {
    date = subDays(date, 1);
    dateKey = format(date, 'YYYY-MM-DD');
  }
  if (!values[dateKey]) {
    return null;
  }

  const endDate = date;
  date = subDays(date, 1);
  dateKey = format(date, 'YYYY-MM-DD');
  while (values[dateKey]) {
    date = subDays(date, 1);
    dateKey = format(date, 'YYYY-MM-DD');
  }
  const startDate = addDays(date, 1);
  const value = differenceInCalendarDays(endDate, startDate) + 1;
  return { value, startDate, endDate };
}
