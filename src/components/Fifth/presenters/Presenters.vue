<template lang="html">
  <el-container id="presenters" class="container" direction="vertical">
    <h2 class="heading">Presenters</h2>
    <span class="subheading">발표자</span>
    <el-row type="flex" style="flex-wrap: wrap;" :gutter="20" justify="center">
      <el-col :xs="16" :sm="7" :lg="5" v-for="presentation in presentations" :key="presentation.title">
        <presenter :presenter="presentation.presenter"></presenter>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

import { presentations } from '@/store/fifth/store';
import Presenter from '@/components/Fifth/presenters/Presenter.vue';

@Component({
  components: {
    Presenter
  }
})
export default class Presenters extends Vue {
  private presentations = presentations;
}
</script>

<style lang="scss" scoped>
#presenters {
  padding-bottom: 75px;
  background: url('~@/assets/fourthFifth/img/bg.png');
}
</style>
