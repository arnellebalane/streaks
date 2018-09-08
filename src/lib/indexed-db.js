import idb from "idb";

const indexedDB = idb.open("streaks", 2, async upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore("streaks", {
        keyPath: "id"
      });
  }
});

export default indexedDB;
