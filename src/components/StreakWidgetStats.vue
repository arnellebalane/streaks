<template>
  <div :class="$style.stats">
    <StreakWidgetStatsItem
      label="Longest Streak"
      :value="longestStreak.value"
      :info="longestStreak.info"
    />
    <StreakWidgetStatsItem
      label="Current Streak"
      :value="currentStreak.value"
      :info="currentStreak.info"
    />
    <StreakWidgetStatsItem
      label="Highest Value"
      :value="highestValue.value"
      :info="highestValue.info"
    />
  </div>
</template>

<script>
import format from 'date-fns/format';
import isSameDay from 'date-fns/is_same_day';
import StreakWidgetStatsItem from './StreakWidgetStatsItem.vue';

export default {
  name: 'StreakWidgetStatsItems',

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
      const {value = 0, date} = this.data.highestValue || {};
      return {
        value: value,
        info: value ? format(date, 'MMM D, YYYY') : '-'
      };
    },

    currentStreak() {
      const {value = 0, startDate, endDate} = this.data.currentStreak || {};
      const result = {
        value: `${value} ${value === 1 ? 'day' : 'days'}`,
        info: '-'
      };
      if (value) {
        if (isSameDay(startDate, endDate)) {
          result.info = format(startDate, 'MMM D, YYYY');
        } else {
          result.info = [format(startDate, 'MMM D, YYYY'), format(endDate, 'MMM D, YYYY')].join(' - ');
        }
      }
      return result;
    },

    longestStreak() {
      const {value = 0, startDate, endDate} = this.data.longestStreak || {};
      const result = {
        value: `${value} ${value === 1 ? 'day' : 'days'}`,
        info: '-'
      };
      if (value) {
        if (isSameDay(startDate, endDate)) {
          result.info = format(startDate, 'MMM D, YYYY');
        } else {
          result.info = [format(startDate, 'MMM D, YYYY'), format(endDate, 'MMM D, YYYY')].join(' - ');
        }
      }
      return result;
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
