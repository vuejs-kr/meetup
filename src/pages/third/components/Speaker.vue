<template>
  <div class="speaker">
    <h1 id="speaker">세션</h1>
    <div class="speaker-list">
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/kellyWOO.png">
        </div>
        <div class="content">
          <div class="title">Virtual dom to render</div><br>
          <div class="profile-name">우경화(kelly)</div>
          <div class="description">프론트엔드에 입문한지 얼마 안된 ex퍼블리셔 입니다</div>
        </div>
      </div>
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/seonghoPARK.png">
        </div>
        <div class="content">
          <div class="title">Vue.js로 Unit Test하기</div><br>
          <div class="profile-name">박성호</div>
          <div class="description">마이리얼트립 웹 프론트엔드 개발자입니다!</div>
        </div>
      </div>
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/junseokCHOI.png">
        </div>
        <div class="content">
          <div class="title">pwa 시작하기</div><br>
          <div class="profile-name">최준석</div>
          <div class="description">잘부탁해욤</div>
        </div>
      </div>
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/kevinGU.png">
        </div>
        <div class="content">
          <div class="title">Q&amp;A</div><br>
          <div class="profile-name">kevin</div>
          <div class="description"></div>
        </div>
      </div>
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/bobLEE.png">
        </div>
        <div class="content">
          <div class="title">OX 퀴즈</div><br>
          <div class="profile-name">Bob Lee</div>
          <div class="description"></div>
        </div>
      </div>
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/third/seungminLEE.jpg">
        </div>
        <div class="content">
          <div class="title">네트워킹 파티</div><br>
          <div class="profile-name">이승민</div>
          <div class="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'speaker'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/media_query';

  .speaker {
    width: 800px;
    margin: 0 auto;
    padding-top: 150px;

    @include mobile-only {
      width: 90%;
    }

    @include tablet-only {
      width: 600px;
    }

    p {
      text-align: center;
    }

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 200;

      @include mobile-only {
        font-size: 30px;
      }
    }

    .speaker-list {
      .speaker-item {
        width: calc(100% - 20px);
        min-height: 120px;
        margin: 20px auto;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 15px 35px rgba(50,50,93,.03), 0 5px 15px rgba(0,0,0,.06);
        cursor: pointer;
        overflow: hidden;

        @include mobile-only {
          width: 100%;
          font-size: 15px;
          text-align: center;
          word-break: keep-all;
          padding: 10px 0;
        }

        &:hover {
          box-shadow: 0 15px 35px rgba(50,50,93,.07), 0 5px 15px rgba(0,0,0,.1);
        }

        .profile-image {
          float: left;
          width: 120px;
          height: 120px;
          overflow: hidden;

          img {
            width: 120px;
            border-right: 1px solid #EEE;
          }

          @include mobile-only {
            float: none;
            display: block;
            margin: 0 auto;
            text-align: center;
            border-radius: 50%;
            box-shadow: 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.2);

            img {
              border-right: none;
            }
          }
        }

        .content {
          @include mobile-only {
            float: none;
            padding-left: 0;
          }

          float: left;
          padding-left: 10px;
          .title {
            display: inline-block;
            margin-top: 10px;
            vertical-align: top;
            font-weight: bold;
          }

          .profile-name {
            display: inline-block;
            margin-top: 5px;
            vertical-align: top;

            @include mobile-only {
              margin-top: -2px;
            }
          }
        }

        &:after {
          content: '';
          display: block;
          clear: both;
        }
      }
    }
    .enter-button {
      display: block;
      width: 200px;
      height: 40px;
      margin: 20px auto;
      margin-top: 40px;
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
