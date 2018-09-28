<template>
  <div :class="$style.confirmDelete">
    <h2 :class="$style.message">
      Are you sure you want to delete this streak?
    </h2>

    <BaseButton @click="$emit('confirm')">
      Yes, delete this streak
    </BaseButton>
    <a
      href="#"
      :class="$style.cancel"
      @click.prevent="$emit('cancel')"
    >
      No, don't delete this streak
    </a>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'StreakConfirmDelete',

  components: {
    BaseButton
  }
};
</script>

<style module>
.confirmDelete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}

.message {
  margin: 0;
  margin-bottom: 2.4rem;
  font-size: 1.8rem;
  font-weight: 400;
}

.cancel {
  margin-top: 1.6rem;
  font-size: 1.4rem;
  text-decoration: none;
  opacity: 0.75;
}

.cancel:hover,
.cancel:focus {
  opacity: 1;
}
</style>
