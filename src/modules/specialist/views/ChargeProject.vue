<template>
  <div id="charge-project__container" class="mb-2 pt-4">
    <h1 class="charge-project__title">Propuestas - Cobrar proyecto</h1>

    <b-row class="mx-0 mt-4">
      <b-col cols="12" lg="7" class="mb-3">
        <h5>Información del proyecto</h5>
        <div>
          <b-card>
            <div class="d-flex flex-wrap flex-md-nowrap">
              <span class="w-100 mb-3">
                <b>Cliente: </b>
                Albert Perez
              </span>
              <span class="w-100 mb-3">
                <b>Se necesita: </b>
                Pintor
              </span>
            </div>
            <div class="d-flex flex-wrap flex-md-nowrap">
              <span class="w-100 mb-3">
                <b>Ubicación: </b>
                Ventanilla
              </span>
              <span class="w-100 mb-3">
                <b>Fecha de Solicitud: </b>
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
          <b-card>
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
              <b>Total a pagar: </b>
              S/. {{ chargeAmount }}
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col cols="12" lg="7" class="mb-4">
        <h5>Pagar con</h5>
        <div>
          <b-card>
            <div class="d-flex align-items-center charge-project__type mb-4">
              <b-form-radio
                v-model="typeCharge"
                name="some-radios"
                :value="1"
                class="d-block"
              >
              </b-form-radio>
              <div
                class="d-flex justify-content-between align-items-center w-100"
                @click="typeCharge = 1"
              >
                <span>Yape</span>
                <img
                  src="../../../../src/assets/img/pagos/yape.png"
                  alt=""
                  class="d-flex charge-project__type-image"
                />
              </div>
            </div>
            <hr />
            <div class="d-flex align-items-center charge-project__type mb-4">
              <b-form-radio
                v-model="typeCharge"
                name="some-radios"
                :value="2"
                class="d-block"
              >
              </b-form-radio>
              <div
                class="d-flex justify-content-between align-items-center w-100"
                @click="typeCharge = 2"
              >
                <span>Transferencia o deposito(BCP, BBVA, Interbank)</span>
                <img
                  src="../../../../src/assets/img/pagos/americaexpress-logo.png"
                  alt=""
                  class="d-flex charge-project__type-image"
                />
              </div>
            </div>
            <hr />
            <div class="d-flex align-items-center charge-project__type mb-4">
              <b-form-radio
                v-model="typeCharge"
                name="some-radios"
                :value="3"
                class="d-block"
              >
              </b-form-radio>
              <div
                class="d-flex justify-content-between align-items-center w-100"
                @click="typeCharge = 3"
              >
                <span>Efectivo</span>
                <i
                  class="fa-regular fa-money-bill-1 charge-project__type-icon"
                ></i>
              </div>
            </div>
          </b-card>
        </div>
        <div class="d-flex justify-content-between">
          <b-button variant="secondary"> Volver</b-button>
          <b-button variant="primary"> Pagar ahora</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"

export default defineComponent({
  components: {},
  setup() {
    const chargeAmount = ref(0)
    const typeCharge = ref(0)
    return {
      // PARAMS
      chargeAmount,
      typeCharge,
    }
  },
})
</script>

<style scoped lang="scss">
#charge-project__container {
  .charge-project__title {
    font-size: 1.6rem;
  }

  .charge-project__type {
    &-image {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
    &-icon {
      color: rgb(58, 110, 255);
      font-size: 2.3rem;
    }
  }
}
</style>
