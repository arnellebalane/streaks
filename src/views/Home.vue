<template>
  <div>
    <TheNavbar />

    <div :class="$shared.wrapper">
      <EmptyState :class="$style.feedWidget" />
      <CreateStreakWidget :class="$style.feedWidget" />
      <StreakWidget
        v-for="streak in streaks"
        :key="streak.id"
        :data="streak"
        :class="$style.feedWidget"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheNavbar from "@/components/TheNavbar.vue";
import EmptyState from "@/components/EmptyState.vue";
import StreakWidget from "@/components/StreakWidget.vue";
import CreateStreakWidget from "@/components/CreateStreakWidget.vue";

export default {
  name: "Home",

  components: {
    TheNavbar,
    EmptyState,
    StreakWidget,
    CreateStreakWidget
  },

  computed: mapState("streaks", ["streaks"])
};
</script>

<!-- eslint-disable-next-line -->
<style module="$shared" src="@/stylesheets/shared.css"></style>
<style module>
.feedWidget {
  margin: 3.2rem 0;
}
</style>
