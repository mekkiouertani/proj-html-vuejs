<template>
  <!-- CARD -->
  <div class="card">
    <img :src="img" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ listings }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTopMain",
  props: {
    img: String,
    title: String,
    listings: Number,
  },
};
</script>

<style lang="scss" scoped></style>
