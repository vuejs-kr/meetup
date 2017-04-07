<template>
  <div class="speaker">
    <h1 id="speaker">발표자</h1>

    <div class="speaker-list">
      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/zammanbo.jpeg">
        </div>
        <div class="content">
          <div class="title">우당탕탕 회사에서 Vue.js를 도입한 삽질기</div><br>
          <div class="profile-name">박새미</div>
          <div class="description">LYL Studio에서 유니콘 앱 서버개발을 하고 있습니다.</div>
        </div>
      </div>

      <div class="speaker-item">
        <div class="profile-image">
          <!-- <img src="~@/assets/zammanbo.jpeg"> -->
        </div>
        <div class="content">
          <div class="title">백엔드 개발자, 입문자로서 Vue 이해하고 사용하다</div><br>
          <div class="profile-name">차경묵</div>
          <div class="description"></div>
        </div>
      </div>

      <div class="speaker-item">
        <div class="profile-image">
          <!-- <img src="~@/assets/zammanbo.jpeg"> -->
        </div>
        <div class="content">
          <div class="title">웹 디자이너의 도전 Vue.js 따라하기</div><br>
          <div class="profile-name">이승민</div>
          <div class="description"></div>
        </div>
      </div>

      <div class="speaker-item">
        <div class="profile-image">
          <!-- <img src="~@/assets/zammanbo.jpeg"> -->
        </div>
        <div class="content">
          <div class="title">Vue.js와 Firebase 활용기</div><br>
          <div class="profile-name">김인숙</div>
        </div>
      </div>

      <div class="speaker-item">
        <div class="profile-image">
          <img src="~@/assets/siba.png">
        </div>
        <div class="content">
          <div class="title">Nuxt로 사내 서비스 구현하면서 얻은 경험 공유</div><br>
          <div class="profile-name">조민환</div>
          <div class="description">데브시스터즈에서 프론트엔드 개발을 하고 있습니다.</div>
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
            box-shadow: 0 15px 35px rgba(50,50,93,.03), 0 5px 15px rgba(0,0,0,.06);

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
  }
</style>
