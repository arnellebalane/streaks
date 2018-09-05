<template>
  <section :class="$style.graph">
    <div :class="[$style.axis, $style.monthsAxis]">
      <span>Jan</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Apr</span>
      <span>May</span>
      <span>Jun</span>
      <span>Jul</span>
      <span>Aug</span>
      <span>Sep</span>
      <span>Oct</span>
      <span>Nov</span>
      <span>Dec</span>
    </div>
    <div :class="[$style.axis, $style.daysAxis]">
      <span>Mon</span>
      <span>Wed</span>
      <span>Fri</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "StreakWidgetGraph"
};
</script>

<style module>
.graph {
  display: flex;
  flex-wrap: wrap;
}

.axis {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.monthsAxis {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 3.2rem;
}

.daysAxis {
  width: 3.2rem;
}

.daysAxis span {
  display: block;
  margin: 1.4rem 0;
}
</style>
