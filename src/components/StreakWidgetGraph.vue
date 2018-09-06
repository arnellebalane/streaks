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
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StreakWidgetGraph",

  computed: mapState("streaks", ["months"])
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
}

.daysAxis {
  width: 3.2rem;
}

.daysAxis span {
  display: block;
  margin: 1.4rem 0;
}
</style>
