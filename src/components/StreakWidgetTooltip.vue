<template>
  <div v-if="isShown" :class="$style.tooltip">
    <span :class="$style.value">{{ value }} {{ pluralize(value, 'instance') }}</span>
    <time :class="$style.date">{{ formattedDate }}</time>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  name: 'StreakWidgetTooltip',

  data() {
    return {
      date: null,
      value: null
    };
  },

  computed: {
    isShown() {
      return this.value !== null;
    },

    formattedDate() {
      return this.date ? format(this.date, 'MMM D, YYYY') : null;
    }
  },

  methods: {
    show({date, value}) {
      this.date = date;
      this.value = value;
    },

    hide() {
      this.date = null;
      this.value = null;
    },

    pluralize(value, word) {
      // Very naive implementation, I know 😢
      return value === 1 ? word : word + 's';
    }
  }
};
</script>

<style module>
.tooltip {
  --tooltip-background: #333;

  padding: 0.5em 0.75em;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  color: #fff;
  background-color: var(--tooltip-background);
}

.tooltip::after {
  --arrow-size: 4px;

  content: "";
  border-top: var(--arrow-size) solid var(--tooltip-background);
  border-left: var(--arrow-size) solid transparent;
  border-right: var(--arrow-size) solid transparent;
  position: absolute;
  top: 100%;
  left: calc(50% - var(--arrow-size) / 2);
}

.value {
  font-weight: 700;
}

.date {
  opacity: 0.75;
}

.date::before {
  content: " on ";
}
</style>
