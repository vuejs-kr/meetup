<template>
  <div class="location">
    <h1 id="location">장소</h1>
    <p>
      유료 주차료는 10분 당 1500원 입니다.<br>
      행사 방문자 분들에 대한 주차권은 제공되지 않고 주차 공간히 협소하오니 대중 교통 이용을 추천 드립니다.
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
  .location {
    width: 50%;
    margin: 150px auto 40px auto;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 200;
    }

    p {
      text-align: center;
    }

    #map {
      width: 100%;
      height: 400px;
    }
  }
</style>
