<template lang="html">
  <el-container id="directions" class="container" direction="vertical">
    <h2 class="heading">Directions</h2>
    <span class="subheading">오시는 길</span>
    <div id="map" ref='map'></div>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

declare const daum: any;

@Component({})
export default class Location extends Vue {
  private mounted() {
    const map = new daum.maps.Map(this.$refs.map, {
      center: new daum.maps.LatLng(37.506168, 127.063924),
      level: 3
    });

    new daum.maps.Marker({
      position: new daum.maps.LatLng(37.506168, 127.063924)
    }).setMap(map);
  }
}
</script>

<style lang="scss" scoped>
#directions {
  width: 800px;
  margin: 0 auto 100px auto;
  background: url('~@/assets/fourthFifth/img/bg.png');
}

#map {
  width: 100%;
  height: 400px;
}
</style>
