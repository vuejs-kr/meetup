<template>
  <div id="First">
    <app-header />
    <hero-banner />
    <speaker />
    <location />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AppHeader from '@/components/First/AppHeader.vue';
import HeroBanner from '@/components/First/HeroBanner.vue';
import Speaker from '@/components/First/Speaker.vue';
import Location from '@/components/First/Location.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: {
    AppHeader,
    HeroBanner,
    Speaker,
    Location,
    AppFooter
  }
})
export default class First extends Vue {}
</script>

<style lang="scss">
</style>
