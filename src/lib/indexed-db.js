import idb from "idb";

const indexedDB = idb.open("streaks", 2, async upgradeDB => {
  /* eslint-disable no-fallthrough */
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore("streaks", {
        keyPath: "id"
      });
    case 1:
      await computeStreakHighestValues(upgradeDB);
  }
});

async function computeStreakHighestValues(upgradeDB) {
  const store = upgradeDB.transaction.objectStore("streaks");
  const streaks = await store.getAll();

  const updatedStreaks = streaks.map(streak => {
    if (!streak.values) {
      return streak;
    }

    const highestValue = { value: 0, date: null };
    for (const date in streak.values) {
      const value = streak.values[date];
      if (value >= highestValue.value) {
        highestValue.value = value;
        highestValue.date = new Date(date);
      }
    }
    return { ...streak, highestValue };
  });

  await Promise.all(updatedStreaks.map(streak => store.put(streak)));
}

export default indexedDB;
