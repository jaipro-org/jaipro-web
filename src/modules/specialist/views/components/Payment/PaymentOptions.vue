<template>
  <div>
    <h5>{{ title }}</h5>
    <div>
      <b-card class="project-card">
        <div class="d-flex align-items-center pay-option__type mb-4">
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
              src="@/assets/img/pagos/yape.png"
              alt=""
              class="d-flex pay-option__type-image"
            />
          </div>
        </div>
        <hr />
        <div class="d-flex align-items-center pay-option__type mb-4">
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
            <span>Plin</span>
            <img
              src="@/assets/img/pagos/plin.png"
              alt=""
              class="d-flex pay-option__type-image"
            />
          </div>
        </div>
        <hr />
        <div class="d-flex align-items-center pay-option__type mb-4">
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
            <span>Transferencia o deposito(BCP, BBVA, Interbank)</span>
            <img
              src="@/assets/img/pagos/americaexpress-logo.png"
              alt=""
              class="d-flex pay-option__type-image"
            />
          </div>
        </div>
        <hr />
        <div
          class="d-flex align-items-center pay-option__type mb-4"
          v-if="haveCash"
        >
          <b-form-radio
            v-model="typeCharge"
            name="some-radios"
            :value="4"
            class="d-block"
          >
          </b-form-radio>
          <div
            class="d-flex justify-content-between align-items-center w-100"
            @click="typeCharge = 4"
          >
            <span>Efectivo</span>
            <i class="fa-regular fa-money-bill-1 pay-option__type-icon"></i>
          </div>
        </div>
      </b-card>
    </div>
    <div class="d-flex justify-content-between">
      <b-button variant="secondary">
        <i class="fa-solid fa-chevron-left me-1"></i>Volver</b-button
      >
      <b-button
        variant="primary"
        :disabled="typeCharge == 0"
        @click="$emit('on-pay-now', typeCharge)"
      >
        Pagar ahora</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Pagar con",
    },
    haveCash: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const typeCharge = ref(0)
    return {
      // PARAMS
      typeCharge,
    }
  },
})
</script>

<style scoped lang="scss">
.project-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
}
.pay-option__type {
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
</style>
