<template>
  <header :class="$style.header">
    <div :class="[$shared.wrapper, $style.wrapper]">
      <h1>Your Streaks</h1>

      <BaseButton
        :class="$style.createButton"
        v-if="hasStreaks"
        @click="setIsCreatingStreak(true)"
        square
        outline
      >
        <img src="../assets/plus-blue.png" alt="">
      </BaseButton>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import BaseButton from './BaseButton.vue';

export default {
  name: 'TheNavbar',

  components: {
    BaseButton
  },

  computed: mapGetters('streaks', ['hasStreaks']),

  mounted() {
    this.setNavbarHeight(this.$el.getBoundingClientRect().height);
  },

  methods: {
    ...mapMutations(['setNavbarHeight']),
    ...mapMutations('streaks', ['setIsCreatingStreak'])
  }
};
</script>


<!-- eslint-disable-next-line -->
<style module="$shared" src="@/stylesheets/shared.css"></style>
<style module>
.header {
  padding: 3.2rem 0;
  background-color: #fff;
}

.wrapper {
  display: flex;
  align-items: center;
}

.wrapper h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.createButton {
  margin-left: auto;
  font-size: 9px;
  color: var(--primary-color);
}

.createButton img {
  width: 1.8rem;
}
</style>
