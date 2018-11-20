<template lang="html">
  <el-container>
    <span>{{ session.time }}</span>
    <el-container>
      {{ session.title}}
      <br>
      <p class="presenter" v-if="session.presenter">
        <span>
          {{ session.presenter.name }}
        </span>
        <span>
          {{ session.presenter.affiliation }}
        </span>
      </p>
    </el-container>
    <div class="highlight"></div>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Session extends Vue {
  @Prop(Object)
  private session: object = {};
}
</script>

<style lang="css">
</style>
