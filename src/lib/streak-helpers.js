import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import format from 'date-fns/format';

export function getHighestValue(streak) {
  const highestValue = {value: 0, date: null};
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
  return {value, startDate, endDate};
}

export function getLongestStreak(streak) {
  const values = streak.values || {};
  const dateKeys = Object.keys(values);
  let startDate = new Date(dateKeys[0]);
  let endDate = startDate;
  let longestStreak = {value: 0};
  let loopRun = false;

  const maybeUpdateLongestStreak = (startDate, endDate) => {
    const streakLength = differenceInCalendarDays(endDate, startDate) + 1;
    if (streakLength >= longestStreak.value) {
      longestStreak = {value: streakLength, startDate, endDate};
    }
  };

  for (const dateKey of dateKeys) {
    const date = new Date(dateKey);
    if (!values[dateKey]) {
      continue;
    }
    loopRun = true;

    if (differenceInCalendarDays(date, endDate) <= 1) {
      endDate = date;
    } else {
      maybeUpdateLongestStreak(startDate, endDate);
      startDate = endDate = date;
    }
  }
  if (loopRun) {
    maybeUpdateLongestStreak(startDate, endDate);
  }

  return longestStreak.value ? longestStreak : null;
}
