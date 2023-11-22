<template>
  <section id="top-text" class="my-3 mb-2">
    <div class="thumb-up">
      <img src="../../images/thumb-up-in-a-circle.png" alt="" />
    </div>
    <h3>Resent Articles</h3>
    <h6>Useful infromation about car</h6>
  </section>
  <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
    <Slide v-for="car in store.cardCars" :key="index">
      <div class="carousel__item">
        <div class="card p-3">
          <img :src="car.img" class="card-img-top" :alt="car.title" />
          <span>06.07.2022 - Auto Car</span>
          <div class="card-body">
            <h5 class="card-title">{{ car.title }}</h5>
            <p class="card-text">{{ car.text }} [...]</p>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import { store } from "./../../data/store.js";
export default {
  name: "LittleCard",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: ["img", "title", "text"],
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
h5 {
  font-size: 1.5em;
  font-weight: 700;
}
p {
  text-align: left;
}
span {
  font-weight: 600;
}
.card {
  background-color: #fbfbfb;
  border: 0;
  border-right: 1px solid lightgray;
  width: 300px;
}
#top-text {
  color: black;
  h3 {
    text-align: center;
    font-weight: 600;
  }
  h6 {
    text-align: center;
  }
  .thumb-up {
    margin: auto;
    height: 80px;
    width: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
