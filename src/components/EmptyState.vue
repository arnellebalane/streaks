<template>
  <div :class="$style.emptyState">
    <p>You don't seem to be tracking any streaks yet.</p>

    <BaseButton
      :class="$style.createButton"
      @click="setIsCreatingStreak(true)"
    >
      <img src="../assets/plus.png" alt="">
      Create Streak
    </BaseButton>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BaseButton from "./BaseButton.vue";

export default {
  name: "EmptyState",

  components: {
    BaseButton
  },

  methods: mapMutations("streaks", ["setIsCreatingStreak"])
};
</script>

<style module>
.emptyState {
  padding: 3.2rem;
  border-radius: 3px;
  margin-top: 3.2rem;
  text-align: center;
  background-color: #fff;
}

.emptyState p {
  margin: 0;
  margin-bottom: 1.6rem;
}

.createButton {
  display: inline-flex;
  align-items: center;
}

.createButton img {
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 4px;
}
</style>
