<template>
  <form :class="$style.streakWidget" @submit.prevent="onSubmit">
    <header :class="$style.header">
      <input
        :class="$style.input"
        type="text"
        placeholder="Enter streak label"
        v-model.trim="label"
      >

      <BaseButton :class="[$style.button, $style.saveButton]">
        Save
      </BaseButton>
      <BaseButton
        type="button"
        :class="[$style.button, $style.cancelButton]"
        @click="setIsCreatingStreak(false)"
      >
        Cancel
      </BaseButton>
    </header>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import BaseButton from "./BaseButton.vue";

export default {
  name: "CreateStreakWidget",

  components: {
    BaseButton
  },

  data() {
    return {
      label: ""
    };
  },

  methods: {
    ...mapMutations("streaks", ["setIsCreatingStreak"]),
    ...mapActions("streaks", ["createStreak"]),

    async onSubmit() {
      await this.createStreak({ name: this.label });
      this.setIsCreatingStreak(false);
    }
  }
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
}

.input {
  flex-grow: 1;
  padding: 0;
  border: none;
  font-size: 1.8rem;
  font-weight: 500;
  outline: none;
}

.input::-webkit-input-placeholder {
  color: #ccc;
}

.input:focus::-webkit-input-placeholder {
  color: #aaa;
}

.button {
  font-size: 1rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.saveButton {
  margin-left: 2.4rem;
}

.cancelButton {
  margin-left: 4px;
  color: #888;
  background-color: #f0f0f0;
}
</style>
