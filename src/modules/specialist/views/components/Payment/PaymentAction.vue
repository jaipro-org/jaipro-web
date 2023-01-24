<template>
  <div>
    <h5>Pagar con: {{ typeChargeCase() }}</h5>

    <b-row class="mt-3 mx-0 pay-action__content">
      <tempalte v-if="typeCharge == 1 || typeCharge == 2">
        <div class="d-flex justify-content-center flex-wrap">
          <img class="pay-action__img" src="@/assets/img/qr-code.png" alt="" />
          <h5 class="pay-action__code mt-3">XYA45C</h5>
        </div>
      </tempalte>
      <tempalte v-else-if="typeCharge == 3">
        <b-col cols="12" md="9" lg="6" class="mx-auto">
          <acount-bank bank-name="BCP" class="mb-4"></acount-bank>
          <acount-bank bank-name="BCP" class="mb-4"></acount-bank>
          <acount-bank bank-name="BCP" class="mb-4"></acount-bank>
        </b-col>
      </tempalte>
      <template v-else>
        <b-col cols="12" md="9" class="mx-auto">
          Recomendaciones:
          <p class="ms-2">
            - Asegurese que el monto cobrado sea igual al que ingreso en la
            sección de "Detalle de Pago"
          </p>
        </b-col>
      </template>
    </b-row>

    <tempalte v-if="typeCharge != 4">
      <div class="d-flex justify-content-between mt-4">
        <b-button @click="$emit('cancel-pay-now')"
          ><i class="fa-solid fa-chevron-left me-1"></i>Volver</b-button
        >
        <b-button variant="primary" @click="goWSP"
          ><i class="fa-brands fa-whatsapp me-2"></i>Enviar
          comprobante</b-button
        >
      </div>
      <div class="text-center mt-4">
        ¿Ya enviaste el comprobante de pago?
        <span class="pay-action__btn-confirm" @click="showModal = true"
          >Confirmar envío</span
        >
      </div>
    </tempalte>
    <template v-else>
      <div class="d-flex justify-content-between mt-4">
        <b-button @click="$emit('cancel-pay-now')"
          ><i class="fa-solid fa-chevron-left me-1"></i>Volver</b-button
        >
        <b-button variant="primary"
          ><i class="fa-solid fa-money-bill me-2"></i>Confirmar cobro</b-button
        >
      </div>
    </template>
  </div>
  <b-modal v-model="showModal" title="Confirmar envío de comprobante">
    <div>
      ¿Estas seguro(a) de confirmar el envío del comprobante de pago?, después
      de esta acción vamos a verificar el pago, este proceso puede tardar entre
      15 - 20 minutos.
    </div>
    <template v-slot:footer>
      <div class="d-flex justify-content-between w-100">
        <b-button variant="secondary" @click="showModal = false"
          >Cerrar</b-button
        >
        <b-button variant="primary" @click="confirmPay">Enviar</b-button>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { AcountBank } from "../index"

export default defineComponent({
  components: {
    AcountBank,
  },
  props: {
    typeCharge: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const typeChargeCase = () => {
      let caseName = "Yape"

      switch (props.typeCharge) {
        case 1:
          caseName = "Yape"
          break
        case 2:
          caseName = "Plin"
          break
        case 3:
          caseName = "Transferencias o depósitos"
          break
        case 4:
          caseName = "Efectivo"
          break
        default:
          caseName = "Plin"
          break
      }

      return caseName
    }

    const goWSP = () => {
      window.open("https://web.whatsapp.com/")
    }

    // START - FLUJO PARA LA CONFIRMACIÓN  DEL PAGO
    const showModal = ref(false)
    const confirmPay = () => {
      console.log("se confirmara el pago")
    }

    // FINISH - FLUJO PARA LA CONFIRMACIÓN  DEL PAGO

    return {
      // PARAMS
      showModal,
      // METHODS
      typeChargeCase,
      goWSP,
      confirmPay,
    }
  },
})
</script>

<style scoped lang="scss">
.pay-action__content {
  background-color: white;
  border: 3px solid rgb(145, 145, 145);
  border-radius: 20px;
  min-height: 30px;
  display: flex;

  justify-content: center;
  padding: 30px 15px;

  .pay-action__img {
    width: 100%;
    max-width: 190px;
    max-height: 190px;
    text-align: center;
    object-fit: cover;
    border: 3px solid rgb(145, 145, 145);
    border-radius: 6px;
  }

  .pay-action__code {
    width: 100%;
    font-weight: 700;

    font-size: 1.2rem;
    text-align: center;
  }
}

.pay-action__btn-confirm {
  color: rgb(59, 59, 250);
  cursor: default;
  &:hover {
    text-decoration: underline;
  }
}
</style>
