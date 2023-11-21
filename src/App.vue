<template>
  <NavComponent />
  <HeroComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  components: { NavComponent, HeroComponent, MainComponent, FooterComponent },
};
</script>

<style lang="scss" scoped></style>
