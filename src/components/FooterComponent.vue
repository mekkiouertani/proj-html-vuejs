<template>
  <section class="bg-black text-white">
    <div class="container">
      <div class="row">
        <!-- LEFT -->
        <div class="left col-12 col-md-4 col-lg-4">LEFT</div>
        <!-- MIDDLE -->
        <div class="middle col-12 col-md-4 col-lg-4">MIDDLE</div>
        <!-- RIGHT -->
        <div
          class="right col-12 col-md-4 col-lg-4 d-flex justify-content-between"
        >
          <div id="part-1">parte 1</div>
          <div id="part-3">parte 2</div>
        </div>
      </div>
      <p class="text-center">2023 autocar</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped></style>
