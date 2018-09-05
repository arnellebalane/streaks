import { subDays, startOfWeek, endOfWeek } from "date-fns";

const WEEKS_IN_YEAR = 52;
const DAYS_IN_WEEK = 7;

function getWeekRanges(today) {
  let weeks = [];
  for (let i = 0; i < WEEKS_IN_YEAR; i++) {
    const start = startOfWeek(subDays(today, i * DAYS_IN_WEEK));
    const end = endOfWeek(subDays(today, i * DAYS_IN_WEEK));
    weeks = [[start, end], ...weeks];
  }
  return weeks;
}

const today = new Date();
const weeks = getWeekRanges(today);
console.log(weeks);

const state = {};

export default {
  namespaced: true,
  state
};
