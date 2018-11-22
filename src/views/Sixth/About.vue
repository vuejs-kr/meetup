<template>
  <div class="about">
    <div class="about-title">
      <h3 class="howdy">Hello Vuers!</h3>
      <h2 class="welcome">Welcome</h2>
      <p class="welcome-message ko">
        Vuetiful Korea 6th 밋업에 관심을 가져주신 여러분 모두 환영합니다.<br>
        Vuetiful Korea가 여섯번의 모임을 가지며 모은 많은 분들의 의견 공유와<br />앞으로 나아갈 방향을 가리켜보고자 합니다.<br /><br />이번 밋업에 관심을 가져주신 여러분 모두 환영합니다.
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
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 6회의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다. Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">02</span>
            <span class="feature-title ko"> 적극적인 토론</span>
          </dt>
          <dd class="ko">
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 6회의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다. Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">01</span>
            <span class="feature-title ko">발표의 질</span>
          </dt>
          <dd class="ko">
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 6회의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다. Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">02</span>
            <span class="feature-title ko"> 적극적인 토론</span>
          </dt>
          <dd class="ko">
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 6회의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다. Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">01</span>
            <span class="feature-title ko">발표의 질</span>
          </dt>
          <dd class="ko">
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다. Vuetiful Korea가 6회의 모임을 가지며 모은 많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다. Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
      <li class="feature">
        <dl>
          <dt>
            <span class="feature-no">02</span>
            <span class="feature-title ko">적극적인 토론</span>
          </dt>
          <dd class="ko">
            Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.<br />Vuetiful Korea가 6회의 모임을 가지며 모은<br />많은 분들의 의견 공유와 앞으로 나아갈 방향을 가리켜보고자 합니다.<br />Vuetiful Korea 6th에 관심을 가져주신 여러분 모두 환영합니다.
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SixthAbout extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/assets/sixth/css/scheme';

.about {
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
