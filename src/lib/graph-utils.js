import addDays from "date-fns/add_days";
import subWeeks from "date-fns/sub_weeks";
import startOfWeek from "date-fns/start_of_week";
import isSameMonth from "date-fns/is_same_month";
import isFuture from "date-fns/is_future";
import format from "date-fns/format";

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

export function getWeeks(today) {
  let weeks = [];
  for (let i = 0; i < WEEKS_IN_YEAR; i++) {
    const start = startOfWeek(subWeeks(today, i));
    weeks = [[...getWeekDays(start)], ...weeks];
  }
  return weeks;
}

export function getMonths(weeks) {
  return weeks.reduce((months, [weekStart], i) => {
    return !isSameMonth(weekStart, subWeeks(weekStart, 1)) &&
      i < WEEKS_IN_YEAR - 1
      ? [...months, { label: format(weekStart, "MMM"), offset: i }]
      : months;
  }, []);
}
