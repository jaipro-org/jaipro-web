<template>
  <div
    class="container"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)"
  >
    <div class="drop" v-show="dropped == 2"></div>
    <!-- Error Message -->
    <div v-show="error" class="error mt-1 mb-3">
      {{ error }}
    </div>

    <!-- To inform user how to upload image -->
    <div
      v-show="Imgs.length == 0 && prevImages.length === 0"
      class="beforeUpload my-3"
    >
      <input
        type="file"
        style="z-index: 1"
        accept="image/*"
        ref="uploadInput"
        @change="previewImgs"
        multiple
      />
      <!-- MOD Image -->
      <!-- <img
        class="m-0"
        src="@/assets/img/uploadImg.svg"
        alt="upload-image-icon"
      /> -->
      <div class="text-center icon__container">
        <i class="fa-solid fa-circle-plus"></i>
      </div>
      <p class="mainMessage my-2">
        {{ uploadMsg ? uploadMsg : "Click to upload or drop your images here" }}
      </p>
      <p class="otherMessage my-1">
        {{ otherMsg ? otherMsg : "" }}
      </p>
    </div>
    <div
      class="imgsPreview"
      v-show="Imgs.length === 0 && prevImages.length > 0"
    >
      <div class="imageHolder" v-for="(prevImage, i) in prevImages" :key="i">
        <img :src="prevImage" />
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="plus" @click="append">+</div>
      </div>
    </div>
    <div class="imgsPreview" v-show="Imgs.length > 0">
      <button type="button" class="clearButton" @click="reset">
        {{ clearAll ? clearAll : "clear All" }}
      </button>
      <div class="d-flex justify-content-center flex-wrap">
        <div class="imageHolder" v-for="(img, i) in Imgs" :key="i">
          <img :src="img" />
          <!-- <p>{{i}}</p> -->
          <span class="delete" style="color: white" @click="deleteImg(i)">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                style="color: #fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
          <!-- <div class="plus" @click="append" v-if="++i == Imgs.length">+</div> -->
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="plus" @click="append" v-if="Imgs.length < max">+</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "VueUploadImages", // vue component name
  data() {
    return {
      error: "",
      files: [],
      dropped: 0,
      Imgs: [],
    };
  },
  props: {
    max: Number,
    uploadMsg: String,
    otherMsg: String,
    maxError: String,
    fileError: String,
    clearAll: String,
    prevImages: {
      type: Array,
      default() {
        return []
      },
    }
  },
  watch: {
    files() {
      if (this.files.length < this.$props.max) {
        this.error = ''
      }
    },
  },
  methods: {
    dragOver() {
      this.dropped = 2;
    },
    dragLeave() {},
    drop(e) {
      let status = true;
      let files = Array.from(e.dataTransfer.files)
      if (e && files) {
        files.forEach((file) => {
          if (file.type.startsWith("image") === false) status = false;
        });
        if (status == true) {
          if (
            this.$props.max &&
            files.length + this.files.length > this.$props.max
          ) {
            this.error = this.$props.maxError
              ? this.$props.maxError
              : `Maximum files is` + this.$props.max;
          } else {
            this.files.push(...files);
            this.previewImgs();
          }
        } else {
          this.error = this.$props.fileError
            ? this.$props.fileError
            : `Unsupported file type`;
        }
      }
      this.dropped = 0;
    },
    append() {
      this.$refs.uploadInput.click();
    },
    readAsDataURL(file) {
      return new Promise(function (resolve, reject) {
        let fr = new FileReader();
        fr.onload = function () {
          resolve(fr.result);
        };
        fr.onerror = function () {
          reject(fr);
        };
        fr.readAsDataURL(file);
      });
    },
    deleteImg(index) {
      this.Imgs.splice(index, 1);
      this.files.splice(index, 1);
      this.$emit("changed", this.files);
      this.$refs.uploadInput.value = null;
    },
    previewImgs(event) {
      if (
        this.$props.max &&
        event &&
        event.currentTarget.files.length + this.files.length > this.$props.max
      ) {
        this.error = this.$props.maxError
          ? this.$props.maxError
          : `Maximum files is` + this.$props.max;
        return;
      }
      if (this.dropped == 0) this.files.push(...event.currentTarget.files);
      this.error = "";
      this.$emit("changed", this.files);
      let readers = [];
      if (!this.files.length) return;
      for (let i = 0; i < this.files.length; i++) {
        readers.push(this.readAsDataURL(this.files[i]));
      }
      Promise.all(readers).then((values) => {
        this.Imgs = values;
      });
    },
    reset() {
      this.$refs.uploadInput.value = null;
      this.Imgs = [];
      this.files = [];
      this.$emit("changed", this.files);
    },
  },
};
/* eslint-enable */
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f7fafc;
  border: 0.5px solid #a3a8b1;
  border-radius: 10px;
  padding: 30px;
  position: relative;
}
.drop {
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
  position: absolute;
  background-color: #f4f6ff;
  left: 0;
  border: 3px dashed #a3a8b1;
}
.error {
  text-align: center;
  color: #eb5656;
  font-size: 1.1rem;
  font-weight: 700;
}
.beforeUpload {
  position: relative;
  text-align: center;
}
.beforeUpload input {
  width: 100%;
  margin: auto;
  height: 100%;
  opacity: 0;
  position: absolute;
  background: red;
  display: block;
}
.beforeUpload input:hover {
  cursor: pointer;
}
.beforeUpload .icon {
  width: 150px;
  margin: auto;
  display: block;
}
@media (min-width: 400px) {
  .imgsPreview .imageHolder {
    width: 150px;
    height: 150px;
    background: #fff;
    position: relative;
    border-radius: 10px;
    margin: 10px 5px;
    display: inline-block;
  }
}
@media (max-width: 400px) {
  .imgsPreview .imageHolder {
    min-width: 50px;
    max-width: 150px;
    background: #fff;
    position: relative;
    border-radius: 10px;
    margin: 10px 5px;
    display: inline-block;
  }
}
.imgsPreview .imageHolder img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.imgsPreview .imageHolder .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 29px;
  height: 29px;
  color: #fff;
  background: red;
  border-radius: 50%;
}
.imgsPreview .imageHolder .delete:hover {
  cursor: pointer;
}
.imgsPreview .imageHolder .delete .icon {
  width: 66%;
  height: 66%;
  display: block;
  margin: 4px auto;
}
/* .imgsPreview .imageHolder .plus {
  color: #2d3748;
  background: #f7fafc;
  border-radius: 50%;
  font-size: 21pt;
  height: 30px;
  width: 30px;
  text-align: center;
  border: 1px dashed;
  line-height: 23px;
  position: absolute;
  right: -42px;
  bottom: 43%;
} */
.imgsPreview .plus {
  color: #2d3748;
  background: #f7fafc;
  border-radius: 50%;
  font-size: 21pt;
  height: 30px;
  width: 30px;
  text-align: center;
  border: 1px dashed;
  line-height: 23px;
}
.plus:hover {
  cursor: pointer;
}
.clearButton {
  color: #616f87;
  position: absolute;
  font-weight: 700;
  top: 7px;
  right: 7px;
  background: none;
  border: none;
  cursor: pointer;
}

.mainMessage {
  color: #b6bdcc;
  font-size: 1.1rem;
  font-weight: 700;
}

.otherMessage {
  color: #1178b1;
  font-size: 1rem;
  font-weight: 700;
}

.icon__container i {
  font-size: 3rem;
}
</style>
