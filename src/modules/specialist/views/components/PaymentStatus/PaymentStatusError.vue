<template>
  <div>
    <div class="text-center">
      <i
        class="fa-regular fa-face-sad-tear status-icon status-icon--danger"
      ></i>
    </div>
    <h4 class="text-center">Error en la verificación</h4>
    <div class="mb-1">
      <b>Metodo de pago:</b>
      Yape(BCP)
    </div>
    <div class="mb-1">
      <b>Monto cobrado:</b>
      S/. {{ amount }}
    </div>
    <p>
      Hubo un error con el comprobante de pago, no coincide con el monto
      registrado de cobro, por favor volver a subir el comprobante correctamente
    </p>

    <payment-status-on
      @on-payment-init="$emit('on-payment-init')"
    ></payment-status-on>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { PaymentStatusOn } from "../index"

export default defineComponent({
  components: {
    PaymentStatusOn,
  },
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
