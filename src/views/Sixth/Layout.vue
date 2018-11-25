<template>
  <div id="sixth">
    <nav-bar v-if="isMobile" :isMobile="isMobile" />
    <sticky-nav-bar v-if="isDesktop" />
    <div class="main-container" :class="{ isAbout, isMobile }">
      <div class="main-left">
        <img class="main-left-image" src="~@/assets/sixth/img/vue-left.svg">
      </div>
      <div class="main-center">
        <div class="main-logo-container top">
          <img class="main-logo" src="~@/assets/sixth/img/vue-up.svg">
        </div>
        <img v-if="isHome" class="main-title" src="~@/assets/sixth/img/logo-wordtype-white@2x.png">
        <h1 v-if="isAbout" class="main-title-about">ABOUT US</h1>
        <div class="main-logo-container bottom">
          <img class="main-logo reversed" src="~@/assets/sixth/img/vue-up.svg">
        </div>
      </div>
      <div class="main-right">
        <img class="main-right-image" src="~@/assets/sixth/img/vue-right.svg">
      </div>
    </div>
    <router-view/>
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import NavBar from '@/components/Sixth/NavBar.vue';
import StickyNavBar from '@/components/Sixth/StickyNavBar.vue';
import FooterComponent from '@/components/Sixth/FooterComponent.vue';

@Component({
  components: {
    FooterComponent,
    NavBar,
    StickyNavBar
  }
})
export default class SixthLayout extends Vue {
  private showSticky = false;
  private isHome = true;
  private isAbout = false;
  private windowSize = {
    height: 0,
    width: 0
  };

  @Watch('$route.name')
  private watchRouteName(name: string) {
    if (name === 'root_about') {
      this.isAbout = true;
      this.isHome = false;
    } else if (name === 'root') {
      this.isHome = true;
      this.isAbout = false;
    }
  }

  private get isDesktop() {
    return this.windowSize.width > 600;
  }

  private get isMobile() {
    return this.windowSize.width < 600;
  }

  private mounted() {
    this.windowSize.height = window.innerHeight;
    this.windowSize.width = window.innerWidth;
  }

  private created() {
    window.addEventListener('resize', this.handleResize);
    if (window.innerWidth >= 600) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  private destroyed() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll(e: UIEvent) {
    this.showSticky = window.scrollY > window.innerHeight;
  }

  private handleResize(e: UIEvent) {
    this.windowSize.height = window.innerHeight;
    this.windowSize.width = window.innerWidth;
  }
}
</script>

<style lang="scss">
@import '~@/assets/sixth/css/app.scss';
@import url(https://fonts.googleapis.com/css?family=Montserrat:500);

#sixth {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main-container {
  display: flex;
  height: 92vh;
  width: 100vw;
  margin-top: 8vh;
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: linear-gradient(rgba(34, 51, 67, 0.76)), url(~@/assets/sixth/img/main-bg-image.jpg) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .main-left,
  .main-right {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20vw;
    .main-left-image, .main-right-image {
      height: 100%;
    }
  }
  .main-left {
    justify-content: flex-start;
  }
  .main-right {
    justify-content: flex-end;
  }
  .main-center {
    flex: 1 1 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .main-title {
      width: 49vw;
      height: 4.5vw;
    }
    .main-title-about {
      font-size: 40px;
      font-weight: bold;
      color: white;
    }
    .main-logo-container {
      display: flex;
      justify-content: center;
      height: 30vmin;
      .main-logo {
        height: 100%;
      }
    }
    .top {
      align-items: flex-start;
    }
    .bottom {
      align-items: flex-end;
    }
    .reversed {
      transform: rotate(180deg);
    }
  }
}
.isAbout {
  background: #34495e;
}
.isMobile {
  margin-top: 8vh;
  height: 568px;
  &:before {
    height: 768px;
  }
  .main-center {
    .main-title-about {
      font-size: 2rem;
    }
  }
}
</style>
