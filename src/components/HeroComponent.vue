<template>
  <section id="hero" class="text-white">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active position-relative"
          v-for="(el, index) in store.heroImages"
        >
          <!-- title -->
          <div class="titlee position-absolute">
            <h2 class="d-none d-md-block">{{ el.title }}</h2>
            <h5>Find the right prince and dealer.</h5>
            <p>Learn More <i class="fa-solid fa-arrow-right"></i></p>
          </div>
          <img :src="el.img" class="d-block w-100 h-100" alt="auto" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
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
    padding: 10px 0;
    background-color: black;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
.position-absolute {
  top: 30%;
  left: 20%;
  font-weight: 400;
  max-width: 35%;
  font-weight: 800;
  font-size: 1.2em;
  h2 {
    font-size: 3em;
    font-weight: 800;
  }
  h5 {
    font-weight: 800;
  }
  p {
    font-weight: 800;
    background-color: black;
    display: inline-block;
    padding: 20px 30px;
    border-radius: 5px;
  }
}

/* @media (max-width: 400px) {
  h2 {
    font-size: 0.8em;
  }
  .position-absolute {
    top: 20px !important;
  }
} */
</style>
