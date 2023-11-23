<template>
  <div class="carousel__item" :key="car">
    <div class="card p-3 cp">
      <img :src="img" class="card-img-top" :alt="title" />
      <span>06.07.2022 - Auto Car</span>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }} [...]</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselTest",
  props: ["img", "title", "text"],
};
</script>

<style lang="scss" scoped></style>
