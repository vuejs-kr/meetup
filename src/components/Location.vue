<template>
  <div class="location">
    <h1 id="location">장소</h1>
    <div id="map"></div>
  </div>
</template>

<script>
  export default {
    name: 'location',
    mounted () {
      /* eslint-disable */
      var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5079423, 127.042908),
        zoom: 12
      })

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5079423, 127.042908),
        map: map
      })
    }
  }
</script>

<style lang="scss" scoped>
  .location {
    width: 50%;
    margin: 150px auto 40px auto;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 200;
    }

    #map {
      width: 100%;
      height: 400px;
    }
  }
</style>
