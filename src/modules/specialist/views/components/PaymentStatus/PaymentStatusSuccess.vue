<template>
  <div>
    <div class="text-center">
      <i
        class="fa-regular fa-circle-check status-icon status-icon--success"
      ></i>
    </div>
    <h4 class="text-center">Cobro realizado</h4>
    <div class="mb-1">
      <b>Metodo de pago:</b>
      Yape(BCP)
    </div>
    <div class="mb-1">
      <b>Monto cobrado:</b>
      S/. {{ amount }}
    </div>
    <div>
      <b>Fecha de operación:</b>
      {{ date }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    type: {
      type: Number,
      required: true,
      validator(value: number) {
        return [1, 2].includes(value)
      },
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
