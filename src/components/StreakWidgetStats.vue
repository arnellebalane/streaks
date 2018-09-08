<template>
  <div :class="$style.stats">
    <StreakWidgetStatsItem
      label="Longest Streak"
      value="100 days"
      info="April 1 - September 4"
    />
    <StreakWidgetStatsItem
      label="Current Streak"
      value="50 days"
      info="April 1 - July 4"
    />
    <StreakWidgetStatsItem
      label="Highest Value"
      :value="highestValue.value"
      :info="highestValue.info"
    />
  </div>
</template>

<script>
import format from "date-fns/format";
import StreakWidgetStatsItem from "./StreakWidgetStatsItem.vue";

export default {
  name: "StreakWidgetStatsItems",

  components: {
    StreakWidgetStatsItem
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    highestValue() {
      const highestValue = this.data.highestValue;
      return {
        value: highestValue ? highestValue.value : 0,
        info: highestValue ? format(highestValue.date, "MMMM D") : "-"
      };
    }
  }
};
</script>

<style module>
.stats {
  display: flex;
  align-items: stretch;
}

.stats > * {
  flex: 1 0 0;
  text-align: center;
}
</style>
