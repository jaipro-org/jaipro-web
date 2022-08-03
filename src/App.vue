<template>
  <div id="app">
    <component :is="pageLayout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script lang="ts">
import { store } from "@/store/modules/general";
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import { watch } from "vue";

const default_layout = "landing";

export default defineComponent({
  name: "App",
  props: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const valuePageLayout = ref<string>("");
    watch(
      () => route.meta,
      async (meta): Promise<void> => {
        if(meta) {
          valuePageLayout.value = meta.layout as string;
        }
        valuePageLayout.value = "master-" + default_layout
      },
      { immediate: true }
    );
    onMounted(async () => {
      await router.isReady();
      console.log(`%c ${route.meta.layout}`, " color: red; font-size:20px;");
      //pageLayout.value = route.meta.layout as string;
    });

    return {
      pageLayout: valuePageLayout,
    };
  },
  methods: {},
});
</script>
<style lang="scss">
@import "assets/sass/styles";
</style>
