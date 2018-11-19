<template lang="html">
  <transition name="fade">
    <el-container class="container" v-show="scrollY >= 100">
      <el-button @click="goToTop" type="primary" size="mini" icon="el-icon-arrow-up" circle></el-button>
    </el-container>
  </transition>
</template>

<script>
export default {
  props: ['scrollY'],
  methods: {
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container {
  position: fixed;
  right: 20px;
  bottom: 72px;
  z-index: 1000;
}
.el-button {
  border-radius: 50%;
  padding: 12px;
}
</style>
