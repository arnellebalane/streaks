import idb from "idb";
import { getHighestValue } from "./streak-helpers";

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
    return streak.values
      ? { ...streak, highestValue: getHighestValue(streak) }
      : streak;
  });

  await Promise.all(updatedStreaks.map(streak => store.put(streak)));
}

export default indexedDB;
