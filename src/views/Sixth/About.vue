<template>
  <div class="about">
    <div class="about-title">
      <h3 class="howdy">Hello Vuers!</h3>
      <h2 class="welcome">Welcome</h2>
      <p class="welcome-message ko">
        Vuetiful Korea 6th 밋업에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 여섯번의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다.<br/><br/>이번 밋업에 관심을 가져주신 여러분 모두 환영합니다.
      </p>
    </div>
    <hr>
    <ul class="about-features">
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">01</span>
            <span class="feature-title ko">발표의 질</span>
          </dt>
          <dd class="ko">
            기존의 초급-중급의 발표 퀄리티가 중급-고급으로 올라갈 수 있도록 퀄리티 향상을 위해 함께 노력하겠습니다. 
            이를 위해 더욱 많은 의견! 부탁드립니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">02</span>
            <span class="feature-title ko">적극적인 질문</span>
          </dt>
          <dd class="ko">
            발표가 끝난 뒤, 질문이 부끄러울 수 있습니다. 하지만, 내가 원하는 질문이 나오지 않는다면?
            이미 문제를 해결한 발표자에게 적극적으로 물어봐주세요!
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">03</span>
            <span class="feature-title ko">다양한 토론</span>
          </dt>
          <dd class="ko">
            의견을 교환하는 라이트닝 토크에서의 적극적인 토론은 필수입니다. 다양한 회사에서 사용하고 있는 Vue.js에 대해
            알고싶은 내용, 궁금했던 내용, 공유하고싶은 경험을 얘기해보세요.
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class SixthAbout extends Vue {
  @Prop(Boolean)
  private isMobile: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sixth/css/scheme';

.about {
  background: white;
  padding-bottom: 125px;
  .about-title {
    padding: 70px 0px;
    border-bottom: 1px solid $VueGreen;
    max-width: 1024px;
    margin: 0px auto;
    .howdy {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 1px;
      color: $VueGreen;
    }
    .welcome {
      padding: 5px 0px 19px;
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1px;
      color: $Dark;
    }
    .welcome-message {
      letter-spacing: -0.4px;
      line-height: 1.8;
      font-size: 1rem;
      margin: 0px auto;
      padding: 0px 15px;
      word-break: keep-all;
      max-width: 600px;
    }
  }
  .about-features {
    margin: 0px auto;
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 930px) {
      justify-content: space-around;
    }
    li.feature {
      text-align: left;
      padding-top: 65px;
      display: inline-block;
      flex: 0 0 300px;
      dl {
        dt {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.4px;
          .feature-no {
            color: $VueGreen;
          }
          .feature-title {
            display: inline-block;
            text-indent: 13px;
          }
        }
        dd {
          padding-top: 15px;
          font-size: 1rem;
          line-height: 1.8;
          letter-spacing: -0.4px;
        }
      }
    }
  }
}
</style>
