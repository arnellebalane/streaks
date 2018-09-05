<template>
  <header :class="$style.header">
    <div :class="$shared.wrapper">
      <h1>Your Streaks</h1>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TheNavbar",

  mounted() {
    this.setNavbarHeight(this.$el.getBoundingClientRect().height);
  },

  methods: mapMutations(["setNavbarHeight"])
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
