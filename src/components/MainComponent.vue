<template>
  <div class="container mt-5">
    <!-- SELECT OPTIONS -->
    <div class="d-flex flex-wrap w-100 justify-content-between">
      <input
        v-model="searchCar"
        type="text"
        class="text-secondary text-center mx-3 my-2"
        placeholder="Keywords"
      />
      <input
        type="text"
        class="text-secondary text-center mx-3 my-2"
        placeholder="Location"
      />
      <select
        class="mx-3 my-2 text-center"
        name="top-main-search"
        id="top-main-search"
        v-for="(select, index) in store.topMainSelect"
        :key="index"
      >
        <option :value="select.title">{{ select.title }}</option>
        <option
          :value="options"
          v-for="(options, index) in store.topMainSelect[index].options"
          :key="index"
        >
          {{ options }}
        </option>
      </select>
      <button class="my-2 bg-black text-white mx-3">Search</button>
    </div>
    <!-- END SELECT OPTIONS -->
    <!-- CARD -->
    <div class="row mt-5">
      <CardTopMain
        class="col-12 col-md-4 col-lg-2"
        v-for="car in store.cardSearchMain"
        :title="car.name"
        :img="car.img"
        :listings="car.listings"
      />
    </div>
    <!-- END CARD -->
    <!-- BIG CARDS -->
    <div class="row mt-5 gy-3">
      <h6
        v-show="filteredCars.length <= 0"
        class="fs-1 bg-black text-white w-25 border-radius"
      >
        No cars founded!
      </h6>
      <BigCards
        class="col-12 col-md-4 col-lg-3"
        v-for="car in filteredCars"
        :name="car.name"
        :model="car.model"
        :type="car.type"
        :price="car.price"
        :fuel="car.fuel"
        :img="car.img"
      />
      <p class="text-white text-center my-5">
        <span class="bg-black py-4 px-5 fw-bold cp"
          >Show All Cars <i class="fa-solid fa-arrow-right"></i
        ></span>
      </p>
    </div>
    <!-- END BIG CARDS -->
    <!-- BUY CARS -->
    <BuyCars />
  </div>
  <!-- END CONTAINER -->
  <JumboTron />
  <div class="container">
    <LittleCard />
  </div>
</template>

<script>
import { store } from "../data/store.js";
import CardTopMain from "./MainChilds/CardTopMain.vue";
import BigCards from "./MainChilds/BigCards.vue";
import BuyCars from "./MainChilds/BuyCars.vue";
import JumboTron from "./MainChilds/JumboTron.vue";
import LittleCard from "./MainChilds/LittleCard.vue";

export default {
  name: "MainComponent",
  components: { CardTopMain, BigCards, BuyCars, JumboTron, LittleCard },
  data() {
    return {
      store,
      searchCar: "",
    };
  },
  methods: {},
  computed: {
    filteredCars() {
      const lowercasesearchCar = this.searchCar.toLowerCase();
      return this.store.carsShowcase.filter((car) =>
        car.name.toLowerCase().includes(lowercasesearchCar)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
select,
input,
button {
  border: 1px solid grey;
  width: 120px;
  height: 75px;
  border-radius: 5px;
}
</style>
