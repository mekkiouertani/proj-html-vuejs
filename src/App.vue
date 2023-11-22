<template>
  <IntroComponent />
  <Transition name="fade">
    <div v-show="isHidden">
      <NavComponent id="nav" />
      <HeroComponent id="hero" />
      <MainComponent />
      <FooterComponent />
    </div>
  </Transition>
</template>

<script>
import { store } from "./data/store.js";
import FooterComponent from "./components/FooterComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import IntroComponent from "./components/IntroComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  components: {
    NavComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
    IntroComponent,
  },
  data() {
    return {
      store,
      isHidden: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true;
    }, 1900);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
