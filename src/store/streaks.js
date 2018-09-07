import idb from "idb";
import nanoid from "nanoid";
import format from "date-fns/format";
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
  addStreak(state, streak) {
    state.streaks = [streak, ...state.streaks];
  },

  updateStreak(state, { streakKey, streakData }) {
    state.streaks = state.streaks.map(streak => {
      if (streak.id === streakKey) {
        return { ...streak, ...streakData };
      }
      return streak;
    });
  },

  setIsCreatingStreak(state, isCreatingStreak) {
    state.isCreatingStreak = isCreatingStreak;
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

  async editStreak({ commit }, { streakKey, streakData }) {
    const db = await indexedDB;
    const tx = db.transaction("streaks", "readwrite");
    const streak = await tx.objectStore("streaks").get(streakKey);

    const updatedStreak = { ...streak, ...streakData };
    await tx.objectStore("streaks").put(updatedStreak);

    commit("updateStreak", { streakKey, streakData: updatedStreak });
  },

  async createStreak({ commit }, streakData) {
    const data = {
      id: nanoid(),
      createdAt: new Date(),
      createdAtTz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ...streakData
    };

    const db = await indexedDB;
    const tx = db.transaction("streaks", "readwrite");
    await tx.objectStore("streaks").put(data);

    commit("addStreak", data);
  },

  async updateStreakValue({ commit }, { streakKey, delta }) {
    const db = await indexedDB;
    const tx = db.transaction("streaks", "readwrite");
    const streak = await tx.objectStore("streaks").get(streakKey);

    const today = format(new Date(), "YYYY-MM-DD");
    streak.values = streak.values || {};
    streak.values[today] = streak.values[today] || 0;
    streak.values[today] = Math.max(streak.values[today] + delta, 0);
    await tx.objectStore("streaks").put(streak);

    commit("updateStreak", { streakKey, streakData: streak });
  },

  async incrementStreak({ dispatch }, streakKey) {
    await dispatch("updateStreakValue", { streakKey, delta: 1 });
  },

  async decrementStreak({ dispatch }, streakKey) {
    await dispatch("updateStreakValue", { streakKey, delta: -1 });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
