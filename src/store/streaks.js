import {
  addDays,
  subWeeks,
  startOfWeek,
  isSameMonth,
  isFuture,
  format
} from "date-fns";

const WEEKS_IN_YEAR = 52;
const DAYS_IN_WEEK = 7;

function getWeekDays(start) {
  let days = [start];
  for (let i = 1; i < DAYS_IN_WEEK; i++) {
    const day = addDays(start, i);
    if (!isFuture(day)) {
      days = [...days, day];
    }
  }
  return days;
}

function getWeeks(today) {
  let weeks = [];
  for (let i = 0; i < WEEKS_IN_YEAR; i++) {
    const start = startOfWeek(subWeeks(today, i));
    weeks = [[...getWeekDays(start)], ...weeks];
  }
  return weeks;
}

function getMonths(weeks) {
  return weeks.reduce((months, [weekStart], i) => {
    return !isSameMonth(weekStart, subWeeks(weekStart, 1))
      ? [...months, { label: format(weekStart, "MMM"), offset: i }]
      : months;
  }, []);
}

const today = new Date();
const weeks = getWeeks(today);
const months = getMonths(weeks);

const state = {
  weeks,
  months
};

export default {
  namespaced: true,
  state
};
