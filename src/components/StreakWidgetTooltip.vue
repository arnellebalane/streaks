<template>
  <div v-show="isShown" :class="$style.tooltip" :style="tooltipStyles">
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
      value: null,
      rect: null
    };
  },

  computed: {
    isShown() {
      return this.value !== null;
    },

    formattedDate() {
      return this.date
        ? format(this.date, 'MMM D, YYYY')
        : null;
    },

    position() {
      const streakWidget = this.$parent.$el;
      if (!this.rect || !streakWidget) return null;

      const widgetRect = streakWidget.getBoundingClientRect();
      return {
        x: (this.rect.left + this.rect.width / 2) - widgetRect.left,
        y: this.rect.top - widgetRect.top
      };
    },

    tooltipStyles() {
      return {
        top: (this.position ? this.position.y : 0) + 'px',
        left: (this.position ? this.position.x : 0) + 'px'
      };
    }
  },

  methods: {
    show({date, value, rect}) {
      this.date = date;
      this.value = value;
      this.rect = rect;
    },

    hide() {
      this.date = null;
      this.value = null;
      this.rect = null;
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
  --tooltip-arrow-size: 3px;
  --tooltip-background: #333;

  padding: 0.5em 0.75em;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  color: #fff;
  background-color: var(--tooltip-background);
  transform: translate(-50%, calc(-1 * (100% + var(--tooltip-arrow-size))));
  pointer-events: none;
  white-space: nowrap;
}

.tooltip::after {
  content: "";
  border-top: var(--tooltip-arrow-size) solid var(--tooltip-background);
  border-left: var(--tooltip-arrow-size) solid transparent;
  border-right: var(--tooltip-arrow-size) solid transparent;
  position: absolute;
  top: 100%;
  left: calc(50% - var(--tooltip-arrow-size));
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
