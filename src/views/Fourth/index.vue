<template>
  <div>
    <gotcha />
    <app-header />
    <app-main />
    <app-footer />
    <side-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import ElementUI from 'element-ui';

import Gotcha from '@/components/Fourth/Gotcha.vue';
import Header from '@/components/Fourth/Header.vue';
import Main from '@/components/Fourth/Main.vue';
import Footer from '@/components/Fourth/Footer.vue';
import SideButton from '@/components/Fourth/SideButton.vue';

import FourthMixin from '@/views/Fourth/FourthMixin';

Vue.use(ElementUI);
Vue.mixin(FourthMixin);

@Component({
  components: {
    Gotcha,
    AppHeader: Header,
    AppMain: Main,
    AppFooter: Footer,
    SideButton
  }
})
export default class Fourth extends Vue {}
</script>

<style lang="scss">
@import '~@/assets/fourth/css/import.css';
@import '~@/assets/fourth/css/element-variables';

h2.heading {
  font-size: 5vh;
  margin: 120px 0 0;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  color: #42b883;
  text-shadow: 1px 1px #35495e;
}
span.subheading {
  display: block;
  margin: 12px 0 50px;
  color: #35495e;
}
</style>
