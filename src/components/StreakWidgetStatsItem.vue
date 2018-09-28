<template>
  <div>
    <p :class="$style.value">{{ value }}</p>
    <small :class="$style.info">{{ info }}</small>
    <p :class="$style.label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'StreakWidgetStat',

  props: {
    label: String,
    value: [String, Number],
    info: String
  }
};
</script>

<style module>
.value {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
}

.info {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.label {
  margin: 0;
  margin-top: 1.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
}
</style>
