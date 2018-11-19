<template lang="html">
  <el-main>
    <el-row>
      <presenters></presenters>
    </el-row>
    <el-row>
      <program></program>
    </el-row>
    <el-row>
      <contributors
        :mobile='{mobile}'
        :smartphone='{smartphone}'>
      ></contributors>
    </el-row>
    <el-row>
      <directions></directions>
    </el-row>
  </el-main>
</template>

<script>
import Presenters from '@/components/Fourth/presenters/Presenters';
import Program from '@/components/Fourth/program/Program';
import Contributors from '@/components/Fourth/contributors/Contributors';
import Directions from '@/components/Fourth/directions/Directions';

export default {
  props: ['mobile', 'smartphone'],
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
