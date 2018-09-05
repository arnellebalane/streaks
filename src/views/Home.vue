<template>
  <div class="home">
    <TheNavbar />

    <div :class="$shared.wrapper">
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

<!-- eslint-disable-next-line -->
<style module="$shared" src="@/stylesheets/shared.css"></style>
