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

<script>
export default {
  props: {
    session: {
      type: Object
    }
  }
};
</script>

<style lang="css">
</style>
