<template>
  <div id="sixth">
    <nav-bar :isMobile="isMobile" />
    <div class="main-container" :class="{ isAbout, isMobile }">
      <img class="main-left" src="~@/assets/sixth/img/vue-left.svg">
      <div class="main-center">
        <img class="main-logo" src="~@/assets/sixth/img/vue-up.svg">
        <img v-if="isHome" class="main-title" src="~@/assets/sixth/img/logo-wordtype-white@2x.png">
        <h1 v-if="isAbout" class="main-title-about">ABOUT US</h1>
        <img class="main-logo reversed" src="~@/assets/sixth/img/vue-up.svg">
      </div>
      <img class="main-right" src="~@/assets/sixth/img/vue-right.svg">
    </div>
    <transition name="slide-fade" v-if="this.isDesktop">
      <sticky-nav-bar v-if="this.showSticky" />
    </transition>
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
    if (name === 'about') {
      this.isAbout = true;
      this.isHome = false;
    } else if (name === 'home') {
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
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease;
  &:before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    background: linear-gradient(rgba(34, 51, 67, 0.76)), url(~@/assets/sixth/img/main-bg-image.jpg) no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  .main-left,
  .main-right {
    height: 100%;
    width: 15.3vw;
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
    .main-logo {
      height: 18vmax;
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
  & + .main-title-about {
    font-size: 5px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
