<template>
  <div class="container mt-5">
    <!-- SELECT OPTIONS -->
    <div class="d-flex flex-wrap w-100 justify-content-between">
      <input
        type="text"
        class="text-secondary text-center my-2"
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
      <button class="my-2 bg-black text-white">Search</button>
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
  </div>
</template>

<script>
import { store } from "../data/store.js";
import CardTopMain from "./MainChilds/CardTopMain.vue";

export default {
  name: "MainComponent",
  components: { CardTopMain },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  background-color: red;
}

input {
  display: inline-block !important;
}

select,
input,
button {
  border: 1px solid grey;
  width: 120px;
  height: 75px;
  border-radius: 5px;
}
</style>
