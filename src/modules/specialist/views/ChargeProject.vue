<template>
  <div id="charge-project__container" class="mb-2 pt-4">
    <b-row class="mx-0">
      <b-col cols="12" class="mb-5">
        <h1 class="charge-project__title">Propuestas - Cobrar proyecto</h1>
      </b-col>
      <b-col cols="12" lg="7" class="mb-3">
        <h5>Información del proyecto</h5>
        <div>
          <b-card class="project-card">
            <div class="d-flex flex-wrap flex-md-nowrap">
              <span class="w-100 mb-3">
                <b class="me-2">Cliente: </b>
                Albert Perez
              </span>
              <span class="w-100 mb-3">
                <b class="me-2">Se necesita: </b>
                <span class="badge__item d-inline-flex">Pintor</span>
              </span>
            </div>
            <div class="d-flex flex-wrap flex-md-nowrap">
              <span class="w-100 mb-3">
                <b class="me-2">Ubicación: </b>
                Ventanilla
              </span>
              <span class="w-100 mb-3">
                <b class="me-2">Fecha de Solicitud: </b>
                12/01/2023
              </span>
            </div>
            <router-link
              :to="{ name: 'project-detail', params: { projectId: 1 } }"
              >Ver mas detalles del proyecto</router-link
            >
          </b-card>
        </div>
      </b-col>
      <b-col cols="12" lg="5" class="mb-3">
        <h5>Detalle del pago</h5>
        <div>
          <b-card class="project-card">
            <div class="d-flex align-items-center">
              <b>Monto a pagar:</b>
              <div class="ms-2">
                <b-form-input
                  v-model="chargeAmount"
                  placeholder="Monto a pagar"
                ></b-form-input>
              </div>
            </div>
            <div class="mt-3">
              <b class="me-2">Total a pagar: </b>
              S/. {{ chargeAmount }}
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col cols="12" :lg="statusFlow == 0 ? 7 : 12" class="mb-4">
        <payment-options
          v-if="statusFlow == 0"
          @on-pay-now="payNow"
        ></payment-options>
        <payment-action
          v-else
          :type-charge="typeCharge"
          @cancel-pay-now="cancelPayNow"
        ></payment-action>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import { PaymentOptions, PaymentAction } from "./components"

export default defineComponent({
  components: {
    PaymentOptions,
    PaymentAction,
  },
  setup() {
    const chargeAmount = ref(0)

    // START - FLUJO DE PAGO
    const statusFlow = ref(0) // 0 - Opciones , 1 - Accion
    const typeCharge = ref(0)
    const payNow = (type: number) => {
      typeCharge.value = type
      statusFlow.value = 1
    }
    const cancelPayNow = () => {
      typeCharge.value = 0
      statusFlow.value = 0
    }

    // FINISH - FLUJO DE PAGO

    return {
      // PARAMS
      chargeAmount,
      statusFlow,
      typeCharge,

      // METHODS
      payNow,
      cancelPayNow,
    }
  },
})
</script>

<style scoped lang="scss">
.project-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
}
#charge-project__container {
  .charge-project__title {
    font-size: 1.6rem;
  }
}
</style>
