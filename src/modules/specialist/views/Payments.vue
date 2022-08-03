<template>
  <div id="payments__container" class="mb-2 pt-4">
    <h1 class="payments__title">Mis pagos - Realizar pagos</h1>
    <b-row class="mx-0 pt-2">
      <b-col cols="12" class="mb-3 mb-md-1 px-0">
        <b-card class="payments__card">
          <h1 class="payments__title-card">Información del cliente</h1>
          <b-row class="mx-0 pt-2">
            <b-col cols="12" md="8" class="mt-3">
              <b-form-group
                label-cols="12"
                label-cols-lg="4"
                label="Nombre cliente"
              >
                <b-form-input v-model="client.name" disabled></b-form-input>
              </b-form-group>
              <b-form-group
                label-cols="12"
                label-cols-lg="4"
                label="Categoria de servicio"
              >
                <b-form-input v-model="client.category" disabled></b-form-input>
              </b-form-group>
              <b-form-group
                label-cols="12"
                label-cols-lg="4"
                label="Especialidad de servicio"
              >
                <b-form-input
                  v-model="client.speciality"
                  disabled
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label-cols="12"
                label-cols-lg="4"
                label="Lugar de servicio"
              >
                <b-form-input v-model="client.location" disabled></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" class="mb-3 mb-md-1 px-0">
        <b-card class="payments__card">
          <h1 class="payments__title2-card text-center">
            Puedes realizar tus pagos por medio de las plataformas digitales
          </h1>
          <b-row class="mx-0 justify-content-around mt-4">
            <b-col cols="12" md="4" class="mb-3 mb-md-1">
              <h2 class="payments__subtitle-card text-center">
                YAPE, TUNKI, PLIN
              </h2>
              <div class="d-flex justify-content-around mt-4 flex-wrap">
                <div class="payments__image-payvirtual mb-3 mx-1">
                  <img src="@/assets/img/pagos/plin.png" alt="" />
                </div>
                <div class="payments__image-payvirtual mx-1">
                  <img src="@/assets/img/pagos/yape.png" alt="" />
                </div>
              </div>
            </b-col>
            <b-col cols="12" md="4" class="mb-3 mb-md-1">
              <h2 class="payments__subtitle-card text-center">
                Depositos o transferencias
              </h2>
              <div class="d-flex justify-content-around mt-4 flex-wrap">
                <div class="payments__image-pay mb-3">
                  <img src="@/assets/img-delete/visa-logo.jpg" alt="" />
                </div>
                <div class="payments__image-pay">
                  <img
                    src="@/assets/img/pagos/americaexpress-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" class="mb-3 mb-md-1 px-0">
        <b-card class="payments__card">
          <h1 class="payments__title-card">Detalle de pago</h1>
          <div class="mt-3">
            <b-table
              bordered
              striped
              hover
              responsive
              :items="items"
              :fields="fields"
            >
              <template #cell(amount_charged)="data">
                <span>$ {{ data.value }}</span>
              </template>
              <template #cell(comission_payment)="data">
                <span>$ {{ data.value }}</span>
              </template>
            </b-table>
          </div>
          <b-form @submit.prevent="sendPay" validated>
            <b-row class="mx-0">
              <b-col cols="12" md="5">
                <b-form-group
                  id="group-bank-select"
                  label="Banco"
                  label-for="bank-select"
                >
                  <b-form-select
                    v-model="form.bank"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  id="group-number"
                  label="Número de operaciones"
                  label-for="input-number"
                  required
                >
                  <b-form-input
                    id="input-number"
                    v-model="form.numberOperation"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="7">
                <div for="asd" class="mr-5">Comprobante de pago</div>
                <span
                  class="info"
                  :class="cantImages ? 'info-success' : 'info-danger'"
                  >*Este campo es obligatorio</span
                >
                <div class="">
                  <UploadImages
                    @changed="handleImages"
                    class="create-experience-img-input mt-2"
                    :max="1"
                    maxError="Número máximo de 1 imagenes excedido"
                    uploadMsg="Selecciona una imagen o"
                    otherMsg="Suelte una imagen aquí"
                    fileError="Solo se permiten archivos jpg o png"
                    clearAll="Eliminar todo"
                  />
                </div>
              </b-col>
            </b-row>
            <button type="submit" ref="form-button" class="d-none">
              submit
            </button>
          </b-form>
        </b-card>
      </b-col>
      <b-col cols="12" class="d-flex mb-5 px-0 justify-content-center">
        <b-button size="lg" class="mx-3" variant="secondary">Volver</b-button>
        <b-button
          size="lg"
          variant="primary"
          class="mx-3"
          @click="$refs['form-button'].click()"
          >Pagar
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import {
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "@/utils/SweetAlert";
import UploadImages from "@/shared/components/UploadDropImages.vue";
import { computed } from "vue";

const eventImages: Array<any> = [];
const form: any = {
  bank: 0,
  numberOperation: "",
};
const client: any = {
  name: "Alberto Perez",
  category: "Pintor",
  speciality: "Pintura de interiores",
  location: "Los Olivos, lima Peru",
};
const fields: Array<any> = [
  {
    key: "code_payment",
    label: "Código de pago",
  },
  {
    key: "amount_charged",
    label: "Monto cobrado",
  },
  {
    key: "comission_payment",
    label: "Comisión a pagar",
  },
];
const items: Array<any> = [
  { code_payment: "ABD12345", amount_charged: "1200", comission_payment: "30" },
];
const options: Array<any> = [
  { value: 0, text: "BCP" },
  { value: 1, text: "BBVA" },
  { value: 2, text: "INTERBANK" },
];

const cantImages = computed(() => {
  return this.eventImages.length > 0 ? true : false;
});

function handleImages(files: any) {
  this.eventImages = files;
}

function sendPay();

{
  console.log("realizar pago");
  if (this.cantImages) {
    alertLoading();
    const timeOut = setTimeout(() => {
      alertSuccessfully("Se envio el pago exitosamente");
      const timeOut2 = setTimeout(() => {
        closeAlert();
        clearTimeout(timeOut2);
      }, 1500);
      clearTimeout(timeOut);
    }, 1500);
  }
}
</script>

<style lang="scss" scoped>
#payments__container {
  .payments__title {
    font-size: 1.5rem;
  }

  .payments__card {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

    .payments__title-card {
      font-size: 1.3rem;
    }

    .payments__title2-card {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .payments__subtitle-card {
      font-size: 1.1rem;
    }

    .payments__image-pay {
      width: 100px;
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .payments__image-payvirtual {
      width: 70px;
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      }
    }

    .info {
      font-size: 0.9rem;

      & .info-success {
        color: rgb(64, 231, 114);
      }

      & .info-danger {
        color: rgb(255, 51, 85);
      }
    }
  }
}

input {
  border-radius: 25px;
}

input:disabled {
  border-radius: 25px;
  background-color: #e9ecef !important;
}
</style>
