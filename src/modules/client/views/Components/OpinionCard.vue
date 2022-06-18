<template>
  <div class="opinion-card__container">
    <b-card class="opinion-card" v-if="opinion">
      <div class="d-flex flex-wrap justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <div  class="opinion-card__image">
              <img src="@/assets/img-delete/experience.jpg" alt="" />
            </div>
            <div  class="pl-2 pl-md-3">
              <h1 class="opinion-card__title">
                {{opinion.name}}
              </h1>
              <h1 class="opinion-card__subtitle mb-0">
                {{opinion.time}}
              </h1>
              
            </div>
        </div>
        <div>
          <span class="opinion-card__star opinion-card__star--active"><i class="fa-solid fa-star"></i></span>
          <span class="opinion-card__star opinion-card__star--active"><i class="fa-solid fa-star"></i></span>
          <span class="opinion-card__star opinion-card__star--active"><i class="fa-solid fa-star"></i></span>
          <span class="opinion-card__star opinion-card__star--active"><i class="fa-solid fa-star"></i></span>
          <span class="opinion-card__star"><i class="fa-solid fa-star"></i></span>
        </div>
      </div>
      <p class="mb-0">
        {{opinion.comment}}
      </p>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: 'OpinionCard'
})
export default class OpinionCard extends Vue {
  @Prop({type:Object, required:true}) opinion!:any
  
  isShow:Boolean= false; // Controla el muestreo desplegado de la card
  isActive:Boolean= false; //Controla la activacion de la clase para la animación de despliegue
  
}
</script>

<style lang="scss" scoped>

.opinion-card__container{
  .opinion-card{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

    .opinion-card__image{
      width: 60px;
      height: 60px;

      img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit:cover;
      }
    }
    .opinion-card__title{
      font-size: 1.1rem;
      font-weight: 600;
    }

    .opinion-card__subtitle{
      font-size: 0.95rem;
    }

    .opinion-card__star{
      i{
        color: rgba(192, 192, 192, 0.733);
      }
      &.opinion-card__star--active{
        i{
          color: rgb(255, 196, 0);
        }
      } 
    }
  }
}

</style>