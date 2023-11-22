<template>
  <div class="card p-2 border-0 border-bottom">
    <img :src="img" class="card-img-top" :alt="name + model" />
    <div class="card-body">
      <h5 class="card-title">
        {{ name }} {{ model }}
        <i
          class="fa-solid fa-check bg-black text-white fs-6 p-1 rounded-circle"
        ></i>
      </h5>
      <p class="card-text position-relative">{{ type }}</p>
      <p class="d-flex flex-wrap">
        <span><i class="fa-solid fa-dollar-sign"></i> {{ price }}.000</span>
        <span><i class="fa-solid fa-car"></i> {{ name }}</span>
        <span><i class="fa-solid fa-gas-pump"></i> {{ fuel }}</span>
        <i
          class="fs-4 fa-solid fa-heart position-absolute end-0 bottom-0 m-2 text-secondary"
        ></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigCards",
  props: {
    name: String,
    model: String,
    type: String,
    price: Number,
    fuel: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
span {
  margin-right: 13px;
}
.card {
  border-right: 1px solid lightgrey !important;
  cursor: pointer;
}
</style>
