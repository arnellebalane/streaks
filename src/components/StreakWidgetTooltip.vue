<template>
  <div :class="$style.tooltip">
    <span :class="$style.value">10 instances</span>
    <time :class="$style.date">Jan 1, 2018</time>
  </div>
</template>

<script>
export default {
  name: 'StreakWidgetTooltip'
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
