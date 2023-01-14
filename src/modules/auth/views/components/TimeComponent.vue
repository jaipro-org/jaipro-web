<template>
  <div class="time">
    <div class="time__title">{{ title }}</div>
    <div class="time__content">
      <i
        v-if="haveActions"
        @click="substractTime"
        class="time-button time-button--left fa-solid fa-circle-minus"
      ></i>
      <b-form-input
        v-model="number"
        type="text"
        placeholder="0"
        required
        class="rounded-pill"
        number
        oninput="this.value = value.replace(/[^0-9]/g, '')"
        :disabled="disabled"
      ></b-form-input>

      <i
        v-if="haveActions"
        @click="addTime"
        class="time-button time-button--right fa-solid fa-circle-plus"
      ></i>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from "vue"

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "Time",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    haveActions: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let number = ref(props.modelValue)

    watch(
      () => number.value,
      (newValue) => {
        if (isNaN(newValue)) {
          number.value = 0
        }
        emit("update:modelValue", number.value)
      }
    )

    function addTime() {
      number.value++
    }

    function substractTime() {
      if (number.value > 0) {
        number.value--
      }
    }
    return {
      number,
      // METHODS
      addTime,
      substractTime,
    }
  },
})
</script>

<style scoped lang="scss">
.time {
  &__title {
    text-align: center;
  }
  &__content {
    display: flex;
    align-items: center;

    .time-button {
      font-size: 2.2rem;
      background-color: white;
      color: rgb(145, 145, 145);

      border-radius: 100%;
      cursor: default;

      &--right {
        margin-left: 7px;
      }

      &--left {
        margin-right: 7px;
      }
    }
  }
}
</style>
