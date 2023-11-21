<template>
  <nav class="navbar w-100 navbar-expand-xl">
    <div class="container d-flex justify-content-between">
      <div class="nav-logo">
        <img src="../images/logo-autocar11.png" alt="" />
      </div>
      <div class="right-nav">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in store.navbarList">
              <a class="nav-link active" aria-current="page" href="#">{{
                item.title
              }}</a>
            </li>
            <!--   <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a> -->
            <!-- --------------------------- -->
            <!--   <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul> 
            </li>-->
          </ul>
          <span
            ><span><img src="../images/padlock.png" alt="png" /></span>
            <p class="d-inline">My account</p></span
          >
          <span
            ><span><img src="../images/add.png" alt="png" /></span>
            <p class="d-inline">Add</p></span
          >
          <i class="fa-solid fa-bars"></i>
          <!-- <span
            ><span><img src="../images/headphones.png" alt="png" /></span>
            <p class="d-inline">+1(234) 567 89 10</p></span
          > -->
        </div>
      </div>
    </div>
  </nav>
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
  height: 100px;
  position: fixed;
  z-index: 9999;
  font-weight: bold;
  box-shadow: 0px 15px 10px -15px #111;
}

.nav-logo {
  width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
span {
  background-color: black;
  color: white;
  padding: 20px 10px;
  border-radius: 5px;
  margin: 0 10px;
  img {
    height: 40px;
    filter: invert(1);
  }
}
</style>
