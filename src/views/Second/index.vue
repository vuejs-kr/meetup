<template>
  <div id="second">
    <hero-banner />
    <app-header />
    <speaker />
    <!-- <sponser /> -->
    <location />
    <router-link to="/first" class="enter-button">1회 모임 살펴보기</router-link>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AppHeader from '@/components/Second/AppHeader.vue';
import HeroBanner from '@/components/Second/HeroBanner.vue';
import Speaker from '@/components/Second/Speaker.vue';
import Location from '@/components/Second/Location.vue';
import Sponser from '@/components/Second/Sponser.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: {
    AppHeader,
    HeroBanner,
    Speaker,
    Location,
    Sponser,
    AppFooter
  }
})
export default class Second extends Vue {}
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
  background-color: #3ab982;
  border: none;
  transition-duration: 0.4s;

  &:active,
  &:hover {
    background-color: #319267;
    color: white;
    text-decoration: none;
  }
}
</style>