<template>
  <div class="app-footer">
	Copyright 2017 Vue.js Korea. All rights reserved.
  </div>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/media_query';
  .app-footer {
    width: 100%;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    line-height: 100px;
    background-color: #DDD;
    @include mobile-only {
      font-size: 12px;
      word-break: keep-all;
    }
  }
</style>
