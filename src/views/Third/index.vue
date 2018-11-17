<template>
  <div id="Third">
    <hero-banner />
    <app-header />
    <speaker />
    <sponsor />
    <location />

    <router-link to="/first" class="enter-button">1회 모임 살펴보기</router-link>
    <router-link to="/second" class="enter-button">2회 모임 살펴보기</router-link>

    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AppHeader from '@/components/Third/AppHeader.vue';
import HeroBanner from '@/components/Third/HeroBanner.vue';
import Speaker from '@/components/Third/Speaker.vue';
import Location from '@/components/Third/Location.vue';
import Sponsor from '@/components/Third/Sponsor.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: {
    AppHeader,
    HeroBanner,
    Speaker,
    Location,
    Sponsor,
    AppFooter
  }
})
export default class Third extends Vue {}
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
