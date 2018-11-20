<template lang="html">
  <el-main>
    <el-row>
      <presenters />
    </el-row>
    <el-row>
      <program />
    </el-row>
    <el-row>
      <contributors />
    </el-row>
    <el-row>
      <directions />
    </el-row>
  </el-main>
</template>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Presenters from '@/components/Fifth/presenters/Presenters.vue';
import Program from '@/components/Fifth/program/Program.vue';
import Contributors from '@/components/Fifth/contributors/Contributors.vue';
import Directions from '@/components/Fifth/directions/Directions.vue';

@Component({
  components: {
    Presenters,
    Program,
    Contributors,
    Directions
  }
})
export default class Main extends Vue {}
</script>

<style lang="css" scoped>
.el-main {
  padding: 0;
  overflow-x: hidden;
}
</style>
