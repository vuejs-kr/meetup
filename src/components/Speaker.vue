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
          <div class="title">Vue 개념과 써야하는 이유를 입문 관심자에게 소개</div><br>
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
  .speaker {
    width: 50%;
    margin: 0 auto;
    padding-top: 150px;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 200;
    }

    .speaker-list {
      .speaker-item {
        width: calc(100% - 20px);
        height: 120px;
        margin: 20px 0;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 15px 35px rgba(50,50,93,.03), 0 5px 15px rgba(0,0,0,.06);
        cursor: pointer;

        &:hover {
          box-shadow: 0 15px 35px rgba(50,50,93,.07), 0 5px 15px rgba(0,0,0,.1);
        }

        .profile-image {
          float: left;
          width: 120px;
          height: 120px;

          img {
            width: 120px;
            height: 120px;
            border-right: 1px solid #EEE;
          }
        }

        .content {
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
