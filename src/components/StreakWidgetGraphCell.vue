<template>
  <div
    :class="[$style.cell, colorScaleClass]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
  </div>
</template>

<script>
export default {
  name: 'StreakWidgetGraphCell',

  props: {
    date: {
      type: Date,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },

  computed: {
    highestValue() {
      return this.$parent.highestValue;
    },

    colorScaleClass() {
      const percentage = this.value / this.highestValue;
      if (!percentage) {
        return null;
      } else if (percentage < 0.2) {
        return [this.$style.scale, this.$style.scale1];
      } else if (percentage < 0.4) {
        return [this.$style.scale, this.$style.scale2];
      } else if (percentage < 0.6) {
        return [this.$style.scale, this.$style.scale3];
      } else if (percentage < 0.8) {
        return [this.$style.scale, this.$style.scale4];
      }
      return [this.$style.scale, this.$style.scale5];
    },

    tooltip() {
      // StreakWidget
      //   StreakWidgetGraph
      //     StreakWidgetGraphCell
      //   StreakWidgetTooltip ref="tooltip"
      return this.$parent.$parent.$refs.tooltip;
    }
  },

  methods: {
    handleMouseEnter() {
      const {date, value} = this;
      this.tooltip.show({date, value});
    },

    handleMouseLeave() {
      this.tooltip.hide();
    }
  }
};
</script>

<style module>
.cell {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #f0f0f0;
}

.scale {
  background-color: var(--primary-color);
}

.scale1 {
  opacity: 0.2;
}

.scale2 {
  opacity: 0.4;
}

.scale3 {
  opacity: 0.6;
}

.scale4 {
  opacity: 0.8;
}
</style>
