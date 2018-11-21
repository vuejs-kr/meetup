<template>
  <div class="bar-container" :class="{ mobile: isMobile }">
    <router-link class="bar-tab" to="/about">ABOUT</router-link>
    <div class="bar-tab bar-dropdown">
      <button class="bar-dropdown-button">ARCHIVE</button>
      <div class="bar-dropdown-menu">
        <router-link class="bar-dropdown-item first" to="/">1st meetup</router-link>
        <router-link class="bar-dropdown-item" to="/">2nd meetup</router-link>
        <router-link class="bar-dropdown-item" to="/">3rd meetup</router-link>
        <router-link class="bar-dropdown-item" to="/">4th meetup</router-link>
        <router-link class="bar-dropdown-item" to="/">5th meetup</router-link>
        <router-link class="bar-dropdown-item" to="/">6th meetup</router-link>
      </div>
    </div>
    <router-link class="bar-tab register-border" to="#">REGISTER</router-link>
  </div>
</template>

<script>
export default {
  props: ['isMobile'],
};
</script>

<style lang="scss" scoped>
.bar-container {
  position: absolute;
  width: 71.1vw;
  margin: 2.4vh auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  .bar-tab {
    text-decoration: none;
    height: fit-content;
    color: white;
    padding: 1.6vh 1.6vw 1.6vh 1.6vw;
    letter-spacing: 1.5px;
    font-size: 13px;
    transition: 0.25s;
    &:hover {
      font-weight: bold;
    }
  }
  .bar-dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    .bar-dropdown-button {
      background: none;
      color: white;
      padding: 1.6vh 1.6vw 1.6vh 1.6vw;
      letter-spacing: 1.5px;
      font-size: 13px;
      &:hover {
        font-weight: bold;
      }
    }
    .bar-dropdown-menu {
      transition: all 0.3s ease;
      position: relative;
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5vw;
      border-top: 4px solid #41b883;
      .bar-dropdown-item {
        transition: all 0.3s ease;
        background: white;
        padding: 1.6vh 0.5vw;
        width: 100%;
        text-decoration: none;
        font-weight: 500;
        font-size: 15px;
        line-height: 1;
        letter-spacing: normal;
        &:hover {
          background: #d0d6dc;
        }
      }
      .first {
        box-shadow: inset 0px 10px 10px -7px rgba(0,0,0,0.2);
      }
    }
    &:hover {
      .bar-dropdown-menu {
        opacity: 1;
      }
    }
  }
  .bar-tab + .bar-tab {
    margin-left: 0.8vw;
  }
  .register-border {
    background: #41b883;
    font-weight: bold;
  }
}
.bar-container.mobile {
  position: fixed;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2);
  background: white;
  height: 8vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 1;
  .bar-dropdown {
    .bar-dropdown-button {
      color: #34495e;
      font-size: 0.5rem;
    }
    .bar-dropdown-menu {
      position: absolute;
      top: calc(8vh - 2px);
      width: 70px;
      border-top: 2px solid #41b883;
      .bar-dropdown-item {
        font-size: 0.5rem;
        width: 100%;
      }
    }
  }
  .bar-tab {
    color: #34495e;
    margin: 0;
    font-size: 0.5rem;
  }
  .bar-tab + .bar-tab {
    margin-left: 12.5vw;
  }
  .register-border {
    color: white;
    font-weight: bold;
  }
}
</style>

