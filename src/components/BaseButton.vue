<template>
  <button
    :class="componentClasses"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    square: Boolean
  },

  computed: {
    componentClasses() {
      return {
        [this.$style.button]: true,
        [this.$style.square]: this.square
      };
    }
  }
};
</script>

<style module>
.button {
  padding: 0 calc(1.6 / 1.2 * 1em);
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: calc(3.2 / 1.2 * 1em);
  text-transform: uppercase;
  color: #fff;
  background-color: var(--primary-color);
  cursor: pointer;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(3.2 / 1.2 * 1em);
  height: calc(3.2 / 1.2 * 1em);
  padding: 0;
}
</style>
