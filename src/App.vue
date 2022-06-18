<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script lang="ts">
import GeneralModule from '@/store/modules/general'
import { Component, Prop, Vue } from "vue-property-decorator";
const default_layout = "landing";

@Component({
  name: 'App'
})
export default class App extends Vue{
  created() {
    this.onScroll();
  }

  get layout():string {
    if(this.$route){
      if(this.$route.meta){
        return this.$route.meta.layout
      }
    }
    
    return "master-" + default_layout
    
  }

  onScroll() {
    window.onscroll = () => {
      const scrollY = window.scrollY;
      GeneralModule.updateScroll(scrollY)
    };
  }
}
</script>
<style lang="scss">
@import "assets/sass/styles";
</style>
