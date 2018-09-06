<template>
  <section :class="$style.graph">
    <div :class="[$style.axis, $style.monthsAxis]">
      <span v-for="month in months" :key="month.offset">
        {{month.label}}
      </span>
    </div>

    <div :class="[$style.axis, $style.daysAxis]">
      <span>Mon</span>
      <span>Wed</span>
      <span>Fri</span>
    </div>

    <div :class="$style.weeksContainer">
      <div :class="$style.week" v-for="(week, i) in weeks" :key="i">
        <div :class="$style.day" v-for="(day, j) in week" :key="j"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StreakWidgetGraph",

  computed: mapState("streaks", ["months", "weeks"])
};
</script>

<style module>
.graph {
  display: flex;
  flex-wrap: wrap;
}

.axis {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.monthsAxis {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 3.2rem;
  margin-bottom: 8px;
}

.daysAxis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3.2rem;
  padding: 1.3rem 0;
}

.weeksContainer {
  flex-grow: 1;
  display: flex;
  align-items: stretch;
}

.week {
  width: 1.2rem;
}

.week:not(:last-child) {
  margin-right: 1px;
}

.day {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #f0f0f0;
}

.day:not(:last-child) {
  margin-bottom: 1px;
}
</style>
