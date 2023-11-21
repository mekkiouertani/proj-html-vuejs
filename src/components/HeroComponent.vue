<template>
  <section id="hero">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          v-for="(img, index) in store.heroImages"
        >
          <h2 class="position-absolute">titolo</h2>
          <img :src="img" class="d-block w-100" alt="auto" />
        </div>
      </div>
      <button
        class="carousel-control-prev position-absolute"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next position-absolute"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "HeroComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;
}
.carousel-inner {
  height: calc(100vh - 100px);
  width: 100%;
  .carousel-item {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}
</style>
