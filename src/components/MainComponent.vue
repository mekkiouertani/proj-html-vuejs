<template>
  <div class="container mt-5">
    <!-- SELECT OPTIONS -->
    <div class="d-flex flex-wrap w-100 justify-content-between">
      <input
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
      <BigCards
        class="col-12 col-md-4 col-lg-3"
        v-for="car in store.carsShowcase"
        :name="car.name"
        :model="car.model"
        :type="car.type"
        :price="car.price"
        :fuel="car.fuel"
        :img="car.img"
      />
      <p class="text-white text-center my-5">
        <span class="bg-black py-4 px-5 fw-bold"
          >Show All Cars <i class="fa-solid fa-arrow-right"></i
        ></span>
      </p>
    </div>
    <!-- END BIG CARDS -->
    <!-- BUY CARS -->
    <BuyCars />
  </div>
</template>

<script>
import { store } from "../data/store.js";
import CardTopMain from "./MainChilds/CardTopMain.vue";
import BigCards from "./MainChilds/BigCards.vue";
import BuyCars from "./MainChilds/BuyCars.vue";

export default {
  name: "MainComponent",
  components: { CardTopMain, BigCards, BuyCars },
  data() {
    return {
      store,
    };
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
