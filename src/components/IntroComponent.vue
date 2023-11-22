<template>
  <Transition name="fade">
    <div
      v-show="isHidden"
      class="d-flex justify-content-center align-items-center"
    >
      <img
        src="../images/loader-autocar.png"
        alt=""
        class="position-absolute"
      />
      <i class="fa-solid fa-circle-notch fa-spin position-absolute"></i>
    </div>
  </Transition>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "IntroComponent",
  data() {
    return {
      store,
      isHidden: store.isHidden,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = false;
    }, 2500);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
div {
  height: 0vh;
  width: 100%;
  /* background-color: $middle-color; */
  animation: intro 2s;
}
@keyframes intro {
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
}
img {
  animation: spin 3s ease-out infinite;
}
@keyframes spin {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}
i {
  font-size: 300px;
}
</style>
