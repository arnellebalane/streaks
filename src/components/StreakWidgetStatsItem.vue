<template>
  <div :class="$style.stat">
    <p :class="$style.label">{{ label }}</p>
    <p :class="$style.value">{{ value }}</p>
    <small :class="$style.info">{{ info }}</small>
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
.stat {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.label {
  order: 1;
  margin: 0;
  margin-top: 1.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
}

.value {
  margin: 0;
  margin-bottom: 4px;
  font-size: 1.6rem;
  font-weight: 700;
}

.info {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

@media (max-width: 720px) {
  .stat {
    flex-direction: initial;
    align-items: baseline;
    text-align: left;
  }

  .label {
    order: 0;
    width: 9.6rem;
    margin-top: 0;
    font-weight: 300;
  }

  .label::after {
    content: ":";
  }

  .value {
    width: 5.8rem;
    margin-right: 1.2rem;
    margin-bottom: 0;
    font-size: 1.2rem;
    text-align: right;
  }

  .info {
    display: block;
    width: 15.6rem;
  }
}

@media (max-width: 600px) {
  .label {
    margin-right: auto;
  }
}

@media (max-width: 500px) {
  .value {
    margin-right: 0;
  }

  .info {
    display: none;
  }
}
</style>
