<template>
  <div id="second">
    <hero-banner />
    <app-header />
    <speaker />
    <sponsor />
    <location />

    <router-link to="/" class="enter-button">1회 모임 살펴보기</router-link>
    <router-link to="/second" class="enter-button">2회 모임 살펴보기</router-link>

    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import HeroBanner from './components/HeroBanner'
  import Speaker from './components/Speaker'
  import Location from './components/Location'
  import Sponsor from './components/Sponsor'
  import AppFooter from '@/shared-components/AppFooter'

  export default {
    name: 'Second',
    components: {
      AppHeader,
      HeroBanner,
      Speaker,
      Location,
      Sponsor,
      AppFooter
    }
  }
</script>

<style lang="scss">
  body {
    overflow-x: hidden;
  }
  .enter-button {
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;  
    color: white;
    border-radius: 30px;
    background-color: #3AB982;
    border: none;
    transition-duration: 0.4s;

    &:active, &:hover {
      background-color: #319267;
      color: white;
      text-decoration: none;
    }
  }
</style>
