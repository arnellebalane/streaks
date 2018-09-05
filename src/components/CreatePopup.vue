<template>
  <div
    :class="['create-popup', $style.popupModal]"
    :style="{top: navbarHeight + 'px'}"
  >
    <form :class="$style.popup" @submit.prevent="onSubmit">
      <BaseInput
        type="text"
        label="Streak Label"
        v-model.trim="streakLabel"
      />

      <BaseButton :class="$style.createButton">
        Create Streak
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

export default {
  name: "CreatePopup",

  components: {
    BaseButton,
    BaseInput
  },

  data() {
    return {
      streakLabel: ""
    };
  },

  computed: mapState(["navbarHeight"]),

  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("Creating streak:", this.streakLabel);
    }
  }
};
</script>

<style module>
.popupModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup {
  width: 95vw;
  max-width: 40rem;
  padding: 3.2rem;
  border-radius: 3px;
  margin: 3.2rem auto 0 auto;
  background-color: #fff;
}

.createButton {
  display: block;
  margin: 0 auto;
  margin-top: 1.6rem;
}
</style>
