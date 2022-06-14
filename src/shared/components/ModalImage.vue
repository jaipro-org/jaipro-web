<template>
  <div id="modal-image__container">
    <div id="modal-image__content">
      <div id="modal-image__close">
        <i class="fa-solid fa-circle-xmark"
          @click="$emit('close-modal')"
        ></i>
      </div>
      <div id="modal-image__body">
        <img src="@/assets/img-delete/pintor.jpg" alt="">
        <!-- Deberia usarse cuando se pase el prop de la imagen -->
        <!-- <img :src="image" alt=""> -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalImage",
  props: {
    image: {
      type: String,
      // required: true,
    }
  },
}
</script>

<style  lang="scss" scopeds>
#modal-image__container{
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.671);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;

  #modal-image__content{
    min-height: 340px;
    min-width: 320px;
    height: 80%;
    max-height: 650px;
    max-width: 950px;
    background-color: azure;
    padding: 5px;
    border-radius: 5px;
    position: relative;
    
    #modal-image__close{
      position: absolute;
      top: 16px;
      right: 16px;
      height: 27px;
      width: 27px;
      z-index: 100;
      background-color: white;
      border-radius: 100%;

      i{
        color: rgb(212, 212, 212);
        font-size: 1.8rem;
        cursor: pointer;

        &:hover{
          color: #ff5050;
        }
      }
    }

    #modal-image__body{
      display: flex;
      overflow: hidden;
      overflow-x: auto;
      height: 100%;
      width: 100%;

      img{
        // width: 100%;
        margin: auto;
        height: 100%;
        object-fit: cover;
      }
    }

   
  }
}
</style>