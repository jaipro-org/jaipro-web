<template>
  <div>
    <b-card class="exp-card" v-if="experience">
      <div class="d-flex justify-content-between exp-card__item" v-if="!isShow" @click="openCollapse">
        <h1 class="exp-card__title">
          {{experience.title}}
        </h1>
        <i class="fa-solid fa-angle-down" ></i>
      </div>
      <div v-else class="exp-card__item exp-card__item--collapse" :class="{'active':isActive}">
        <b-row class="mx-0">
          <b-col cols="10" class="d-flex  px-0">
            <div  class="exp-card__image">
              <img src="@/assets/img-delete/experience.jpg" alt="" />
            </div>
            <div  class="pl-2 pl-md-3">
              <h1 class="exp-card__title">
                {{experience.title}}
              </h1>
              <h2 class="exp-card__range ">
                ANIOS EN EL SECTOR: {{experience.time}} años
              </h2>
            </div>
          </b-col>
          <b-col cols="2" class="px-0 d-flex justify-content-end">
            <i class="fa-solid fa-angle-up" @click="closeCollapse"></i>
          </b-col>
        </b-row>
        <h1 class="exp-card__subtitle mt-3">ESPECIALIDADES</h1>
        <b-row class="mx-0">       
          <b-col cols="12" md="4" class="d-flex mb-2" v-for="(especiality, id) in experience.specialities" :key="id">
            <div>
              <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
            </div>
            <span> {{especiality.name}} </span>
          </b-col>
        </b-row>
      </div>

    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      isShow: true, // Controla el muestreo desplegado de la card
      isActive: true, //Controla la activacion de la clase para la animación de despliegue
    }
  },
  methods: {
    openCollapse(){
      this.isShow= true
      const timeOut = setTimeout(()=>{
        this.isActive= true
        clearTimeout(timeOut)
      }, 100)
      
    },
    closeCollapse(){
      this.isActive = false
      const timeOut = setTimeout(()=>{
        this.isShow = false
        clearTimeout(timeOut)
      }, 600)
    }
  }
}
</script>

<style lang="scss" scoped>


.exp-card{
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  .exp-card__item{
    i{
      cursor: pointer;
    }
    .exp-card__title{
      font-size: 1.3rem;
      margin-bottom: 0;
      font-weight: 600;
    }

    .exp-card__range {
      font-size: 0.9rem;
    }

    .exp-card__subtitle {
      font-size: 1.1rem;
      margin-bottom: 16px;
    }

    .exp-card__image {
      width: 55px;
      height: 55px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .exp-card__item--collapse{
    max-height: 20px;
    overflow-y: hidden;
    transition: max-height 0.55s cubic-bezier(.26,.11,.29,1);

    &.active{
      max-height: 2000px;
    }
    
  }
  
}

</style>