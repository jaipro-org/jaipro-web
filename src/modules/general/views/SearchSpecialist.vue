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
                    v-model="paramsSearch.professionID"
                    :options="listProfession"
                    :reduce="(option:any) => option.value"
                    placeholder="Seleccione"
                  >
                    <template v-slot:no-options>Cargando...</template>
                  </v-select>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Especialidad">
                  <v-select
                    multiple
                    push-tags
                    v-model="paramsSearch.specialitiesID"
                    :options="listSpecialities"
                    :reduce="(option:any) => option.value"
                    placeholder="Seleccione"
                  >
                    <template v-slot:no-options
                      >Seleccione una profesion</template
                    >
                  </v-select>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Ubicación">
                  <v-select
                    multiple
                    push-tags
                    v-model="paramsSearch.districtsID"
                    :options="listDistrict"
                    :reduce="(option:any) => option.value"
                    placeholder="Seleccione"
                  >
                    <template v-slot:no-options>Cargando...</template>
                  </v-select>
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
      <div>
        <div v-if="loading">Cargando datos...</div>
        <div v-else-if="dataFromSearch.length === 0">
          <p>No hay datos para mostrar.</p>
        </div>
        <div v-else>
          <b-card
            class="card_profesional"
            v-for="(data, index) in dataFromSearch"
            :key="index"
          >
            <b-row>
              <b-col md="3" class="cardH">
                <div class="img_profile">
                  <b-img :src="data.photo || profileImg"></b-img>
                  <i class="fa fa-heart-o" />
                </div>
                <div
                  class="b-rating form-control align-items-center mb-2 px-2 text-center align-middle"
                >
                  <star-rating :total-stars="3"></star-rating>
                </div>
                <p class="total-rating text-center">
                  4.7 <span>(13 valoraciones)</span>
                </p>
              </b-col>
              <b-col md="9">
                <div class="datos">
                  <h2>
                    {{ data.fullName }}
                    <i class="fa-solid fa-circle-check checkAjust"></i>
                  </h2>
                  <div class="tags">
                    <b-link>{{ data.professions }}</b-link>
                  </div>
                  <p class="card-text">
                    {{ data.about }}
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
          <b-pagination
            v-model="pageNumber"
            :total-rows="totalRows"
            :per-page="pageSize"
            first-number
            last-number
            align="center"
          ></b-pagination>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import profileImg from "@/assets/img-delete/profile.jpg";
import StarRating from "@/shared/components/public/StarRating.vue";
import { ref, onMounted, watch } from "vue";
import { GeneralServices } from "@/services/api/generalServices";
import {
  typeFilter,
  paramsSearchs,
  dataFromSearchs,
  option,
} from "@/interfaces/SearchSpecialist.interfaces";

const { getFilterSpecialist, getSearch } = new GeneralServices();

const loading = ref(true);
const dataFromSearch = ref<Array<dataFromSearchs>>([]);
const dataTypeFilter = ref<typeFilter>();
const listProfession = ref<Array<option>>();
const listSpecialities = ref<Array<option>>();
const listDistrict = ref<Array<option>>();
const paramsSearch = ref<paramsSearchs>({
  professionID: [],
  specialitiesID: [],
  districtsID: [],
});
const pageNumber = ref(1);
const pageSize = ref(10);
const totalRows = ref(0)

//Ejecuta cuando se monta la pagina
onMounted(async () => {
  await fetchTypeFilter();
  listProfessionFilter();
  listDistrictFilter();
  await search();
});
//observa el Array de professionID
watch(
  () => paramsSearch.value.professionID,
  () => {
    //lista las especialidades dependiendo la cantidad de profesiones seleccionadas
    const filteredData =
      dataTypeFilter.value?.specialities.filter((item) =>
        paramsSearch.value.professionID.includes(item.professionId)
      ) || [];

    //Formato de datos para ser mostrato en el option de especialidad
    listSpecialities.value = filteredData.map((data) => {
      return {
        value: data.id,
        label: data.name,
      };
    });

    //Borra las especialidades asociadas a la profesion eliminada
    paramsSearch.value.specialitiesID =
      paramsSearch.value.specialitiesID.filter((id) =>
        listSpecialities.value?.some((data) => data.value === id)
      );
  },
  {
    deep: true,
  }
);

//Obtiene los datos para usar como parametros de busqueda
async function fetchTypeFilter() {
  try {
    dataTypeFilter.value = await getFilterSpecialist();
  } catch (error) {}
}

//Formato para usar en option Profession
function listProfessionFilter() {
  listProfession.value = dataTypeFilter.value?.professions.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
}

//Formato para usar en option Ubicacion
function listDistrictFilter() {
  listDistrict.value = dataTypeFilter.value?.districts.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
}

//Se envia la busqueda
async function search() {
  loading.value = true;
  const payload = {
    sortColumn: "string",
    sortDirection: "string",
    pageSize: pageSize.value,
    pageNumber: pageNumber.value,
    enabled: true,
    categories: paramsSearch.value.professionID.join(","),
    specialties: paramsSearch.value.specialitiesID.join(","),
    districts: paramsSearch.value.districtsID.join(","),
  };
  const params = `
    ?categories=${payload.categories}&
    specialties=${payload.specialties}&
    districts=${payload.districts}&
    pageNumber=${payload.pageNumber}&
    pageSize=${payload.pageSize}&
    sortColumn=string&
    sortDirection=string`;

  dataFromSearch.value = await getSearch(params);
  totalRows.value = dataFromSearch.value.length
  loading.value = false;
  debugger
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
