import idb from "idb";
import nanoid from "nanoid";
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
  streaks: [],
  isCreatingStreak: false
};

const getters = {
  hasStreaks(state) {
    return state.streaks.length > 0;
  }
};

const mutations = {
  addStreak(state, payload) {
    state.streaks = [payload, ...state.streaks];
  },

  setIsCreatingStreak(state, payload) {
    state.isCreatingStreak = payload;
  }
};

const actions = {
  async fetchStreaks({ commit }) {
    const db = await indexedDB;
    const tx = db.transaction("streaks", "readonly");
    const results = await tx.objectStore("streaks").getAll();

    results.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    results.forEach(result => commit("addStreak", result));
  },

  async createStreak({ commit }, payload) {
    const data = {
      id: nanoid(),
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
  getters,
  mutations,
  actions
};
