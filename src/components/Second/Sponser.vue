<template>
  <div class="sponser">
    <h1 id="sponser">후원</h1>
    <p>
      밋업 행사 운영을 위한 후원을 기다리고 있습니다.<br>
      만약 후원해주신다면 참석자 분들을 위한 음식/음료, 발표자 분들을 위한 선물,<br>
      그리고 참석해주신 모든 분들께 아래 티셔츠를 제공할 예정입니다.<br><br>

      후원을 해주실 천사님은<br>
      페이스북 <strong>@이선협</strong> 혹은 슬렉 <strong>@kciter</strong>을 찾아주세요.<br>
      감사합니다. :)

      <img src="~@/assets/shirt.jpg">
      <span>(금액이 부족하다면 따로 신청해주신 분에게 추가금을 받아 전달드릴 예정입니다)</span>
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Sponser extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/assets/media_query';

.sponser {
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

  img {
    display: block;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  span {
    font-size: 10pt;
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
    background-color: #3ab982;
    border: none;
    transition-duration: 0.4s;

    &:active,
    &:hover {
      background-color: #319267;
    }
  }
}
</style>
