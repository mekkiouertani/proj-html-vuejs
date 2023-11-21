<template>
  <div class="row mt-5 position-relative">
    <!-- LEFT -->
    <div id="left" class="col-12 col-lg-7 position-relative mt-5">
      <div id="car">
        <img
          id="spin"
          src="../../images/circle-auto-car-1.png"
          alt=""
          class=""
        />
        <img
          src="../../images/aoutcar-about-1.png"
          alt=""
          class="position-absolute start-0"
        />
      </div>

      <section>
        <div
          class="fw-bold text-center circle bg-black text-white rounded-circle position-absolute top-0"
        >
          <div class="circle-text">
            <h6 class="">24</h6>
            <p class="fs-3 fw-light">
              Years of <br />
              experience
            </p>
          </div>
        </div>
        <div
          class="fw-bold text-center circle bg-black text-white rounded-circle position-absolute bottom-0 end-0"
        >
          <div class="circle-text">
            <h6 class="">240</h6>
            <p class="fs-3 fw-light">
              Specieal Expert <br />
              Team
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- RIGHT -->
    <div class="col-12 col-lg-5 mt-5">
      <h2>Want to buy or sell a vehicle?</h2>
      <p>
        You can put your vehicles for sale by registering on our website.
        Whether you are a dealer or sell personally. Sell ​​your vehicle in the
        most profitable way. With this system, which has millions of members,
        you will be able to buy and sell vehicles quickly.
      </p>
      <img src="../../images/divider.jpg" alt="divider" />
      <div class="d-flex align-items-start my-3">
        <div class="box-img">
          <img src="../../images/cars-icon.png" alt="" />
        </div>
        <div class="mx-3">
          <h3>Model Vehicles</h3>
          <p>
            We are sure that you will find vehicles of suitable models on our
            website.
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start my-3">
        <div class="box-img">
          <img src="../../images/cars-setting-icon.png" alt="" />
        </div>
        <div class="mx-3">
          <h3>2nd Hand Vehicles</h3>
          <p>
            You can put your used vehicles for sale by adding them to our
            website.
          </p>
        </div>
      </div>
      <span class="bg-black py-4 px-5 fw-bold text-white my-3"
        >Get to know us <i class="fa-solid fa-arrow-right"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyCars",
};
</script>

<style lang="scss" scoped>
section {
  font-family: "Teko", sans-serif;
}
.circle-text {
  margin-top: 10%;
  line-height: 0.8;
  h6 {
    margin-left: 10px;
    font-size: 4.5em;
    letter-spacing: 10px;
  }
}
#car {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
h2 {
  font-weight: 900;
}
h3 {
  font-weight: 700;
}
#left {
  height: 100%;
  max-width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  #spin {
    width: 90%;
    height: 90%;
    animation-name: spin;
    animation-duration: 9000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.circle {
  width: 170px;
  height: 170px;
}
</style>
