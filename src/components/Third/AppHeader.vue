<template>
  <div>
    <div class="app-header" ref="header">
      <div class="wrapper">
        <nav>
          <h1><a href='#'><img src="~@/assets/logo.png">ue<span>&#183;</span>tiful Korea</a></h1>
          <ul>
            <li><a href="#speaker">발표자</a></li>
            <li><a href="#location">장소</a></li>
            <li><a href="http://tumblbug.com/vue" class="enter-button" target="_blank">참가 신청</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AppHeader extends Vue {
  private mounted() {
    window.addEventListener('scroll', this.scrollEvent);
  }

  private destroyed() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  private scrollEvent() {
    if (window.innerHeight < window.scrollY) {
      (this.$refs.header as HTMLDivElement).className = 'app-header fixed';
    } else {
      (this.$refs.header as HTMLDivElement).className = 'app-header';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/media_query';
.app-header {
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #efefef;
  background-color: white;
  z-index: 1000;

  &.fixed {
    position: fixed;
    top: 0;
  }

  @include mobile-only {
    display: none;
  }

  nav {
    width: 1000px;
    height: 80px;
    margin: 0 auto;

    @include tablet-only {
      width: 600px;
    }

    h1 {
      a {
        color: #445b71;
        text-decoration: none;
      }
      img {
        width: 35px;
        margin-top: -10px;
        margin-right: -5px;
      }

      float: left;
      margin-top: 2px;
      line-height: 80px;
      font-size: 30px;

      span {
        display: inline-block;
        margin: 0 2px;
        color: #3ab982;
      }
    }

    ul {
      float: right;
      padding: 0;
      margin: 0;

      li {
        display: inline-block;
        min-width: 100px;
        line-height: 80px;
        text-align: center;

        a {
          font-size: 15px;
          font-weight: bold;
          text-decoration: none;
          color: #445b71;

          &.enter-button {
            display: inline-block;
            width: 150px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-weight: bold;
            font-size: 15px;
            text-decoration: none;
            vertical-align: middle;
            color: white;
            border-radius: 30px;
            background-color: #3ab982;
            border: none;
            transition-duration: 0.4s;

            &:active,
            &:hover {
              background-color: #319267;
            }
          }
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
</style>
