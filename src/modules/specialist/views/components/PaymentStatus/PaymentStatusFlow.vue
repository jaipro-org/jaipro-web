<template>
  <div v-if="type == 1">
    <payment-status-on
      v-if="statusPayment == 1"
      @on-payment-init="paymentInit"
    ></payment-status-on>
    <payment-status-pending
      v-else-if="statusPayment == 2"
      :type="type"
      :amount="amount"
    ></payment-status-pending>
    <payment-status-success
      v-else-if="statusPayment == 3"
      :type="type"
      :amount="amount"
      date="10/05/2023"
    ></payment-status-success>
    <payment-status-error
      v-else
      :type="type"
      :amount="amount"
      @on-payment-init="paymentInit"
    ></payment-status-error>
  </div>
  <div v-else>
    <payment-status-on v-if="statusPayment == 1"></payment-status-on>
    <payment-status-success
      v-else
      :type="type"
      :amount="amount"
      date="10/05/2023"
    ></payment-status-success>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"

import {
  PaymentStatusOn,
  PaymentStatusPending,
  PaymentStatusSuccess,
  PaymentStatusError,
} from "../index"

export default defineComponent({
  components: {
    PaymentStatusOn,
    PaymentStatusPending,
    PaymentStatusSuccess,
    PaymentStatusError,
  },
  props: {
    type: {
      type: Number,
      required: true,
      validator(value: number) {
        return [1, 2].includes(value)
      },
    },
    status: {
      type: Number,
      required: true,
      validator(value: number) {
        return [1, 2, 3].includes(value)
      },
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    let statusPayment = ref(props.status)
    const router = useRouter()

    // STATUS TYPE
    // 1 = INICIO DE ESTADO
    // 2 =  PENDIENTE DE PAGO
    // 3 = EXITOSO
    // 4 = ERROR
    const paymentInit = () => {
      // if (props.type == 1) {
      //   statusPayment.value = 2
      //   setTimeout(function () {
      //     statusPayment.value = 3
      //   }, 2500)
      // } else {
      //   setTimeout(function () {
      //     statusPayment.value = 3
      //   }, 2500)
      // }
      router.push({ name: "charge-project" })
    }
    return {
      // PARAMS
      statusPayment,
      // METHODS
      paymentInit,
    }
  },
})
</script>

<style lang="scss">
.status-icon {
  font-size: 2.3rem;
  color: rgb(83, 123, 253);

  &--success {
    color: rgb(44, 204, 116);
  }

  &--danger {
    color: rgb(238, 50, 50);
  }
}
</style>
