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
  name: 'BaseButton',

  props: {
    square: Boolean,
    outline: Boolean,
    loading: Boolean
  },

  computed: {
    componentClasses() {
      return {
        [this.$style.button]: true,
        [this.$style.square]: this.square,
        [this.$style.outline]: this.outline,
        [this.$style.loading]: this.loading
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

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(3.2 / 1.2 * 1em);
  height: calc(3.2 / 1.2 * 1em);
  padding: 0;
}

.outline {
  border: 1px solid currentColor;
  background: none;
}

.loading {
  position: relative;
  text-indent: -100vw;
}

.loading::before {
  content: '';
  position: absolute;
  top: calc(50% - 1em / 2);
  left: calc(50% - 1em / 2);
  width: 1em;
  height: 1em;
  border: 1px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  opacity: 0.75;
  animation: rotate 500ms linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
