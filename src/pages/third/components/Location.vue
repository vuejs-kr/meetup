<template>
  <div class="location">
    <h1 id="location">장소</h1>
    <p>
      장소후원: MARU180<br><br>
      주소: 서울특별시 강남구 역삼로 180 MARU180 B1 이벤트홀 Think<br>
    </p>
    <div id="map"></div>
  </div>
</template>

<script>
  export default {
    name: 'location',
    mounted () {
      /* eslint-disable */
      var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.496469, 127.038355),
        zoom: 12
      })

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.496469, 127.038355),
        map: map
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/media_query';

  .location {
    width: 800px;
    margin: 150px auto 40px auto;

    @include mobile-only {
      width: 100%;
      margin-bottom: 0;
      margin-top: 80px;
    }

    @include tablet-only {
      width: 600px;
    }

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 200;

      @include mobile-only {
        font-size: 30px;
      }
    }

    p {
      text-align: center;
      @include mobile-only {
        font-size: 14px;
        word-break: keep-all;
      }
    }

    #map {
      width: 100%;
      height: 400px;
    }
  }
</style>
