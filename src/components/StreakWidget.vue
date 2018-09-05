<template>
  <article :class="['streak-widget', $style.streakWidget]">
    <header :class="$style.header">
      <h1 :class="$style.label">Github Commits</h1>

      <button :class="$style.settings">
        <img src="../assets/settings.png" alt="">
      </button>
    </header>

    <section :class="$style.graph">
      <div :class="[$style.graphAxis, $style.graphAxisMonths]">
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
      <div :class="[$style.graphAxis, $style.graphAxisDays]">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
    </section>

    <section :class="$style.stats">
      <div :class="$style.stat">
        <p :class="$style.statValue">100 days</p>
        <small :class="$style.statInfo">April 1 - September 4</small>
        <p :class="$style.statLabel">Longest Streak</p>
      </div>
      <div :class="$style.stat">
        <p :class="$style.statValue">50 days</p>
        <small :class="$style.statInfo">April 1 - July 31</small>
        <p :class="$style.statLabel">Current Streak</p>
      </div>
      <div :class="$style.stat">
        <p :class="$style.statValue">30</p>
        <small :class="$style.statInfo">September 4</small>
        <p :class="$style.statLabel">Highest Count</p>
      </div>
      <div :class="$style.legend">
        <span :class="$style.legendLabel">Less</span>
        <div :class="$style.legendStep"></div>
        <div :class="$style.legendStep"></div>
        <div :class="$style.legendStep"></div>
        <div :class="$style.legendStep"></div>
        <div :class="$style.legendStep"></div>
        <span :class="$style.legendLabel">More</span>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "StreakWidget"
};
</script>

<style module>
.streakWidget {
  padding: 2.4rem;
  border-radius: 3px;
  background-color: #fff;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
}

.label {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
}

.settings {
  padding: 0;
  border: none;
  margin-left: auto;
  background: none;
  cursor: pointer;
  opacity: 0.5;
}

.settings:hover,
.settings:focus {
  opacity: 1;
}

.settings img {
  display: block;
}

.graph {
  display: flex;
  flex-wrap: wrap;
}

.graphAxis {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.graphAxisMonths {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 3.2rem;
}

.graphAxisDays {
  width: 3.2rem;
}

.graphAxisDays span {
  display: block;
  margin: 1.4rem 0;
}

.stats {
  display: flex;
  align-items: stretch;
  margin-top: 2.4rem;
}

.stat {
  flex: 1 0 0;
  text-align: center;
}

.statValue {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
}

.statInfo {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.statLabel {
  margin: 0;
  margin-top: 1.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
}

.legend {
  flex: 1 0 0;
  align-self: flex-start;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.legendLabel {
  font-size: 1.2rem;
  font-weight: 300;
  color: #888;
}

.legendLabel:first-of-type {
  margin-right: 8px;
}

.legendLabel:last-of-type {
  margin-left: 8px;
}

.legendStep {
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--primary-color);
}

.legendStep:nth-child(1) {
  opacity: 0.2;
}

.legendStep:nth-child(2) {
  opacity: 0.4;
}

.legendStep:nth-child(3) {
  opacity: 0.6;
}

.legendStep:nth-child(4) {
  opacity: 0.8;
}

.legendStep:not(:last-of-type) {
  margin-right: 1px;
}
</style>
