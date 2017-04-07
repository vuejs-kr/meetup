<template>
  <div id="app">
    <app-header/>
    <hero-banner/>
    <speaker/>
    <location/>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import HeroBanner from '@/components/HeroBanner'
  import Speaker from '@/components/Speaker'
  import Location from '@/components/Location'
  import AppFooter from '@/components/AppFooter'

  export default {
    name: 'app',
    components: {
      'app-header': AppHeader,
      'hero-banner': HeroBanner,
      'speaker': Speaker,
      'location': Location,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/style.scss';

  #app {
    width: 100%;
    font-family: Source Sans Pro, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #F9F9F9;
  }
</style>
