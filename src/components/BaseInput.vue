<template>
  <div>
    <label v-if="label" :for="id" :class="$style.label">
      {{label}}
    </label>

    <input
      :id="id"
      :class="$style.input"
      v-model="inputValue"
      v-bind="$attrs"
      v-on="listeners"
    >
  </div>
</template>

<script>
let counter = 0;

export default {
  name: "BaseInput",

  props: {
    id: {
      type: String,
      default() {
        return "BaseInput-" + counter++;
      }
    },
    label: String,
    value: {
      type: String,
      required: true
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      }
    },

    listeners() {
      const listeners = { ...this.$listeners };
      delete listeners.input;
      return listeners;
    }
  }
};
</script>

<style module>
.label {
  display: inline-block;
  margin-bottom: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #aaa;
}

.input {
  display: block;
  width: 100%;
  padding: 6px 0.5em;
  border: 1px solid #ddd;
  border-radius: 3px;
  line-height: 1.8rem;
}
</style>
