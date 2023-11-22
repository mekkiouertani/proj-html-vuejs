<template>
  <section>
    <div id="jumbo">
      <div class="container mt-3 text-white">
        <div class="top-text">
          <p class="text-center">
            <i class="fa-regular fa-thumbs-up"></i>
            <span class="d-block"
              ><i class="fa-regular fa-star"></i
              ><i class="fa-regular fa-star"></i
              ><i class="fa-regular fa-star"></i
            ></span>
          </p>
          <h2 class="text-center">What are Our Customer Sayng ?</h2>
          <h6 class="text-center">Opinion from our happy customers</h6>
        </div>
        <Carousel
          id="gallery"
          :items-to-show="2"
          :wrap-around="false"
          v-model="currentSlide"
        >
          <Slide v-for="user in store.user" :key="user">
            <div class="carousel__item" @click="slideTo(user - 1)">
              <div class="card p-4">
                <p class="card-text position-relative">
                  {{ user.text }}
                  <i class="fa-solid fa-quote-right position-absolute"></i>
                </p>
                <div class="box-img">
                  <img :src="user.img" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ user.name }}</h5>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <!--  -->
      <!-- <div class="container">
        <section id="top-text">
          <div class="thumb-up">
            <img src="../../images/thumb-up-in-a-circle.png" alt="" />
          </div>
          <h3>Resent Articles</h3>
          <h6>Useful infromation about car</h6>
        </section>
        <Carousel
          id="thumbnails"
          :items-to-show="3"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="car in store.cardCars" :key="car">
            <div class="carousel__item" @click="slideTo(car - 1)">
              <LittleCard :img="car.img" :title="car.title" :text="car.text" />
            </div>
          </Slide>
        </Carousel>
      </div> -->
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import LittleCard from "./LittleCard.vue";
import "vue3-carousel/dist/carousel.css";
import { store } from "./../../data/store.js";
export default {
  name: "JumboTron",
  components: { Carousel, Slide, Navigation, LittleCard },

  data() {
    return {
      store,
      currentSlide: 0,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.fa-quote-right {
  opacity: 0.2;
  font-size: 100px;
  top: 10%;
  left: 35%;
  transform: translate(-35%);
  transform: rotate(20deg);
}
#jumbo {
  margin-top: 100px;
  height: calc(100vh - 100px);
  background-image: url(../../images/comment-bg-autocar.jpg);
}
/* .card {
  max-width: 300px !important;
} */

/* .card {
  height: 350px;
} */
.box-img {
  padding: 20px;
  margin: 20px auto;
  height: 150px;
  width: 150px;
}
.carousel__item {
  width: 90%;
}
@media screen and (min-width: 600px) {
  p.card-text {
    font-size: 0.8em;
  }
}
</style>
