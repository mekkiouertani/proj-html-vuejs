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
          <h6 class="text-center mb-5 x">Opinion from our happy customers</h6>
        </div>
        <Carousel
          v-bind:="settings"
          :autoplay="2000"
          :wrapAround="true"
          :transition="500"
          :breakpoints="breakpoints"
        >
          <Slide v-for="user in store.user" :key="user">
            <div class="carousel__item cp">
              <div class="card p-4 cp">
                <p class="card-text position-relative">
                  {{ user.text }}
                  <i class="fa-solid fa-quote-right position-absolute"></i>
                </p>
                <div class="box-img">
                  <img :src="user.img" class="card-img-top" :alt="user.name" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ user.name }}</h5>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
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
import { Carousel, Slide, Navigation } from "vue3-carousel";
import LittleCard from "./LittleCard.vue";
import "vue3-carousel/dist/carousel.css";
import { store } from "./../../data/store.js";
export default {
  name: "JumboTron",
  components: { Carousel, Slide, Navigation, LittleCard },

  data() {
    return {
      store,
      settings: {
        itemsToShow: 1,
      },
      breakpoints: {
        400: {
          itemsToShow: 2,
        },
        1000: {
          itemsToShow: 3,
        },
        1200: {
          itemsToShow: 3,
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.fa-thumbs-up {
  font-size: 4em;
  padding-top: 20px;
}
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
  background-repeat: no-repeat;
}

.card {
  max-width: 300px;
}
.box-img {
  padding: 20px;
  margin: 20px auto;
  height: 200px;
  width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.carousel__item {
  width: 90%;
}
@media screen and (max-width: 1140px) {
}
@media screen and (max-width: 600px) {
  p.card-text {
    font-size: 0.8em;
  }
}
</style>
