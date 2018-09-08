export function getStreakHighestValue(streak) {
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
