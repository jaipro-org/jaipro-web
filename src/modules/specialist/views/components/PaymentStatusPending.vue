<template>
  <div>
    <div class="text-center">
      <i class="fa-solid fa-hourglass-end status-icon"></i>
    </div>
    <h4 class="text-center">Pediente de verificar</h4>
    <div class="mb-1">
      <b>Metodo de pago:</b>
      Yape(BCP)
    </div>
    <div class="mb-1">
      <b>Monto cobrado:</b>
      S/. {{ amount }}
    </div>
    <p>
      Estamos verificando el pago del servicio, esto se puede tomar entre 10-15
      minutos
    </p>
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
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
