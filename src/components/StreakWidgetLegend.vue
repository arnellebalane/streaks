<template>
  <div :class="$style.legend">
    <span :class="$style.label">Less</span>
    <div :class="$style.step"></div>
    <div :class="$style.step"></div>
    <div :class="$style.step"></div>
    <div :class="$style.step"></div>
    <div :class="$style.step"></div>
    <span :class="$style.label">More</span>
  </div>
</template>

<script>
export default {
  name: "StreakWidgetLegend"
};
</script>

<style module>
.legend {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.label {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.label:first-of-type {
  margin-right: 8px;
}

.label:last-of-type {
  margin-left: 8px;
}

.step {
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--primary-color);
}

.step:nth-child(1) {
  opacity: 0.2;
}

.step:nth-child(2) {
  opacity: 0.4;
}

.step:nth-child(3) {
  opacity: 0.6;
}

.step:nth-child(4) {
  opacity: 0.8;
}

.step:not(:last-of-type) {
  margin-right: 1px;
}
</style>
