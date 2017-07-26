<template>
  <div>
    <app-header />
    <hero-banner />
    <speaker />
    <location />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import HeroBanner from './components/HeroBanner'
  import Speaker from './components/Speaker'
  import Location from './components/Location'
  import AppFooter from '@/shared-components/AppFooter'

  export default {
    name: 'First',
    components: {
      AppHeader,
      HeroBanner,
      Speaker,
      Location,
      AppFooter
    }
  }
</script>

<style lang="scss">
</style>
