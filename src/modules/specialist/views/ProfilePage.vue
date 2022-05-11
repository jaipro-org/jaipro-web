<template>
  <b-row class="profile-specialist__container mx-0 pb-2 pt-4 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div v-b-toggle.collapse-3>
            <span>Mi resumen</span><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse id="collapse-3" class=" pl-4 pt-2">
            <div class="pl-2"
              v-b-toggle.collapse-3
              @click="goBox('presentation__box')"
              :class=" isPresentationSection ? 'menu-active' : ''"
            >
              <span>Presentación</span>
            </div>
            <hr>
            <div
              class="pl-2"
              v-b-toggle.collapse-3
              @click="goBox('galery__box')"
              :class=" isGalerySection ? 'menu-active' : ''"
            >
              <span>Galeria</span>
            </div>
            <hr>
            <div class="pl-2" v-b-toggle.collapse-3 @click="goBox('experience__box')"
              :class=" isExperienceSection ? 'menu-active' : ''"
            >
              <span>Experiencia</span>
            </div>
            <hr>
            <div class="pl-2" v-b-toggle.collapse-3 @click="goBox('location__box')"
              :class=" isLocationSection ? 'menu-active' : ''"
            >
              <span>Locaciones de trabajo</span>
            </div>
            <hr>
            <div class="pl-2" v-b-toggle.collapse-3 @click="goBox('acount__box')"
              :class=" isAcountSection ? 'menu-active' : ''"
            >
              <span>Cuentas</span>
            </div>
          </b-collapse>
        
        </div>
      </div>
      <div id="menu__container--web" :class=" menuChange? 'menu__container--web' : ''" class="menu__container py-3 px-4 bg-white d-none d-lg-block">
        <div class="text-center">
          <span>Mi resumen</span>
        </div>
        <hr>
        <div class="text-center" @click="goBox('presentation__box')"
          :class=" isPresentationSection ? 'menu-active' : ''"
        >
          <span>Presentación</span>
        </div>
        <hr>
        <div class="text-center" @click="goBox('galery__box')"
          :class=" isGalerySection ? 'menu-active' : ''"
        >
          <span>Galeria</span>
        </div>
        <hr>
        <div class="text-center" @click="goBox('experience__box')"
          :class=" isExperienceSection ? 'menu-active' : ''"
        >
          <span>Experiencia</span>
        </div>
        <hr>
        <div class="text-center" @click="goBox('location__box')"
          :class=" isLocationSection? 'menu-active' : ''"
        >
          <span>Locaciones de trabajo</span>
        </div>
        <hr>
        <div class="text-center" @click="goBox('acount__box')"
          :class=" isAcountSection ? 'menu-active' : ''"
        >
          <span>Cuentas</span>
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0">
        <b-col cols="12" id="presentation__box">
          <b-card class="mb-4 pt-5 pt-lg-4">
            <div class="image__user">
              <img src="@/assets/img-delete/profile.jpg" alt="">
            </div>
            <div class="button__action button__action--float text-warning">
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h4>Armando paredes <span class="profile__status ml-2"><i class="fa-solid fa-circle-check"></i> Perfil verificado</span></h4>
            <hr class="mt-0">
            <div class="mb-1">Pintor, albañil, Carpintero</div>
            <div>Av.Los pinos, lima, Perú</div>
            <div>+51 999 999 999 / 0800600</div>
            <span class="d-block mt-2"><b>Acerca de ti</b></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deleniti officiis! Quidem beatae quaerat laboriosam impedit hic quam doloribus tempore, sapiente libero. Laborum sunt dignissimos voluptatum sequi dolore, molestiae similique nihil itaque rerum incidunt ab? Nam placeat ullam odio cum dolor! Repellendus quidem excepturi ut animi at quia? Quo accusantium quis iusto dolor, exercitationem debitis sed odio illo itaque est!</p>
          </b-card>
        </b-col>
        <b-col cols="12" id="galery__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Galeria <span class="profile__info text-warning ml-2"><i class="fa-solid fa-circle-info"></i></span></h4>
              <div class="button__action text-warning">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <hr class="mt-0">
            <div class="py-2">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
              </b-carousel>

            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="experience__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Experiencia <span class="profile__info text-warning ml-2"><i class="fa-solid fa-circle-info"></i></span></h4>
              <div class="button__action button__action--success">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0">
            <div class="p-2">
              <div class="experience__item p-3 mb-3">
                <b-row class="mx-0">
                  <b-col cols="10" class="d-flex px-0">
                    <div class="experience__image mr-3">
                      <img src="@/assets/img-delete/experience.jpg" alt="">
                    </div>
                    <div>
                      <h1 class="experience__title">CONSTRUCCION Y ARQUITECTURA</h1>
                      <h2 class="experience__range">ANIOS EN EL SECTOR: 5 años</h2>
                    </div>
                  </b-col>
                  <b-col cols="2" class="px-0">
                    <div class="button__action button__action--float2 text-warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                  </b-col>
                </b-row>

                <h1 class="experience__subtitle mt-3">ESPECIALIDADES</h1>
                <b-row class="mx-0">
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Concreto/Armado
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Concreto/Armado
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Instalación de interruptores y tomacorrientes
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Servicios Generales
                    </span>
                  </b-col>
                </b-row>
              </div>
              <div class="experience__item p-3 mb-3">
                <b-row class="mx-0">
                  <b-col cols="10" class="d-flex px-0">
                    <div class="experience__image mr-3">
                      <img src="@/assets/img-delete/experience.jpg" alt="">
                    </div>
                    <div>
                      <h1 class="experience__title">CONSTRUCCION Y ARQUITECTURA</h1>
                      <h2 class="experience__range">ANIOS EN EL SECTOR: 5 años</h2>
                    </div>
                  </b-col>
                  <b-col cols="2" class="px-0">
                    <div class="button__action button__action--float2 text-warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                  </b-col>
                </b-row>

                <h1 class="experience__subtitle mt-3">ESPECIALIDADES</h1>
                <b-row class="mx-0">
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Concreto/Armado
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Concreto/Armado
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Instalación de interruptores y tomacorrientes
                    </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span>
                      Servicios Generales
                    </span>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="location__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Locaciones de trabajo <span class="profile__info text-warning ml-2"><i class="fa-solid fa-circle-info"></i></span></h4>
              <div class="button__action button__action--success">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0">
            <div class="px-4 py-2">
              <b-row class="mx-0 locattion__item mb-3" v-for="(location, index) in locationsList" :key="index">
                <b-col cols="10">
                  <h1 class="locattion__title text-center">{{location.value}}</h1>
                </b-col>
                <b-col cols="2" class="d-flex justify-content-around flex-wrap">
                  <div class="button__action text-warning">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div class="button__action text-danger">
                    <i class="fa-solid fa-circle-xmark" @click="deleteLocation(location.id)"></i>
                  </div>
                </b-col>
              </b-row>

            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="acount__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Cuentas <span class="profile__info text-warning ml-2"><i class="fa-solid fa-circle-info"></i></span></h4>
              <div class="button__action button__action--success">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0">
            <div class="px-4 py-2">
              <b-row class=" acount__item mx-0 mb-3 py-3" v-for="(acount) in acountList" :key="acount.id">
                <b-col cols="10" class="d-flex align-items-center">
                  <b-form-checkbox
                    size="lg"
                  >
                  </b-form-checkbox>
                  <div class="d-flex flex-wrap">
                    <div class="acount__image ml-2 mb-2 mb-md-0">
                      <img src="@/assets/img-delete/visa-logo.jpg" alt="">
                    </div>
                    <h3 class="mb-0 ml-2" for="checkbox-1">{{acount.value}}</h3>
                  </div>
                </b-col>
                <b-col cols="2" class="d-flex justify-content-center">
                  <div class="button__action text-danger">
                    <i class="fa-solid fa-circle-xmark" @click="deleteAcount(acount.id)"></i>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
    <b-col id="footer__limit"></b-col>
  </b-row>
</template>

<script>
import { alertSuccessButton } from "@/utils/SweetAlert";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isLoading: true,
      slide: 0,
      sliding: null,
      locationsList : [
        {
          id: '1',
          value: 'Lima Norte, Los Olivos, Independencia, San Martin de Porres',
        },
        {
          id: '2',
          value: 'Lima Sur, San Miguel, Chorrillos, Asia',
        },
        {
          id: '3',
          value: 'Lima Norte, Los Olivos, Independencia, San Martin de Porres',
        },
      ],
      acountList: [
        {
          id: '1',
          value: 'XXXX XXXX XXXX 7698'
        },
        {
          id: '2',
          value: 'XXXX XXXX XXXX 1569'
        }
      ],
      disctrictSelected: 0,
      districtOptions: [
        { value: 0, text: "Los Olivos" },
        { value: 1, text: "SMP" },
        { value: 2, text: "Selected Option" },
        { value: 3, text: "Puente Piedra" },
        { value: 4, text: "Chorrillos" },
      ],
      section1: null,
      section2: null,
      section3: null,
      section4: null,
      section5: null,
    };
  },
  mounted(){
    this.isLoading = false
    this.$nextTick(() => {
      // this.section1 = document.getElementById('presentation__box').offsetTop
      this.section2 = document.getElementById('galery__box').offsetTop - 10
      this.section3 = document.getElementById('experience__box').offsetTop - 10
      this.section4 = document.getElementById('location__box').offsetTop - 10
      this.section5 = document.getElementById('acount__box').offsetTop - 10
      });
  },

  methods: {
    setData() {
      alertSuccessButton("Se realizo la operacion correctamente");
    },
    deleteLocation(id){
      const index = this.locationsList.findIndex(location => location.id == id)
      this.locationsList.splice(index,1)
    },
    deleteAcount(id){
      const index = this.acountList.findIndex(acount => acount.id == id)
      this.acountList.splice(index,1)
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },

    goBox(boxName){
      const boxContainer = document.getElementById(`${boxName}`)
      const top = boxContainer.offsetTop
      window.scroll({
        top,
        left: 0,
        behavior: 'smooth'
      })
    },
  },
  computed: {
    ...mapGetters(['getScroll']),
    menuChange() {
      if(!this.isLoading){
        let footer = document.getElementById("footer__limit");
        let footerScrollY = Number(footer.offsetTop) - 320

        if (this.getScroll > 70 && Number(this.getScroll) < footerScrollY) {
          return true
        }
      }
      return false
    },
    isPresentationSection() {
      return this.getScroll >= 0 && this.getScroll < this.section2  ? true : false 
    },
    isGalerySection() {
      return this.getScroll >= this.section2  && this.getScroll < this.section3  ? true : false 
    },
    isExperienceSection() {
      return this.getScroll >= this.section3  && this.getScroll < this.section4  ? true : false 
    },
    isLocationSection() {
      return this.getScroll >= this.section4  && this.getScroll < this.section5  ? true : false 
    },
    isAcountSection() {
      if(!this.isLoading){
        let footer = document.getElementById("footer__limit");
        let footerScrollY = Number(footer.offsetTop) - 320
        return this.getScroll >= this.section5  && this.getScroll < footerScrollY ? true : false 
      }else{
        return false
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-specialist__container{
  .profile__menu{
    .menu__container{
      z-index: 99999;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      hr{
        margin: 0;
      }
      div{
        padding: 10px 0;
        cursor: pointer;
      }
  
      div:hover{
        background-color: #3a88ec;
        color: white;
      }
    }

    .menu__container--web{
      position: fixed;
      top: 90px;
      padding-top: 0 ;
      width: 100%;
      max-width: 240px;
    }
  }
  .card{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }
  .profile__menu{
    padding-top: 70px;
  }
  .profile__content{
    padding-top: 70px;

    .button__action{
      font-size: 1.5rem;
      cursor: pointer;
    }

    .button__action--success{
      color: rgb(64, 231, 114);
      font-size: 2rem;
    }

    .button__action--float{
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .button__action--float2{
      position: absolute;
      right: 0px;
      top: 0;
    }
    
    .image__user{
      width: 120px;
      height: 120px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.308);
      position: absolute;
      top: -60px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 100%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }
    .profile__info{
      font-size: 1.1rem;
    }

    .profile__status{
      font-size: 1.1rem;
      i{
        color: rgb(64, 231, 114);
      }
    }

    .experience__item{
      border: 2px solid rgba(80, 80, 80, 0.226);
      border-radius: 2px;

      .experience__image{
        width: 55px;
        height: 55px;
        background-color: aqua;

        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      .experience__title{
        font-size: 1.1rem;
      }

      .experience__range{
        font-size: 0.9rem;
      }

      .experience__subtitle{
        font-size: 1.1rem;
      }
    }

    .locattion__item{
      border: 1px solid rgba(0, 0, 0, 0.342);
      border-radius: 4px;
      padding: 5px 10px;
      align-items: center;
    
      .locattion__title{
        font-size: 1rem;
        margin-bottom: 0;
      }
    }

    .acount__item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.342);

      .acount__image{
        width: 55px;
        height: 40px;
        background-color: aqua;

        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
    

    
  }
}

.menu-active{
  background-color: #3a88ec !important;
  color: white;
}

@media (max-width: 991px ){
  .custom-checkbox{
    z-index: 0;
  }
  .profile-specialist__container{
    .profile__menu{
      padding: 0;
      z-index: 1;
      position: fixed;
      top: 74px;
      left: 0;

      .menu__container{
        width: 100%;
        display: block;
        div:hover{
          background-color: white;
          color: initial;
        }
      }
    }

    .profile__content{
      margin-top: 100px;
    }
  }
}
</style>
