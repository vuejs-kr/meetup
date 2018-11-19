<template>
  <transition name="fade">
    <el-header class="header" v-show="scrollY >= windowHeight && !mobile && !smartphone">
      <el-container>
        <el-container>
          <h1 class="header-logo"><a href="#"><img src="~@/assets/fourth/logo.png" alt="메인으로 이동" style="width: 50px; height: 50px;"></a></h1>
        </el-container>
        <el-container class="header-menu">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="#presenters">발표자</a></el-menu-item>
            <el-menu-item index="2"><a href="#program">프로그램</a></el-menu-item>
            <el-menu-item index="3"><a href="#directions">오시는 길</a></el-menu-item>
          </el-menu>
        </el-container>
      </el-container>
    </el-header>
  </transition>
</template>

<script>
export default {
  props: ['scrollY', 'windowHeight', 'mobile', 'smartphone'],
  computed: {
    activeIndex() {
      if (this.scrollY > this.windowHeight) {
        switch (true) {
          case this.scrollY > 1600 && this.scrollY <= 3700:
            return '2';
          case this.scrollY > 3700:
            return '3';
          default:
            return '1';
        }
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === 1) {
        this.scrollY = 0;
      }
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

.header {
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0;
  transition: all 0.2;
  background: rgba(255, 255, 255, 0.75);
}

.header .header-logo {
  position: absolute;
  top: 6px;
  left: 26px;
}

.header .header-menu {
  position: absolute;
  right: 0;
}

.header .header-menu a {
  text-decoration: none;
  font-weight: bold;
}

.el-menu-item {
  border: none;
}
</style>

<style>
.header .header-menu .el-menu {
  background-color: inherit;
  border-bottom: none;
}

.header .header-menu .el-menu-item {
  color: #35495e;
}
</style>
