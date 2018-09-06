import { subWeeks, startOfWeek, endOfWeek, isSameMonth, format } from "date-fns";

const WEEKS_IN_YEAR = 52;

function getWeeks(today) {
  let weeks = [];
  for (let i = 0; i < WEEKS_IN_YEAR; i++) {
    const start = startOfWeek(subWeeks(today, i));
    const end = endOfWeek(subWeeks(today, i));
    weeks = [[start, end], ...weeks];
  }
  return weeks;
}

function getMonths(weeks) {
  return weeks.reduce((months, week, i) => {
    if (!isSameMonth(week[0], subWeeks(week[0], 1))) {
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
