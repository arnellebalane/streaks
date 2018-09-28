<template>
  <StreakForm
    :class="$style.streakWidget"
    :loading="isLoading"
    v-model="streakData"
    @submit="onSubmit"
    @cancel="setIsCreatingStreak(false)"
  />
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import StreakForm from './StreakForm.vue';

export default {
  name: 'CreateStreakWidget',

  components: {
    StreakForm
  },

  data() {
    return {
      streakData: {
        name: ''
      },
      isLoading: false
    };
  },

  methods: {
    ...mapMutations('streaks', ['setIsCreatingStreak']),
    ...mapActions('streaks', ['createStreak']),

    async onSubmit() {
      this.isLoading = true;
      await this.createStreak(this.streakData);
      this.isLoading = false;

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
</style>
