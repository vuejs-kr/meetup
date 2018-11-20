<template lang="html">
  <el-container direction="vertical">
    <a class="sponsor-img" :href="sponsor.pageUrl">
      <img :src="sponsor.imgUrl" :alt="'후원사' + sponsor.name">
    </a>
    <h3 class="name">
      {{ sponsor.name }}
    </h3>
  </el-container>
</template>

<script>
export default {
  props: {
    sponsor: {
      type: Object
    }
  }
};
</script>
