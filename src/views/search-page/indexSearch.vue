<template>
  <div class="ln-pt">
    <b-container>
      <div class="panel filter">
        <div class="panel-heading" v-b-toggle.collapse-1>
          Opciones de Búsqueda<i class="fa fa-search" />
        </div>
        <b-collapse id="collapse-1">
          <div class="panel-body">
            <b-form-row>
              <b-col>
                <b-form-group label="Categoria">
                  <v-select
                    multiple
                    push-tags
                    v-model="selected"
                    :options="[
                      'Albañil',
                      'Electricista',
                      'Gasfitero',
                      'Pintor',
                    ]"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Especialidad">
                  <v-select
                    multiple
                    push-tags
                    v-model="selected"
                    :options="['Todas', 'Alarmas', 'Cableado']"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Ubicación">
                  <v-select
                    multiple
                    push-tags
                    v-model="selected"
                    :options="[
                      'Lima Norte',
                      'Lima Sur',
                      'Lima Este',
                      'Lima Oeste',
                      'Callao',
                    ]"
                  />
                </b-form-group>
              </b-col>
              <b-col style="align-self: flex-end">
                <b-form-group>
                  <b-button variant="outline-primary" size="sm"
                    >Más filtros</b-button
                  >
                </b-form-group>
              </b-col>
            </b-form-row>
            <div></div>
          </div>
        </b-collapse>
      </div>
      <b-card class="card_profesional">
        <b-row>
          <b-col md="3">
            <div class="img_profile">
              <b-img :src="imgProfile"></b-img>
              <i class="fa fa-heart-o" />
            </div>
            <b-form-rating
              :value="4"
              :v-model="2"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <p class="total-rating text-center">
              4.7 <span>(13 valoraciones)</span>
            </p>
          </b-col>
          <b-col md="9">
            <div class="datos">
              <h2>
                Pedro Ramirez Estrada
                <b-icon class="verified" icon="check-circle-fill" />
              </h2>
              <div class="tags">
                <b-link>Carpintero</b-link>
                <b-link>Gasfitero</b-link>
                <b-link>Electricista</b-link>
              </div>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <div class="btn-page">
                <b-button class="mr-2" variant="primary">Ver Perfil</b-button>
                <b-button variant="success">Cotizar</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-card class="card_profesional">
        <b-row>
          <b-col md="3">
            <div class="img_profile">
              <b-img :src="imgProfile"></b-img>
              <i class="fa fa-heart" />
            </div>
            <b-form-rating
              :value="4"
              :v-model="2"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <p class="total-rating text-center">
              4.7 <span>(13 valoraciones)</span>
            </p>
          </b-col>
          <b-col md="9">
            <div class="datos">
              <h2>
                Pedro Ramirez Estrada
                <b-icon class="verified" icon="check-circle-fill" />
              </h2>
              <div class="tags">
                <b-link>Carpintero</b-link>
                <b-link>Gasfitero</b-link>
                <b-link>Electricista</b-link>
              </div>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <div class="btn-page">
                <b-button class="mr-2" variant="primary">Ver Perfil</b-button>
                <b-button variant="success">Cotizar</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
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
  methods: {
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
    },
  },
};
</script>

<style></style>
