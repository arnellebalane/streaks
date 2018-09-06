<template>
  <form :class="$style.streakWidget" @submit.prevent="onSubmit">
    <header :class="$style.header">
      <input
        :class="$style.input"
        type="text"
        placeholder="Enter streak label"
        v-model.trim="label"
      >
      <BaseButton :class="$style.button">
        Save
      </BaseButton>
    </header>
  </form>
</template>

<script>
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
    onSubmit() {
      // eslint-disable-next-line
      console.log("Creating streak", this.label);
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
  line-height: 2.4rem;
  outline: none;
}

.input::-webkit-input-placeholder {
  color: #ccc;
}

.input:focus::-webkit-input-placeholder {
  color: #aaa;
}

.button {
  margin-left: 2.4rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2.4rem;
}
</style>
