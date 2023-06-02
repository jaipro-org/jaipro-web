<template>
  <div class="pt-4">
    <b-container>
      <div class="panel-f filter">
        <div class="panel-heading">
          Opciones de Búsqueda<i class="fa fa-search" />
        </div>
        <div>
          <div class="panel-body">
            <b-form-row>
              <b-col>
                <b-form-group label="Profesion">
                  <v-select
                    multiple
                    push-tags
                    v-model="dataSearch.professionID"
                    :options="listProfession"
                    :reduce="(option:any) => option.value"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Especialidad">
                  <v-select
                    multiple
                    push-tags
                    v-model="dataSearch.specialitiesID"
                    :options="listSpecialities"
                    :reduce="(option:any) => option.value"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Ubicación">
                  <v-select
                    multiple
                    push-tags
                    v-model="dataSearch.districtsID"
                    :options="listDistrict"
                    :reduce="(option:any) => option.value"
                  />
                </b-form-group>
              </b-col>
              <b-col style="align-self: flex-end">
                <b-form-group>
                  <b-button variant="outline-primary" size="sm" @click="search"
                    >Buscar</b-button
                  >
                </b-form-group>
              </b-col>
            </b-form-row>
            <div></div>
          </div>
        </div>
      </div>
      <b-card class="card_profesional">
        <b-row>
          <b-col md="3" class="cardH">
            <div class="img_profile">
              <b-img :src="imgProfile"></b-img>
              <i class="fa fa-heart-o" />
            </div>
            <div
              class="b-rating form-control align-items-center mb-2 px-2 text-center align-middle"
            >
              <star-rating></star-rating>
            </div>
            <p class="total-rating text-center">
              4.7 <span>(13 valoraciones)</span>
            </p>
          </b-col>
          <b-col md="9">
            <div class="datos">
              <h2>
                Pedro Ramirez Estrada
                <i class="fa-solid fa-circle-check checkAjust"></i>
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
                <b-button
                  class="me-2"
                  variant="primary"
                  @click="$router.push({ name: 'specialist' })"
                  >Ver Perfil</b-button
                >
                <b-button variant="success" class="btn-invert"
                  >Cotizar</b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-card class="card_profesional">
        <b-row>
          <b-col md="3" class="cardH">
            <div class="img_profile">
              <b-img :src="imgProfile"></b-img>
              <i class="fa fa-heart" />
            </div>
            <div
              class="b-rating form-control align-items-center mb-2 px-2 text-center align-middle"
            >
              <star-rating></star-rating>
            </div>
            <p class="total-rating text-center">
              4.7 <span>(13 valoraciones)</span>
            </p>
          </b-col>
          <b-col md="9">
            <div class="datos">
              <h2>
                Pedro Ramirez Estrada
                <i class="fa-solid fa-circle-check checkAjust"></i>
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
                <b-button
                  class="me-2"
                  variant="primary"
                  @click="$router.push({ name: 'specialist' })"
                  >Ver Perfil</b-button
                >
                <b-button variant="success" class="btn-invert"
                  >Cotizar</b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import profileImg from "@/assets/img/profile.png";
import StarRating from "@/shared/components/public/StarRating.vue";
import { ref, onMounted, watch } from "vue";
import { GeneralServices } from "@/services/api/generalServices";
import {
  typeFilter,
  dataForSearch,
  option,
} from "@/interfaces/SearchSpecialist.interfaces";

const { getFilterSpecialist } = new GeneralServices();

const imgProfile = ref(profileImg);
const dataTypeFilter = ref<typeFilter>();
const listProfession = ref<Array<option>>();
const listSpecialities = ref<Array<option>>();
const listDistrict = ref<Array<option>>();
const dataSearch = ref<dataForSearch>({
  professionID: [],
  specialitiesID: [],
  districtsID: [],
});

watch(
  () => dataSearch.value.professionID,
  () => {
    const filteredData =
      dataTypeFilter.value?.specialities.filter((item) =>
        dataSearch.value.professionID.includes(item.professionId)
      ) || [];

    listSpecialities.value = filteredData.map((data) => {
      return {
        value: data.id,
        label: data.name,
      };
    });
  },
  {
    deep: true,
  }
);

onMounted(async () => {
  await fetchTypeFilter();
  listProfessionFilter();
  listDistrictFilter();
});

async function fetchTypeFilter() {
  try {
    dataTypeFilter.value = await getFilterSpecialist();
  } catch (error) {}
}

function listProfessionFilter() {
  listProfession.value = dataTypeFilter.value?.professions.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
}

function listDistrictFilter() {
  listDistrict.value = dataTypeFilter.value?.districts.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
}

function search() {
  console.log(dataSearch.value);
}
</script>

<style lang="scss" scoped>
.btn-invert {
  border-color: #f60;
}
.btn-invert:hover {
  border-color: #3a88ec !important;
}
.checkAjust {
  font-size: 1.2rem;
  color: #0d6efd;
  margin-left: 10px;
}
.panel-f {
  border-radius: 0;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.b-rating-container {
  position: relative;
  top: 20%;
}
@media (max-width: 1400px) {
  .cardH {
    height: 100%;
  }
}

@media (max-width: 767px) {
  .cardH {
    height: auto;
    margin-bottom: 20px;
  }
}
</style>
