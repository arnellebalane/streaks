import { subDays, startOfWeek, endOfWeek, isSameMonth, format } from "date-fns";

const WEEKS_IN_YEAR = 52;
const DAYS_IN_WEEK = 7;

function getWeeks(today) {
  let weeks = [];
  for (let i = 0; i < WEEKS_IN_YEAR; i++) {
    const start = startOfWeek(subDays(today, i * DAYS_IN_WEEK));
    const end = endOfWeek(subDays(today, i * DAYS_IN_WEEK));
    weeks = [[start, end], ...weeks];
  }
  return weeks;
}

function getMonths(weeks) {
  return weeks.reduce((months, week, i) => {
    if (!isSameMonth(week[0], subDays(week[0], DAYS_IN_WEEK))) {
      return [...months, [format(week[0], "MMM"), i]];
    }
    return months;
  }, []);
}

const today = new Date();
const weeks = getWeeks(today);
const months = getMonths(weeks);
console.log(weeks);
console.log(months);

const state = {};

export default {
  namespaced: true,
  state
};
