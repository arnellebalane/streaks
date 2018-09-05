<template>
  <div class="empty-state" :class="$style.emptyState">
    <p>You don't seem to be tracking any streaks yet.</p>

    <button :class="$style.createButton">
      <img src="../assets/plus.png" alt="">
      Create Streak
    </button>
  </div>
</template>

<script>
export default {
  name: "EmptyState"
};
</script>

<style module>
.emptyState {
  padding: 3.2rem;
  border-radius: 3px;
  margin-top: 3.2rem;
  text-align: center;
  background-color: #fff;
}

.emptyState p {
  margin: 0;
  margin-bottom: 1.6rem;
}

.createButton {
  display: inline-flex;
  align-items: center;
  padding: 0 1.6rem;
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 3.2rem;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--primary-color);
  cursor: pointer;
}

.createButton img {
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 4px;
}
</style>
