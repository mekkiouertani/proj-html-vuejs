<template>
  <section class="bg-black text-white">
    <div class="container">
      <div class="row">
        <!-- LEFT -->
        <!-- logo left -->
        <div class="left col-md-12 col-lg-3 mt-5">
          <div class="med justify-content-between align-items-center">
            <div class="logo mb-3">
              <img src="../images/logo-footer-autocar11.png" alt="" />
            </div>
            <!-- ul left -->
            <ul>
              <li v-for="el in store.footerCredits">
                <span><i :class="el.icon"></i></span>
                {{ el.title }}
              </li>
            </ul>
          </div>
          <!-- icon left -->
          <div class="text-center">
            <i class="px-3 fs-3 fa-brands fa-facebook"></i>
            <i class="px-3 fs-3 fa-brands fa-instagram"></i>
            <i class="px-3 fs-3 fa-brands fa-twitter"></i>
          </div>
        </div>
        <!-- MIDDLE -->
        <div class="middle col-md-12 col-lg-4 mt-5">
          <div class="d-flex flex-column justify-content-center">
            <h3>Join Our Newsletter</h3>
            <p>Subscribe to be informed about our services and products.</p>
            <input type="email" placeholder="Your Email Address" />
            <button class="text-secondary">
              SUBSCRIBE <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <!-- RIGHT -->
        <div
          class="mt-5 right col-md-12 col-lg-5 d-flex justify-content-between"
        >
          <div id="part-1">
            <ul class="d-flex flex-wrap list-group-item">
              <li
                v-for="(item, index) in store.FooterList"
                :key="index"
                class="mx-5 my-3"
              >
                <h4 class="text-uppercase">{{ item.title }}</h4>
                <div v-for="(list, index) in store.FooterList[index].listItem">
                  - {{ list }}
                </div>
              </li>
            </ul>
          </div>
          <!--  <div id="part-3">RIGHT parte 2</div> -->
        </div>
      </div>
      <p class="text-center">2023 autocar</p>
    </div>
  </section>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "FooterComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 50px;
  margin-bottom: -50px;
}
ul {
  list-style: none;
}
.left {
  .logo {
    width: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.middle {
  flex-grow: 1;
  button,
  input {
    height: 70px;
  }
  button {
    background-color: white;
    border: 0px;
    margin-top: 10px;
  }
  input[type="email"] {
    padding: 20px;
  }
}
@media screen and (max-width: 1000px) {
  .med {
    display: flex !important;
    align-items: top !important;
  }
}
</style>
