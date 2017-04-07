<template>
  <div class="hero-banner">
    <h1>
      <img src="~@/assets/logo.png">ue<span>&#183;</span>tiful Korea
    </h1>
    <hr>
    <h2>2 0 1 7. 0 4. 1 9</h2>

    <p>
      4월 19일, Vue.js 한국어 사용자 모임 1회가 열립니다.<br>
      많이 배울 수 있는 자리가 되었으면 좋겠습니다. :)<br><br>
      감사합니다.
    </p>
    <a href="http://onoffmix.com/event/96947" class="enter-button" target="_blank">참가 신청하기!</a>
  </div>
</template>

<script>
  export default {
    name: 'hero-banner'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/media_query';

  .hero-banner {
    width: 800px;
    margin: 0 auto;

    @include mobile-only {
      width: 100%;
    }

    @include tablet-only {
      width: 600px;
    }

    h1 {
      img {
        width: 105px;
        margin-top: -40px;
        margin-right: -18px;
      }

      width: 100%;
      margin-top: 150px;
      text-align: center;
      font-size: 80px;
      color: #445b71;

      span {
        display: inline-block;
        margin: 0 2px;
        color: #3AB982;
      }

      @include mobile-only {
        img {
          width: 75px;
          margin-top: -28px;
          margin-right: -14px;
        }
        font-size: 60px;
        margin-top: 20px;
      }
    }

    hr {
      width: 200px;
      margin: 5px auto 15px auto;
      border: none;
      border-top: 3px solid #3AB982;
      border-radius: 2px;
    }

    h2 {
      text-align: center;
      font-weight: 200;
      font-size: 25px;
    }

    p {
      margin-top: 80px;
      font-size: 18px;
      text-align: center;

      @include mobile-only {
        font-size: 14px;
      }
    }

    .enter-button {
      display: block;
      width: 200px;
      height: 40px;
      margin: 20px auto;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      font-size: 15px;
      text-decoration: none;  
      color: white;
      border-radius: 30px;
      background-color: #3AB982;
      border: none;
      transition-duration: 0.4s;

      &:active, &:hover {
        background-color: #319267
      }
    }
  }
</style>
