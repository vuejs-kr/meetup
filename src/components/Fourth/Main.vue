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

<script>
import Presenters from '@/components/Fourth/presenters/Presenters';
import Program from '@/components/Fourth/program/Program';
import Contributors from '@/components/Fourth/contributors/Contributors';
import Directions from '@/components/Fourth/directions/Directions';

export default {
  components: {
    Presenters,
    Program,
    Contributors,
    Directions
  }
};
</script>

<style lang="css" scoped>
.el-main {
  padding: 0;
  overflow-x: hidden;
}
</style>
