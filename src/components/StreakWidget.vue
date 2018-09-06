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
      <StreakWidgetLegend :class="$style.legend" />
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

.legend {
  align-self: flex-start;
}
</style>
