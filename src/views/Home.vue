<template>
  <div class="home">
    <TheNavbar />
    <CreatePopup />

    <div :class="$shared.wrapper">
      <EmptyState />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import EmptyState from "@/components/EmptyState.vue";
import CreatePopup from "@/components/CreatePopup.vue";

export default {
  name: "Home",

  components: {
    TheNavbar,
    EmptyState,
    CreatePopup
  }
};
</script>

<!-- eslint-disable-next-line -->
<style module="$shared" src="@/stylesheets/shared.css"></style>
