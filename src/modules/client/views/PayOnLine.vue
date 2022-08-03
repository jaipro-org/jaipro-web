<template>
  <div class="pay-online__container pt-4 pb-4">
    <h1 class="pay-online__title text-center">Pago Online</h1>
    <b-row class="mx-0">
      <b-col cols="12" md="9" class="mx-auto">
        <b-card class="pay-online__card mt-4">
          <h1 class="pay-online__title2-card text-center">
            Puedes realizar tus pagos por medio de las plataformas digitales
          </h1>
          <b-row class="mx-0 justify-content-around mt-4">
            <b-col cols="12" md="4" class="mb-3 mb-md-1">
              <h2 class="pay-online__subtitle-card text-center">
                YAPE, TUNKI, PLIN
              </h2>
              <div class="d-flex justify-content-around mt-4 flex-wrap">
                <div class="pay-online__image-payvirtual mb-3 mx-1">
                  <img src="@/assets/img/pagos/plin.png" alt="" />
                </div>
                <div class="pay-online__image-payvirtual mx-1">
                  <img src="@/assets/img/pagos/yape.png" alt="" />
                </div>
                <div class="pay-online__image-payvirtual mx-1">
                  <img src="@/assets/img/pagos/tunki.png" alt="" />
                </div>
              </div>
            </b-col>
            <b-col cols="12" md="4" class="mb-3 mb-md-1">
              <h2 class="pay-online__subtitle-card text-center">
                Depositos o transferencias
              </h2>
              <div class="d-flex justify-content-around mt-4 flex-wrap">
                <div class="pay-online__image-pay mb-3">
                  <img src="@/assets/img-delete/visa-logo.jpg" alt="" />
                </div>
                <div class="pay-online__image-pay">
                  <img
                    src="@/assets/img/pagos/americaexpress-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="mt-5">
            <h1 class="pay-online__title2-card">Pasos para realizar el pago</h1>
            <div class="steps-list mt-4">
              <step-card title="Paso 1">
                <template v-slot>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    omnis sint? Voluptates perferendis voluptatibus ratione.
                  </p>
                </template>
              </step-card>
              <step-card title="Paso 2">
                <template v-slot>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit autem debitis modi eum rerum culpa
                    perspiciatis! Quibusdam saepe nostrum deserunt rerum sint
                    officia repellendus, quos id dolorum. Architecto quis
                    laborum nemo ipsa minima voluptas nulla enim suscipit,
                    asperiores ex perspiciatis assumenda inventore iusto, quas
                    neque pariatur velit tempore temporibus porro iure
                    reprehenderit eum. Fugit autem quis quod non molestias
                    quibusdam!
                  </p>
                </template>
              </step-card>
              <step-card title="Paso 3">
                <template v-slot>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni aperiam id autem, sit laudantium nostrum voluptas quam
                    temporibus, quod corrupti, cum quas ea accusantium iure quis
                    perspiciatis sed quo officia.
                  </p>
                </template>
              </step-card>
            </div>
          </div>
          <div class="mt-5 pay-online__timer text-center">
            <i class="fa-regular fa-clock mr-2"></i>{{ timerData }}
          </div>
          <div class="text-center mt-4">
            <b-button variant="primary"
              ><i class="fa-brands fa-whatsapp mr-2"></i>Enviar
              comprobante</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { alertError2, closeAlert } from "@/utils/SweetAlert";
import StepCard from "@/modules/client/views/Components/StepCard.vue";
import { computed, onBeforeUnmount, onMounted } from "vue";

const timerSeconds = 0;
const timerMinutes = 0;
const timeOut: any = null;

onMounted(() => {
  this.startTimer();
});

onBeforeUnmount(() => {
  if (this.timeOut) {
    clearTimeout(this.timeOut);
  }
});

function startTimer() {
  this.timerSeconds += 1;
  if (this.timerSeconds == 60) {
    this.timerSeconds = 0;
    this.timerMinutes += 1;
  }

  if (this.timerMinutes == 1) {
    alertError2("El tiempo de espera fue excedido");
    setTimeout(() => {
      this.$router.push({ name: "home" });
      closeAlert();
    }, 2000);
    return;
  }

  this.timeOut = setTimeout(() => {
    this.startTimer();
  }, 1000);
}

const timerData = computed(() => {
  return `${this.timerMinutes}m ${this.timerSeconds}s`;
});
</script>

<style lang="scss" scoped>
.pay-online__container {
  .pay-online__title {
    font-size: 1.9rem;
  }

  .pay-online__card {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

    .pay-online__title-card {
      font-size: 1.3rem;
    }

    .pay-online__title2-card {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .pay-online__subtitle-card {
      font-size: 1.1rem;
    }

    .pay-online__image-pay {
      width: 100px;
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .pay-online__image-payvirtual {
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

    .pay-online__timer {
      font-size: 1.2rem;
    }
  }
}
</style>
