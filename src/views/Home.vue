<template>
  <div class="home">
    <TheNavbar />

    <div :class="$style.wrapper">
      <EmptyState />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import EmptyState from "@/components/EmptyState.vue";

export default {
  name: "Home",

  components: {
    TheNavbar,
    EmptyState
  }
};
</script>

<style module>
.wrapper {
  width: 63rem;
  margin: 0 auto;
}
</style>
