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
        info: value ? this.formatDate(date) : '-'
      };
    },

    currentStreak() {
      return this.getStreakDetails(this.data.currentStreak || {});
    },

    longestStreak() {
      return this.getStreakDetails(this.data.longestStreak || {});
    }
  },

  methods: {
    getStreakDetails({value = 0, startDate, endDate}) {
      const result = {
        value: `${value} ${value === 1 ? 'day' : 'days'}`,
        info: '-'
      };
      if (value) {
        result.info = isSameDay(startDate, endDate)
          ? this.formatDate(startDate)
          : [this.formatDate(startDate), this.formatDate(endDate)].join(' - ');
      }
      return result;
    },

    formatDate(date) {
      return format(date, 'MMM D, YYYY');
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
}

@media (max-width: 720px) {
  .stats {
    display: block;
    padding-left: 3.2rem;
    padding-right: 2.4rem;
  }

  .stats > *:not(:first-child) {
    margin-top: 4px;
  }

  .stats > *:not(:last-child) {
    margin-bottom: 4px;
  }
}

@media (max-width: 600px) {
  .stats {
    padding-right: 0;
  }
}

@media (max-width: 378px) {
  .stats {
    padding-left: 0;
  }
}
</style>
