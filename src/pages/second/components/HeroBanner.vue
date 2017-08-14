<template>
  <div class="hero-banner">
    <div class="segmenter">
      <div class="background"></div>
      <div class="background-overlay"></div>
      <transition name="fade" appear>
        <div class="pieces">
          <div class="piece-wrap">
            <div class="shadow" style="top: 80%; left: 10%; width: 30%; height: 20%"></div>
            <div class="piece" style="-webkit-clip-path: polygon(10% 80%, 40% 80%, 40% 100%, 10% 100%); clip-path: polygon(10% 80%, 40% 80%, 40% 100%, 10% 100%)"></div>
          </div>
          <div class="piece-wrap">
            <div class="shadow" style="top: 2%; left: 2%; width: 40%; height: 40%"></div>
            <div class="piece" style="-webkit-clip-path: polygon(2% 2%, 42% 2%, 42% 42%, 2% 42%); clip-path: polygon(2% 2%, 42% 2%, 42% 42%, 2% 42%)"></div>
          </div>
          <div class="piece-wrap">
            <div class="shadow" style="top: 30%; left: 60%; width: 30%; height: 60%"></div>
            <div class="piece" style="-webkit-clip-path: polygon(60% 30%, 90% 30%, 90% 90%, 60% 90%); clip-path: polygon(60% 30%, 90% 30%, 90% 90%, 60% 90%)"></div>
            </div>
          <div class="piece-wrap">
            <div class="shadow" style="top: 10%; left: 20%; width: 50%; height: 60%"></div>
            <div class="piece" style="-webkit-clip-path: polygon(20% 10%, 70% 10%, 70% 70%, 20% 70%); clip-path: polygon(20% 10%, 70% 10%, 70% 70%, 20% 70%)"></div>
          </div>
        </div>
      </transition>
      <div class="full-overlay"></div>
      <h1>
        <transition name="fade" appear>
          <div>
            <img src="~@/assets/logo.png">ue<span>&#183;</span>tiful Korea
            <!-- <img src="~@/assets/vuetiful_korea_logo.png"> -->
          </div>
        </transition>
        
        <hr>
        <h2>2 0 1 7. 0 8. 2 3</h2>
      </h1>
      <svg class="arrows">
        <path class="a1" d="M0 0 L15 16 L30 0"></path>
        <path class="a2" d="M0 10 L15 26 L30 10"></path>
        <path class="a3" d="M0 20 L15 36 L30 20"></path>
      </svg>
    </div>

    <p class="intro">
      Vuetiful Korea 1회 모임 이후 많은 것을 배웠습니다.<br>
      이번에도 즐거운 자리가 되었으면 좋겠습니다.<br>
      감사합니다.
    </p>

    <a href="http://onoffmix.com/event/96947" class="enter-button" target="_blank">참가 신청하기!</a>
    <!-- <a href="http://onoffmix.com/event/96947" class="enter-button" target="_blank">참가 신청하기!</a> -->
  </div>
</template>

<script>
  export default {
    name: 'hero-banner',
    mounted () {
      window.addEventListener('scroll', () => {
        var background = document.getElementsByClassName('background')[0]
        var backgroundY = -(window.pageYOffset / 3)
        background.style.backgroundPosition = `50% calc(50% - ${backgroundY}px)`

        var h1 = document.getElementsByTagName('h1')[0]
        var h1Y = -(window.pageYOffset / 4)
        h1.style.top = `calc(50% - ${h1Y}px)`

        var pieces = document.getElementsByClassName('piece')
        for (var index = 0; index < pieces.length; index++) {
          var piece = pieces[index]
          var pieceY = -(window.pageYOffset / 2)
          piece.style.backgroundPosition = `50% calc(50% - ${pieceY}px)`
        }
      })
    },
    destroyed () {

    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/media_query';

  .hero-banner {

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

      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -44px;
      text-align: center;
      font-size: 80px;
      color: white;

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
      width: 300px;
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

  .segmenter {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .background,
    .background-overlay,
    .full-overlay,
    .pieces,
    .piece-wrap,
    .piece-parallax,
    .piece {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform-style: preserve-3d;
    }

    .piece-parallax {
      transition: transform 0.2s ease-out;
    }

    .pieces {
      perspective: 400px;
    }

    .background-overlay {
      background-color: rgba(0, 0, 0, 0.5)
    }

    .full-overlay {
      background-color: rgba(0, 0, 0, 0.2)
    }

    .background,
    .piece,
    .segmenter {
      // background-color: black;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    .background,
    .piece {
      background-image: url('~@/assets/background.jpg');
    }

    .shadow {
      position: absolute;
      box-shadow: 0px 2px 15px rgba(0,0,0,0.7);
    }
  }

  .arrows {
      width: 30px;
      height: 36px;
      position: absolute;
      left: 50%;
      margin-left: -15px;
      bottom: 20px;
    }

    .arrows path {
      stroke: white;
      fill: transparent;
      stroke-width: 1px;
      animation: arrow 2s infinite;
      -webkit-animation: arrow 2s infinite;
    }

    @keyframes arrow {
      0% { opacity: 0 }
      40% { opacity: 1 }
      80% { opacity: 0 }
      100% { opacity: 0 }
    }

    .arrows path.a1 {
      animation-delay: -1s;
      -webkit-animation-delay: -0.6s;
    }

    .arrows path.a2 {
      animation-delay: -0.5s;
      -webkit-animation-delay: -0.3s;
    }

    .arrows path.a3 {
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .intro {
    padding-top: 100px;
  }
</style>
