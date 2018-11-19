<template lang="html">
  <el-container>
    <a :href="volunteer.pageUrl" target="_blank" v-on:mouseover="focusOnVolunteer(volunteer, $event)" v-on:mouseleave="unFocusOnVolunteer(volunteer, $event)">
      <img :src="volunteer.imgUrl" alt="프로필 사진">
      <span class="name">{{ volunteer.name }}</span>
      <div class="el-tooltip">
        {{ volunteer.description }}
      </div>
    </a>
  </el-container>
</template>

<script>
export default {
  props: {
    volunteer: {
      type: Object
    }
  },
  methods: {
    focusOnVolunteer(volunteer, event) {
      this.$emit('focusOnVolunteer', volunteer, event);
    },
    unFocusOnVolunteer(volunteer, event) {
      this.$emit('unFocusOnVolunteer', volunteer, event);
    }
  }
};
</script>

<style lang="scss">
$focus-color: #0c0c0c;
a:hover .el-tooltip {
  opacity: 1;
}
.el-tooltip {
  bottom: -35px;
  position: absolute;
  width: 100%;
  font-size: 0.8em;
  line-height: 1.2;
  background-color: $focus-color;
  color: #fff;
  text-align: center;
  padding: 6px 10px;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 300ms;
}
.el-tooltip:after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent $focus-color transparent;
}
</style>
