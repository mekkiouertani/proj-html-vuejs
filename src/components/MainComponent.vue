<template>
  <div class="container mt-5">
    <div class="row">
      <SearchMain
        class="col-12 col-md-4 col-lg-2"
        v-for="car in store.cardSearchMain"
        :title="car.name"
        :img="car.img"
        :listings="car.listings"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../data/store.js";
import SearchMain from "./MainChilds/SearchMain.vue";

export default {
  name: "MainComponent",
  components: { SearchMain },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
