<template>
  <div class="sticky-container" v-responsive="{ mobile: el => el.width <= 500 }">
    <div class="sticky-logo-container">
      <router-link to="/"><img class="sticky-logo" src="~@/assets/sixth/img/logo-wordtype@2x.png"></router-link>
    </div>
    <div class="sticky-button-container">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/">ARCHIVE</router-link>
      <router-link class="register-border" to="#">REGISTER</router-link>
    </div>
  </div>
</template>

<script>
import { ResponsiveDirective } from 'vue-responsive-components';
export default {
  directives: {
    responsive: ResponsiveDirective
  }
};
</script>

<style lang="scss" scoped>
.sticky-container.mobile {
  visibility: hidden;
}
.sticky-container {
  position: fixed;
  display: flex;
  top: 0;
  width: 100vw;
  height: 10vh;
  background: white;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  .sticky-logo-container {
    flex: 1;
    .sticky-logo {
      width: 20vw;
    }
  }
  .sticky-button-container {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: #34495e;
      padding: 1.6vh 1.6vw 1.6vh 1.6vw;
      letter-spacing: 1.5px;
      font-size: 13px;
      font-family: 'Montserrat', sans-serif;
      transition: 0.25s;
    }
    a + a {
      margin-left: 1vw;
    }
    .register-border {
      color: white;
      background: #41b883;
      font-weight: bold;
    }
    a.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
