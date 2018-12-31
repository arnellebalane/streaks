import nanoid from 'nanoid';
import format from 'date-fns/format';
import {getWeeks, getMonths} from '@/lib/graph-helpers';
import indexedDB from '@/lib/indexed-db';
import {
  getHighestValue,
  getCurrentStreak,
  getLongestStreak
} from '@/lib/streak-helpers';

const today = new Date();
const weeks = getWeeks(today);
const months = getMonths(weeks);

function computeWidgetWidth(weeks) {
  // Widget padding + days labels width
  const extraWidth = 24 * 2 + 32;
  const cellWidth = 12;
  const cellMargin = 1;
  const graphWidth = weeks * (cellWidth + cellMargin) - cellMargin;
  return graphWidth + extraWidth;
}

const state = {
  weeks,
  months,
  streaks: [],
  isCreatingStreak: false
};

const getters = {
  hasStreaks(state) {
    return state.streaks.length > 0;
  },

  weeks(state, getters) {
    const offset = state.months[getters.startMonth].offset;
    return state.weeks.slice(offset);
  },

  months(state, getters) {
    const offset = state.months[getters.startMonth].offset;

    return state.months
      .slice(getters.startMonth)
      .map(month => ({...month, offset: month.offset - offset}));
  },

  startMonth(state, getters, rootState) {
    const windowWidth = rootState.windowWidth;
    const extraWidth = 32 * 2; // Page padding

    for (let i = 0; i < state.months.length; i++) {
      const weeks = state.weeks.length - state.months[i].offset;
      const totalWidth = computeWidgetWidth(weeks) + extraWidth;
      if (totalWidth <= windowWidth) {
        return i;
      }
    }

    return 0;
  }
};

const mutations = {
  addStreak(state, streak) {
    state.streaks = [streak, ...state.streaks];
  },

  updateStreak(state, {streakKey, streakData}) {
    state.streaks = state.streaks.map(streak => {
      if (streak.id === streakKey) {
        return {...streak, ...streakData};
      }
      return streak;
    });
  },

  deleteStreak(state, streakKey) {
    state.streaks = state.streaks.filter(streak => streak.id !== streakKey);
  },

  setIsCreatingStreak(state, isCreatingStreak) {
    state.isCreatingStreak = isCreatingStreak;
  }
};

const actions = {
  async fetchStreaks({commit}) {
    const db = await indexedDB;
    const tx = db.transaction('streaks', 'readwrite');
    const streaks = await tx.objectStore('streaks').getAll();

    streaks.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    streaks.forEach(streak => commit('addStreak', streak));
  },

  async createStreak({commit}, streakData) {
    const data = {
      id: nanoid(),
      createdAt: new Date(),
      createdAtTz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ...streakData
    };

    const db = await indexedDB;
    const tx = db.transaction('streaks', 'readwrite');
    await tx.objectStore('streaks').put(data);
    commit('addStreak', data);
  },

  async editStreak({commit}, {streakKey, streakData}) {
    const db = await indexedDB;
    const tx = db.transaction('streaks', 'readwrite');
    const streak = await tx.objectStore('streaks').get(streakKey);

    const updatedStreak = {...streak, ...streakData};
    await tx.objectStore('streaks').put(updatedStreak);
    commit('updateStreak', {streakKey, streakData: updatedStreak});
  },

  async deleteStreak({commit}, streakKey) {
    const db = await indexedDB;
    const tx = db.transaction('streaks', 'readwrite');
    await tx.objectStore('streaks').delete(streakKey);
    commit('deleteStreak', streakKey);
  },

  async updateStreakValue({commit}, {streakKey, delta}) {
    const db = await indexedDB;
    const tx = db.transaction('streaks', 'readwrite');
    const streak = await tx.objectStore('streaks').get(streakKey);

    const today = format(new Date(), 'YYYY-MM-DD');
    streak.values = streak.values || {};
    streak.values[today] = streak.values[today] || 0;

    const updatedValue = streak.values[today] + delta;
    streak.values[today] = Math.max(updatedValue, 0);

    streak.highestValue = getHighestValue(streak);
    if (updatedValue < 2) {
      const currentStreak = streak.currentStreak;
      streak.currentStreak = getCurrentStreak(streak);

      if (!currentStreak || !streak.currentStreak
      || currentStreak.value !== streak.currentStreak.value) {
        streak.longestStreak = getLongestStreak(streak);
      }
    }

    await tx.objectStore('streaks').put(streak);
    commit('updateStreak', {streakKey, streakData: streak});
  },

  async incrementStreak({dispatch}, streakKey) {
    await dispatch('updateStreakValue', {streakKey, delta: 1});
  },

  async decrementStreak({dispatch}, streakKey) {
    await dispatch('updateStreakValue', {streakKey, delta: -1});
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
