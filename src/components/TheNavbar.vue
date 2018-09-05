<template>
  <header class="the-navbar" :class="$style.header">
    <div :class="$shared.wrapper">
      <h1>Your Streaks</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>


<!-- eslint-disable-next-line -->
<style module="$shared" src="@/stylesheets/shared.css"></style>
<style module>
.header {
  padding: 3.2rem 0;
  background-color: #fff;
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
