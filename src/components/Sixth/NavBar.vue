<template>
  <div class="bar-container" v-responsive="{ mobile: el => el.width <= 500 }">
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/">ARCHIVE</router-link>
    <router-link class="register-border" to="#">REGISTER</router-link>
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
.bar-container {
  position: absolute;
  width: 71.1vw;
  margin: 2.4vh auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: white;
    padding: 1.6vh 1.6vw 1.6vh 1.6vw;
    letter-spacing: 1.5px;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    transition: 0.25s;
  }
  a.router-link-exact-active {
    font-weight: bold;
  }
  a + a {
    margin-left: 1vw;
  }
  .register-border {
    background: #41b883;
    font-weight: bold;
  }
}
.bar-container.mobile {
  position: fixed;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2);
  background: white;
  height: 8vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 1;
  a {
    color: #34495e;
    margin: 0;
    font-size: 0.5rem;
  }
  a.router-link-exact-active {
    font-weight: bold;
  }
  a + a {
    margin-left: 5vw;
  }
  .register-border {
    color: white;
    font-weight: bold;
  }
}
</style>

