import idb from 'idb';
import {getHighestValue, getCurrentStreak, getLongestStreak} from './streak-helpers';

const indexedDB = idb.open('streaks', 4, async upgradeDB => {
  /* eslint-disable no-fallthrough */
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore('streaks', {
        keyPath: 'id'
      });
    case 1:
      await computeStreakHighestValues(upgradeDB);
    case 2:
      await computeCurrentStreaks(upgradeDB);
    case 3:
      await computeLongestStreaks(upgradeDB);
  }
});

async function mapStreaks(upgradeDB, callback) {
  const store = upgradeDB.transaction.objectStore('streaks');
  const streaks = await store.getAll();

  const updatedStreaks = streaks.map(callback);

  await Promise.all(updatedStreaks.map(streak => store.put(streak)));
}

async function computeStreakHighestValues(upgradeDB) {
  await mapStreaks(
    upgradeDB,
    streak => streak.values
      ? {...streak, highestValue: getHighestValue(streak)}
      : streak
  );
}

async function computeCurrentStreaks(upgradeDB) {
  await mapStreaks(
    upgradeDB,
    streak => streak.values
      ? {...streak, currentStreak: getCurrentStreak(streak)}
      : streak
  );
}

async function computeLongestStreaks(upgradeDB) {
  await mapStreaks(
    upgradeDB,
    streak => streak.values
      ? {...streak, longestStreak: getLongestStreak(streak)}
      : streak
  );
}

export default indexedDB;
