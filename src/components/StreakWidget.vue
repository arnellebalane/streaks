<template>
  <article :class="$style.streakWidget">
    <StreakWidgetHeader :data="data" />
    <StreakWidgetGraph />

    <section :class="$style.stats">
      <StreakWidgetStat
        label="Longest Streak"
        value="100 days"
        info="April 1 - September 4"
      />
      <StreakWidgetStat
        label="Current Streak"
        value="50 days"
        info="April 1 - July 4"
      />
      <StreakWidgetStat
        label="Highest Value"
        value="30"
        info="October 29"
      />
      <div :class="$style.extras">
        <StreakWidgetLegend />

        <div :class="$style.actions">
          <button :class="[$style.action, $style.decrement]">
            <img src="../assets/chevron-down.png" alt="">
          </button>
          <button :class="[$style.action, $style.increment]">
            <img src="../assets/chevron-up.png" alt="">
          </button>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import StreakWidgetHeader from "./StreakWidgetHeader.vue";
import StreakWidgetGraph from "./StreakWidgetGraph.vue";
import StreakWidgetStat from "./StreakWidgetStat.vue";
import StreakWidgetLegend from "./StreakWidgetLegend.vue";

export default {
  name: "StreakWidget",

  components: {
    StreakWidgetHeader,
    StreakWidgetGraph,
    StreakWidgetStat,
    StreakWidgetLegend
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style module>
.streakWidget {
  padding: 2.4rem;
  border-radius: 3px;
  background-color: #fff;
}

.stats {
  display: flex;
  align-items: stretch;
  margin-top: 2.4rem;
}

.stats > * {
  flex: 1 0 0;
  text-align: center;
}

.extras {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.actions {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin: 2.4rem -2.4rem -1.2rem 0;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
}

.decrement {
  width: 5.1rem;
  margin-right: 1px;
  background-color: #f0f0f0;
}

.decrement img {
  opacity: 0.3;
}

.increment {
  width: 7.5rem;
  background-color: var(--primary-color);
}
</style>
