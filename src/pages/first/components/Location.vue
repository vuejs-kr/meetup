<template>
  <div class="location">
    <h1 id="location">장소</h1>
    <p>
      장소후원 : 은행권청년창업재단 D.CAMP<br><br>
      주소: 서울특별시 강남구 선릉로 551 D.CAMP(디캠프) 6층 다목적홀<br>
      유료 주차료는 10분 당 1500원 입니다.<br>
      행사 방문자 분들에 대한 주차권은 제공되지 않고 주차 공간이 협소하오니 대중 교통 이용을 추천 드립니다.
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
        center: new naver.maps.LatLng(37.5078267, 127.0454166),
        zoom: 12
      })

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5078267, 127.0454166),
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
