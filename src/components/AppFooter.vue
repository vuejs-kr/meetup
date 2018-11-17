<template>
  <div class="app-footer">
	Copyright 2018 Vue.js Korea. All rights reserved.
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/assets/media_query';

.app-footer {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  line-height: 100px;
  background-color: #ddd;
  @include mobile-only {
    font-size: 12px;
    word-break: keep-all;
  }
}
</style>
