<template>
  <header :class="$style.header">
    <h1 :class="$style.label">Github Commits</h1>

    <button :class="$style.settings">
      <img src="../assets/settings.png" alt="">
    </button>
  </header>
</template>

<script>
export default {
  name: "StreakWidgetHeader"
};
</script>

<style module>
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
</style>
