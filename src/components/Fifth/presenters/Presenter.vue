<template lang="html">
  <el-card :body-style="{ padding: '0px' }">
    <img :src="presenter.imgUrl" class="image">
    <div class="card">
      <span class="name">{{ presenter.name }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ presenter.affiliation }}</time>
        <div class="description" v-html="markedDescription"></div>
      </div>
    </div>
  </el-card>
</template>

<script>
import * as marked from 'marked';
export default {
  props: {
    presenter: {
      type: Object
    }
  },
  computed: {
    markedDescription() {
      return marked(this.presenter.description);
    }
  }
};
</script>

<style lang="css" scoped>
.el-card {
  margin: 0 0 30px;
}

.card {
  padding: 14px;
  text-align: left;
}

.time {
  font-size: 13px;
  color: #999;
}

.name {
  font-weight: bold;
  font-size: 20px;
  color: #42b883;
}

.bottom {
  margin-top: 10px;
  line-height: 12px;
}

.description {
  margin-top: 20px;
  line-height: 17px;
  font-size: 15px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
