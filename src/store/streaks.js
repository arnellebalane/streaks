import { getWeeks, getMonths } from "@/lib/graph-utils";

const today = new Date();
const weeks = getWeeks(today);
const months = getMonths(weeks);

const state = {
  weeks,
  months
};

export default {
  namespaced: true,
  state
};
