<template>
  <div class="location">
    <h1 id="location">장소</h1>
    <p>
      주소:  강남구 역삼로 165 해성빌딩 팁스타운<br>
      아쉽게도 행사 방문자 분들에 대한 주차권은 제공되지 않습니다. 대중 교통 이용을 추천 드립니다.
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
        center: new naver.maps.LatLng(37.4954189, 127.0371955),
        zoom: 12
      })
349598193,
      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.4954189, 127.0371955),
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
