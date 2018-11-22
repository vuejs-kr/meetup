<template>
  <div class="footer-container">
    <div class="footer-content">
      <h1>FOLLOW US ON</h1>
      <div class="footer-button-container">
        <a href="https://www.facebook.com/groups/vuejs.korea/" target='_blank'>
          <img src="~@/assets/sixth/img/ic-facebook.svg" alt="facebook">
        </a>
        <a href="https://vuejs-korea-invitation.herokuapp.com/" target='_blank'>
          <img src="~@/assets/sixth/img/ic-slack.svg" alt="slack">
        </a>
        <a href="https://github.com/vuejs-kr" target='_blank'>
          <img src="~@/assets/sixth/img/ic-github.svg" alt="github">
        </a>
      </div>
      <small>&copy;2018 Vuetiful Korea. All rights reserved.</small>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-container {
  width: 100vw;
  height: 40vh;
  background: #1f2f3f;
  color: white;
  display: flex;
  justify-content: center;
  .footer-content {
    width: 71vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 0.93;
      letter-spacing: 1.6px;
    }
    small {
      font-size: 13px;
      color: #75899e;
      margin-bottom: 44px;
    }
    .footer-button-container {
      margin-top: 4vh;
      margin-bottom: 8vh;
      a > img {
        width: 40px;
        height: 40px;
      }
      a + a {
        margin-left: 3vmax;
      }
    }
  }
}
</style>

