import idb from "idb";
import shortid from "shortid";
import { getWeeks, getMonths } from "@/lib/graph-utils";

const today = new Date();
const weeks = getWeeks(today);
const months = getMonths(weeks);

const indexedDB = idb.open("streaks", 1, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore("streaks", {
        keyPath: "id"
      });
  }
});

const state = {
  weeks,
  months,
  streaks: []
};

const actions = {
  async createStreak({ commit }, payload) {
    const data = {
      id: shortid.generate(),
      createdAt: new Date(),
      createdAtTz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ...payload
    };

    const db = await indexedDB;
    const tx = db.transaction("streaks", "readwrite");
    tx.objectStore("streaks").put(data);
    await tx.complete;
  }
};

export default {
  namespaced: true,
  state,
  actions
};
