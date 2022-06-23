<template>
  <div class="cliente-especialist__container">
    <b-row class="mx-0 pt-4 ">
      <b-col cols="12">
        <b-card class="data-card card--shadow">
          <b-row class="mx-0">
            <b-col cols="12" class="d-block d-md-none text-right mb-3">
              <span class="data-card--save">
                <i class="fa-solid fa-heart"></i>
                Guardar
              </span>

            </b-col>
            <b-col cols="12" md="10" class="d-flex flex-wrap justify-content-center justify-content-md-start">
              <div class="data-card__image">
                <img src="@/assets/img-delete/profile.jpg" alt="" />
              </div>
              <div  class="pl-2 pl-md-3">
                <h1 class="data-card__name">
                  Pedro Ramirez Estrada 
                  <span class="data-card__status ml-2">
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                </h1>
                <div>
                  <b-badge variant="primary" class="mr-2 mb-1 px-2 py-2">Carpintero</b-badge>
                  <b-badge variant="primary" class="mr-2 mb-1 px-2 py-2">Gasfitero</b-badge>
                  <b-badge variant="primary" class="mr-2 mb-1 px-2 py-2">Electricista</b-badge>
                </div>
                <div class="mt-2">
                  <span class="data-card__star data-card__star--active"><i class="fa-solid fa-star"></i></span>
                  <span class="data-card__star data-card__star--active"><i class="fa-solid fa-star"></i></span>
                  <span class="data-card__star data-card__star--active"><i class="fa-solid fa-star"></i></span>
                  <span class="data-card__star data-card__star--active"><i class="fa-solid fa-star"></i></span>
                  <span class="data-card__star"><i class="fa-solid fa-star"></i></span>
                  <span class="text-primary ml-1">(13 valoraciones)</span>
                </div>
                <div class="d-flex justify-content-end justify-content-md-start">
                  <b-button
                    variant="primary"
                    class="mt-3"
                  >
                    <i class="fa-solid fa-handshake"></i>
                    Directo a cotizar
                  </b-button>
                </div>
                

              
              </div>
              
            </b-col>
            <b-col cols="2" class="d-none d-md-block text-right">
              <span class="data-card--save">
                <i class="fa-solid fa-heart"></i>
                Guardar
              </span>

            </b-col>
          </b-row>
          <b-row class="mt-5 mt-md-4 mx-0">
            <b-col cols="12">
              <span
                :class="tabSelected == 'BIO'? 'data-card__tab--active': ''"
                class="data-card__tab mr-2 mb-2"
                @click="setTab('BIO')"
              >BIO</span>
              <span
                :class="tabSelected == 'OPINIONES'? 'data-card__tab--active': ''"
                class="data-card__tab mr-2 mb-2"
                @click="setTab('OPINIONES')"
              >OPINIONES</span>
              <span
                class="data-card__tab mr-2 mb-2"
                @click="handleGoGalery"
              >GALERIA</span>

            </b-col>
          </b-row>
        </b-card>
      </b-col>
      
    </b-row>
    <b-row class="mx-0 " v-if="tabSelected == 'BIO'">
      <b-col cols="12">
        <h1 class="section__title">Acerca del especialista</h1>
        <b-card class="card--shadow">
          <b-row class="mx-0">
            <b-col>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempore accusamus suscipit repellat esse laboriosam dolore. Libero quae optio voluptatibus? Nostrum vel nihil dolor soluta voluptatum tenetur iste, assumenda sunt, minus nemo facilis earum quis delectus possimus, illum eos expedita.
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" class="mt-5">
        <h1 class="section__title">Experiencias</h1>
        <experience-card v-for="(experience, index) in experiences" :key="index" :experience="experience"></experience-card>
      </b-col>
      <b-col cols="12" id="galery__box" class="mb-5 mt-3">
        <h1 class="section__title">Galería</h1>
        <b-card class="card--shadow">
          
          <carousel :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}"  :touchDrag="false" :pullDrag="false" :mouseDrag="false">
            <template slot="prev"><span class="prev btn-carrousel btn-carrousel--left"><i class="fa-solid fa-angle-left"></i></span></template>
            <img src="https://placeimg.com/200/200/any?1"  @click="isShowModal=true" role="button">

            <img src="https://placeimg.com/200/200/any?2"  @click="isShowModal=true" role="button">

            <img src="https://placeimg.com/200/200/any?3" @click="isShowModal=true" role="button">
            <img src="https://placeimg.com/200/200/any?1" @click="isShowModal=true" role="button">
            <img src="https://placeimg.com/200/200/any?2" @click="isShowModal=true" role="button">

            <img src="https://placeimg.com/200/200/any?3" @click="isShowModal=true" role="button">

            <template slot="next"><span class="next btn-carrousel btn-carrousel--next"><i class="fa-solid fa-angle-right"></i></span></template>
        </carousel>
        
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mx-0">
      <b-col cols="12">
        <div  class="opinions-list mx-0 mb-4" v-if="tabSelected == 'OPINIONES'">
          <div  v-for="(opinion, index) in opinionsList" :key="index">
            <opinion-card :opinion="opinion"></opinion-card>
          </div>

        </div>
      </b-col>
    </b-row>
    
    <modal-image v-show="isShowModal" @close-modal="isShowModal = false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// import carousel from 'vue-owl-carousel'
const carousel = require('vue-owl-carousel');
import ModalImage from '@/shared/components/ModalImage.vue'
import ExperienceCard from '@/modules/client/views/Components/ExperienceCard.vue'
import OpinionCard from '@/modules/client/views/Components/OpinionCard.vue'

@Component({
  name: 'SpecialistProfile',
  components: {
    ExperienceCard,
    OpinionCard,
    carousel,
    ModalImage
  }
})
export default class SpecialistProfile extends Vue{

      isShowModal:Boolean = false; //Maneja la gestion del modal de imagenes
      experiences:Array<any>= [
        {
          id: 0,
          title: 'Construccion y Techado',
          time: 5,
          specialities: [
            {
              id: 0,
              name: 'Concreto/Armado'
            },
            {
              id: 1,
              name: 'Instalación de interruptores'
            },
            {
              id: 2,
              name: 'Servicios generales'
            },
            {
              id: 3,
              name: 'Servicios generales'
            },
          ]
        },
        {
          id: 1,
          title: 'Arquitectura',
          time: 5,
          specialities: [
            {
              id: 1,
              name: 'Concreto/Armado'
            },
            {
              id: 2,
              name: 'Instalación de interruptores'
            },
            {
              id: 3,
              name: 'Servicios generales'
            },
            {
              id: 4,
              name: 'Servicios generales'
            },
          ]
        }
      ];
      opinionsList:Array<any>= [
        {
          name: 'Sandro Lopez',
          time: 'Enero 2021',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium fugiat labore aspernatur natus accusantium temporibus. Voluptas ullam, voluptatum est, ab ipsam aliquid, unde eveniet obcaecati et fugit cum accusantium.'
        },
        {
          name: 'Sandro Lopez',
          time: 'Enero 2022',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          name: 'Sandro Lopez',
          time: 'Febrero 2022',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          name: 'Sandro Lopez',
          time: 'Mayo 2022',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium fugiat labore aspernatur natus accusantium temporibus. Voluptas ullam, voluptatum est, ab ipsam aliquid, unde eveniet obcaecati et fugit cum accusantium.'
        },
      ];
      tabSelected:string = 'BIO';


  setTab(value:string){
    this.tabSelected = value
  }
  handleGoGalery(){
    this.setTab('BIO')
    const timeOut = setTimeout(()=>{
      const boxContainer:any = document.getElementById(`galery__box`);
      const top:number = boxContainer.offsetTop - 70;
      window.scroll({
        top,
        left: 0,
        behavior: "smooth",
      });
      clearTimeout(timeOut)
    }, 100)
    
  }
}
</script>

<style  lang="scss" scoped>

.cliente-especialist__container{
  .section__title{
    font-size: 1.5rem;
  }
  .card--shadow{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }
  .data-card{
    .data-card__tab{
      padding: 5px 8px;
      &:hover{
        text-decoration: underline;
        color: #3a88ec;
        cursor: pointer;
      }

      &.data-card__tab--active{
        color: #3a88ec;
        text-decoration: underline;
      }
    }
    .data-card--save{
      cursor: pointer;
      i{
        color: rgb(180, 176, 176);;
      }

      &:hover{
        color: #ff5050;
        i{
          color: #ff5050;
        }
      }
    }
    .data-card__image{
      width: 140px;
      height: 180px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .data-card__name{
      font-size: 1.5rem;

      .data-card__status{
        font-size: 1.2rem;
        i{
          color: rgb(64, 231, 114);
        }
      }
    }

    .data-card__star{
      i{
        color: rgba(192, 192, 192, 0.733);
      }
      &.data-card__star--active{
        i{
          color: rgb(255, 196, 0);
        }
      } 
    }
  }

  .btn-carrousel{
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: #3a88ec;
    z-index: 3;
    height: 35px;
    width: 35px;
    font-size: 1.3rem;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    color: white;

    &.btn-carrousel--next{
      right: 40px;
    }

    &.btn-carrousel--left{
      left: 40px;
    }

  }

}

  #imagen__content{
    width: 350px;
    height: 350px;
    margin: auto;
    max-width: 100%;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

@media (min-width: 551px){
  .cliente-especialist__container{
    .opinions-list{
      column-count: 2;
      }

  }
}

</style>