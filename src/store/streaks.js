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

const mutations = {
  addStreak(state, payload) {
    state.streaks = [payload, ...state.streaks];
  }
};

const actions = {
  async fetchStreaks({ commit }) {
    const db = await indexedDB;
    const tx = db.transaction("streaks", "readonly");
    const results = await tx.objectStore("streaks").getAll();

    results.forEach(result => commit("addStreak", result));
  },

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

    commit("addStreak", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
