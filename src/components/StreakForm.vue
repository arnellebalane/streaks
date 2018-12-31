<template>
  <form @submit.prevent="onSubmit">
    <header :class="$style.header">
      <input
        ref="nameInput"
        type="text"
        placeholder="Enter streak label"
        v-model.trim="value.name"
        :class="$style.input"
        required
      >

      <BaseButton
        :class="[$style.button, $style.saveButton]"
        :loading="loading"
        :disabled="loading"
      >
        Save
      </BaseButton>
      <BaseButton
        type="button"
        :class="[$style.button, $style.cancelButton]"
        :disabled="loading"
        @click="$emit('cancel')"
      >
        Cancel
      </BaseButton>
    </header>
  </form>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'StreakForm',

  components: {
    BaseButton
  },

  props: {
    value: {
      type: Object,
      required: true
    },
    loading: Boolean
  },

  mounted() {
    this.$refs.nameInput.focus();
  },

  methods: {
    onSubmit() {
      this.$emit('submit', this.value);
    }
  }
};
</script>

<style module>
.header {
  display: flex;
  align-items: center;
}

@media (max-width: 500px) {
  .header {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}

.input {
  flex-grow: 1;
  padding: 0;
  border: none;
  font-size: 1.8rem;
  font-weight: 500;
  outline: none;
}

@media (max-width: 500px) {
  .input {
    width: 100%;
    margin-bottom: 1.2rem;
  }
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
