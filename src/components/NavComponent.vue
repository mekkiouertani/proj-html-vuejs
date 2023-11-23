<template>
  <nav class="navbar w-100 navbar-expand-lg">
    <div class="container d-flex justify-content-between">
      <div class="nav-logo">
        <img src="../images/logo-autocar11.png" alt="" />
      </div>
      <div class="right-nav bg-white">
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav justify-content-end d-flex flex-wrap">
            <li class="nav-item" v-for="item in store.navbarList">
              <a class="nav-link active" aria-current="page" href="#">{{
                item.title
              }}</a>
            </li>

            <!-- --------------------------- -->
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </ul>
          <div class="d-flex">
            <button class="d-flex align-items-center">
              <div class="imgg">
                <img src="../images/padlock.png" alt="png" class="mbb" />
              </div>
              <p class="tit long">My account</p>
            </button>
            <i
              class="fa-solid fa-bars fs-1 d-sm-none d-xl-block"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            ></i>
            <button class="d-flex align-items-center">
              <div class="imgg">
                <img src="../images/add.png" alt="png" class="mbb" />
              </div>
              <p class="tit">Add</p>
            </button>
          </div>

          <!-- <span class="d-flex align-items-center"
            ><div class="imgg">
              <img src="../images/headphones.png" alt="png" class="mbb" />
            </div>
            <p class="mx-3 tit">+1 (234) 567 89 10</p></span
          > -->
        </div>
      </div>
    </div>
  </nav>
  <!-- CANVA -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header d-flexjustify-content-end">
      <span></span>
      <button
        type="button"
        class="btn-close d-flex justify-content-center align-items-center"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        X
      </button>
    </div>
    <div
      class="offcanvas-body d-flex flex-column align-content-center align-items-center"
    >
      <img class="head-logo" src="../images/logo-autocar11.png" alt="" />
      <h2 class="mt-5">Contact Information</h2>
      <div class="square cp"><i class="fa-solid fa-phone fs-2"></i></div>
      <p class="fs-3">+1 (234) 567 89 10</p>
      <div class="square cp"><i class="fa-solid fa-message fs-2"></i></div>
      <p class="fs-3">example@example.com</p>
      <div class="square cp"><i class="fa-solid fa-location-dot fs-2"></i></div>
      <p class="fs-3">New Jersey, USA</p>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "NavComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 100px;
  position: fixed;
  z-index: 9000;
  font-weight: bold;
  box-shadow: 0px 15px 10px -15px #111;
  background-color: white;
}
.offcanvas {
  z-index: 9999;
  width: 20%;
  .head-logo {
    width: 300px;
  }
  h2 {
    font-weight: 700;
  }
  .square {
    background-color: black;
    color: white;
    padding: 30px;
    border-radius: 10px;
    margin-top: 50px;
  }
  p {
    margin-top: 10px;
  }
}
.nav-logo {
  width: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
button {
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: 800;
  img {
    height: 40px;
    filter: invert(1);
  }
}
.imgg {
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.tit {
  margin-top: 16px;
  /* .long {
    min-width: 70px;
  } */
}
.long {
  min-width: 100px;
}
@media screen and (max-width: 1440px) {
  .imgg {
    max-width: 30px;
    max-height: 30px;
  }
}
span {
  padding: 5px 10px;
}
</style>
