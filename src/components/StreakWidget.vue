<template>
  <article :class="$style.streakWidget">
    <StreakWidgetHeader
      v-if="!isEditing"
      :data="data"
      :class="$style.header"
      @edit="onMenuEdit"
    />
    <StreakForm
      v-else
      v-model="streakData"
      :class="$style.header"
      :loading="isLoading"
      @submit="onEditSubmit"
      @cancel="onEditCancel"
    />

    <StreakWidgetGraph />

    <section :class="$style.stats">
      <StreakWidgetStat
        label="Longest Streak"
        value="100 days"
        info="April 1 - September 4"
      />
      <StreakWidgetStat
        label="Current Streak"
        value="50 days"
        info="April 1 - July 4"
      />
      <StreakWidgetStat
        label="Highest Value"
        value="30"
        info="October 29"
      />
      <div :class="$style.extras">
        <StreakWidgetLegend />

        <div :class="$style.actions">
          <button
            :class="[$style.action, $style.decrement]"
            @click="decrementStreak(data.id)"
          >
            <img src="../assets/chevron-down.png" alt="">
          </button>
          <button
            :class="[$style.action, $style.increment]"
            @click="incrementStreak(data.id)"
          >
            <img src="../assets/chevron-up.png" alt="">
          </button>
        </div>
      </div>
    </section>

    <div
      :class="$style.menuModal"
      v-if="isMenuOpen"
      @click="isMenuOpen = false"
    ></div>
  </article>
</template>

<script>
import { mapActions } from "vuex";
import StreakWidgetHeader from "./StreakWidgetHeader.vue";
import StreakWidgetGraph from "./StreakWidgetGraph.vue";
import StreakWidgetStat from "./StreakWidgetStat.vue";
import StreakWidgetLegend from "./StreakWidgetLegend.vue";

const StreakForm = () =>
  import(/* webpackChunkName: "streak-form" */ "./StreakForm.vue");

export default {
  name: "StreakWidget",

  components: {
    StreakForm,
    StreakWidgetHeader,
    StreakWidgetGraph,
    StreakWidgetStat,
    StreakWidgetLegend
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isMenuOpen: false,
      isEditing: false,
      isLoading: false,
      streakData: {
        name: this.data.name
      }
    };
  },

  methods: {
    ...mapActions("streaks", [
      "incrementStreak",
      "decrementStreak",
      "editStreak"
    ]),

    onMenuEdit() {
      this.isMenuOpen = false;
      this.isEditing = true;
    },

    async onEditSubmit() {
      this.isLoading = true;
      await this.editStreak({
        streakKey: this.data.id,
        streakData: this.streakData
      });
      this.isLoading = false;
      this.isEditing = false;
    },

    onEditCancel() {
      this.isEditing = false;
      this.streakData = {
        name: this.data.name
      };
    }
  }
};
</script>

<style module>
.streakWidget {
  padding: 2.4rem;
  border-radius: 3px;
  position: relative;
  background-color: #fff;
}

.header {
  margin-bottom: 2.4rem;
}

.stats {
  display: flex;
  align-items: stretch;
  margin-top: 2.4rem;
}

.stats > * {
  flex: 1 0 0;
  text-align: center;
}

.extras {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.actions {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin: 2.4rem -2.4rem -1.2rem 0;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
}

.decrement {
  width: 5.1rem;
  margin-right: 1px;
  background-color: #f0f0f0;
}

.decrement img {
  opacity: 0.3;
}

.increment {
  width: 7.5rem;
  background-color: var(--primary-color);
}

.menuModal {
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.075);
}
</style>
