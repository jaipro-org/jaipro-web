<template>
  <div class="ln-pt">
    <b-container>
      <b-card class="card_profesional">
        <b-row>
          <b-col md="3">
            <div class="img_profile">
              <b-img :src="imgProfile"></b-img>
            </div>
          </b-col>
          <b-col md="9">
            <div class="datos">
              <h2>
                Pedro Ramirez Estrada
                <b-icon class="verified" icon="check-circle-fill" />
                <div class="save h5 mb-0">
                  <i class="fa fa-heart-o me-2" />Guardar
                </div>
              </h2>
              <div class="tags">
                <b-link>Carpintero</b-link>
                <b-link>Gasfitero</b-link>
                <b-link>Electricista</b-link>
              </div>
              <div class="d-flex align-items-center mb-3">
                <b-form-rating
                  :value="4"
                  :v-model="2"
                  variant="warning"
                ></b-form-rating>
                <p class="total-rating text-center">
                  <span>(13 valoraciones)</span>
                </p>
              </div>
              <div class="btn-page">
                <b-button class="me-2" variant="primary"
                  >Directo a cotizar</b-button
                >
              </div>
              <b-button-group>
                <b-button class="active">bio</b-button>
                <b-button>precios</b-button>
                <b-button>opiniones</b-button>
                <b-button>galeria</b-button>
              </b-button-group>
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <h4 class="card-title">Resumen</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </b-card>
      <b-card>
        <div class="title-logo">
          <img src="@/assets/img/logo5.png" />
          <div>
            <h3>Construcción y Arquitectura</h3>
            <h5>Años en el sector: 5 años</h5>
          </div>
        </div>
        <h4 class="card-title">Especialidades</h4>
        <ul class="list-dots">
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
        </ul>
      </b-card>
      <b-card>
        <div class="title-logo">
          <img src="@/assets/img/logo5.png" />
          <div>
            <h3>Construcción y Arquitectura</h3>
            <h5>Años en el sector: 10 años</h5>
          </div>
        </div>
        <h4 class="card-title">Especialidades</h4>
        <ul class="list-dots">
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
          <li>Concreto / Armado</li>
          <li>Servicios Generales</li>
        </ul>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import imgProfile from "@/assets/img/profile.png";
export default {
  components: {},
  data() {
    return {
      imgProfile: imgProfile,
    };
  },
  methods: {},
};
</script>

<style></style>
