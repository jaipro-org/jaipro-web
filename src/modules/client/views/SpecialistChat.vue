<template>
  <div>
    <b-row class="mx-0" id="chat-box__container">
      <b-col cols="12" md="9" id="chat__container" class="bg-danger px-0">
        <div id="chat" class="border border-top-0">
          <div id="header-chat" class="d-flex align-items-center">
            <div class="header-chat__image mr-2">
              <img src="@/assets/img-delete/profile2.jpg" alt="" />
            </div>
            <span class="header-char__name"
              >Infraestructura Tecnologica profesional</span
            >
          </div>
          <div id="messages">
            <div class="message message-friend d-flex justify-content-start">
              <div class="message__friend-image mr-2">
                <img
                  src="@/assets/img-delete/profile2.jpg"
                  alt=""
                  class="foto"
                />
              </div>

              <div class="message__list">
                <div class="message__item mb-3">
                  <div class="flecha-izquierda"></div>
                  <div class="contents contents--friend">
                    Hola que tal, en que podemos ayudarle
                  </div>
                  <div class="fecha ml-2">Enviado hace tres minutos</div>
                </div>
              </div>
            </div>

            <div class="text-center mb-4">- 05 de abril -</div>

            <div class="message message-autor d-flex justify-content-end">
              <div class="message__list">
                <div class="message__item mb-3 text-end">
                  <div class="contents contents--autor">
                    Buenos dias, les habla Juan
                  </div>
                  <div class="flecha-derecha"></div>
                  <div class="fecha ml-2">Enviado hace tres minutos</div>
                </div>
              </div>
            </div>

            <div
              class="message d-flex"
              v-for="(message, index) in messages"
              :key="index"
              :class="
                message.typeUser == 0
                  ? 'message-friend d-flex justify-content-start'
                  : 'message-autor justify-content-end'
              "
            >
              <div
                class="message__friend-image mr-2"
                v-if="message.typeUser == 0"
              >
                <img
                  src="@/assets/img-delete/profile2.jpg"
                  alt=""
                  class="foto"
                />
              </div>

              <div class="message__list">
                <div
                  class="message__item mb-3"
                  :class="message.typeUser == 0 ? 'text-start' : 'text-end'"
                >
                  <div
                    class="flecha-izquierda"
                    v-if="message.typeUser == 0"
                  ></div>
                  <div
                    class="contents text-start"
                    :class="
                      message.typeUser == 0
                        ? 'contents--friend'
                        : 'contents--autor'
                    "
                  >
                    {{ message.contents }}
                  </div>
                  <div
                    class="flecha-derecha"
                    v-if="message.typeUser == 1"
                  ></div>

                  <div class="fecha ml-2">Enviado hace tres minutos</div>
                </div>
              </div>
            </div>
            <div id="messages-end">
              <p></p>
            </div>
          </div>
          <div id="message-box" class="d-flex">
            <form @submit.prevent="handleSendMessage" class="w-100">
              <input
                type="text"
                placeholder="Escribir mensaje..."
                v-model="inputMessage"
                required
              />
              <button
                type="submit"
                class="message-box__button d-flex align-items-center justify-content-center"
              >
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </b-col>
      <b-col
        cols="12"
        md="3"
        id="job__container"
        class="p-3 mt-3 mt-md-0 mb-4 mb-md-0"
      >
        <h1 class="job__title">Detalle del trabajo</h1>
        <hr class="mt-0" />
        <div class="job-detail_container">
          <p class="job-detail__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sunt earum amet minus omnis. Itaque delectus autem accusantium
            neque, totam sed sequi quae obcaecati aspernatur alias doloremque
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const endMessagesDiv: any = null;
const messagesDiv: any = null;
const inputMessage = "";
// Se uso dos parametros message para las pruebas de maquetación,
// pero no es necesario que existan ambos al mismo tiempo a menos que la logica de negocio lo requiera
const messages: Array<any> = [];
//Ejemplifica la estructuracion de los mensaje en pruebas de maquetacion
// typeUser -- 0 (friend) - 1 (autor)
const messagesAux: Array<any> = [
  {
    id: 1,
    typeUser: 0,
    userId: "111",
    contents: "Hola que tal, en que podemos ayudarle?",
  },
];
onMounted(() => {
  this.endMessagesDiv = document.getElementById("messages-end");
  this.messagesDiv = document.getElementById("messages");
});

function handleSendMessage() {
  if (this.inputMessage != "") {
    const message = {
      id: 1,
      typeUser: 1,
      userId: "111",
      contents: this.inputMessage,
    };

    this.messages.push(message);
    this.inputMessage = "";
    const timeOut = setTimeout(() => {
      const top = this.endMessagesDiv.offsetTop;
      this.messagesDiv.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
      clearTimeout(timeOut);
    }, 100);
  }
}
</script>

<style lang="scss">
#chat-box__container {
  padding-top: 20px;
  padding-bottom: 10px;

  #chat__container {
    height: calc(100vh - 110px);
    min-height: 350px;
    max-height: 850px;

    #chat {
      background-color: white;
      height: 100%;

      #header-chat {
        background-color: #000;
        color: white;
        padding: 10px;
        text-align: center;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
        height: 55px;

        .header-chat__image {
          height: 30px;
          width: 30px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
          }
        }

        .header-chat__name {
          font-size: 1rem;
        }
      }

      #message-box {
        position: relative;
        border-top: 1px solid rgb(211, 211, 211);
        border-bottom: 1px solid rgb(211, 211, 211);

        input {
          border: none;
          outline: none;
          padding: 10px 60px 10px 20px;
          width: 100%;
          height: 60px;
        }

        .message-box__button {
          border: 0;
          height: 40px;
          width: 40px;
          background-color: #3a88ec;
          color: white;
          border-radius: 100%;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;

          & :hover {
            background-color: #3a88ec;
          }
        }
      }

      #messages {
        padding: 15px;
        height: calc(100% - 115px);
        overflow: hidden;
        overflow-y: scroll;

        .message {
          .message__friend-image {
            height: 40px;
            width: 40px;

            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 100%;
            }
          }

          .fecha {
            color: #777;
            font-style: italic;
            font-size: 12px;
            margin-top: 5px;
          }

          .contents {
            border-radius: 5px;
            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
            display: inline-block;
            font-size: 13px;
            padding: 15px;
            vertical-align: top;
            max-width: 350px;

            & .contents--friend {
              background-color: #eee;
            }

            & .contents--autor {
              background-color: #3a88ec;
              color: white;
            }
          }

          .flecha-derecha {
            display: inline-block;
            margin-left: -6px;
            margin-top: 10px;
            width: 0;
            height: 0;
            border-top: 0px solid transparent;
            border-bottom: 15px solid transparent;
            border-left: 15px solid #3a88ec;
          }

          .flecha-izquierda {
            display: inline-block;
            margin-right: -6px;
            margin-top: 10px;
            width: 0;
            height: 0;
            border-top: 0px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 15px solid #eee;
          }
        }
      }
    }
  }

  #job__container {
    background-color: #c9c9c977;

    .job__title {
      font-size: 1rem;
    }

    .job-detail_container {
      max-height: 90%;
      overflow: hidden;
      overflow-y: auto;

      .job-detail_content {
        font-size: 0.9rem;
      }
    }
  }
}

@media (max-width: 767px) {
  #chat__container {
    #chat {
      #messages {
        .message {
          .contents {
            max-width: 230px;
          }
        }
      }
    }
  }
}
</style>
