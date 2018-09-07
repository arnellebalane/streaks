<template>
  <header :class="$style.header">
    <h1 :class="$style.label">{{ data.name }}</h1>

    <button :class="$style.settings" @click="openMenu">
      <img src="../assets/settings.png" alt="">
    </button>

    <nav :class="$style.menu" v-if="isMenuOpen">
      <a href="#" @click.prevent="$emit('edit')">Edit Streak</a>
      <a href="#" @click.prevent="$emit('delete')">Delete Streak</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "StreakWidgetHeader",

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    isMenuOpen() {
      return this.$parent.isMenuOpen;
    }
  },

  methods: {
    openMenu() {
      this.$parent.isMenuOpen = true;
    }
  }
};
</script>

<style module>
.header {
  display: flex;
  align-items: center;
  position: relative;
}

.label {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
}

.settings {
  padding: 0;
  border: none;
  margin-left: auto;
  margin-right: -4px;
  background: none;
  cursor: pointer;
  outline: none;
  opacity: 0.5;
}

.settings:hover,
.settings:focus {
  opacity: 1;
}

.settings img {
  display: block;
}

.menu {
  border-radius: 3px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
}

.menu a {
  display: block;
  padding: 0.5em 1.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #888;
}

.menu a:hover,
.menu a:focus {
  color: var(--primary-color);
}
</style>
