<template>
  <div class="sticky-container">
    <div class="sticky-logo-container">
      <router-link to="/"><img class="sticky-logo" src="~@/assets/sixth/img/logo-wordtype@2x.png"></router-link>
    </div>
    <div class="sticky-tab-container">
      <router-link class="sticky-tab" to="/about">ABOUT</router-link>
      <div class="sticky-tab sticky-dropdown" @mouseleave="hideDropdown">
        <button class="sticky-dropdown-button" @mouseover="showDropdown">ARCHIVE</button>
        <transition name="fade">
          <div class="sticky-dropdown-menu" v-if="this.dropdownDisplayed">
            <router-link class="sticky-dropdown-item first" to="/first">1st meetup</router-link>
            <router-link class="sticky-dropdown-item" to="/second">2nd meetup</router-link>
            <router-link class="sticky-dropdown-item" to="/third">3rd meetup</router-link>
            <router-link class="sticky-dropdown-item" to="/fourth">4th meetup</router-link>
            <router-link class="sticky-dropdown-item" to="/fifth">5th meetup</router-link>
            <router-link class="sticky-dropdown-item" to="/sixth">6th meetup</router-link>
          </div>
        </transition>
      </div>
      <a class="sticky-tab register-border" href="https://meetgo.kr/#/userEventDetail/vuetiful06" target="_blank">REGISTER</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdownDisplayed: false
    };
  },
  methods: {
    showDropdown() {
      this.dropdownDisplayed = true;
    },
    hideDropdown() {
      this.dropdownDisplayed = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.sticky-container {
  z-index: 1;
  position: fixed;
  display: flex;
  top: 0;
  width: 100vw;
  height: 8vh;
  background: white;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  .sticky-logo-container {
    flex: 1;
    .sticky-logo {
      width: 250px;
    }
  }
  .sticky-tab-container {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    .sticky-tab {
      text-decoration: none;
      color: #34495e;
      padding: 1.6vh 1.6vw;
      letter-spacing: 1.5px;
      font-size: 1rem;
      transition: 0.25s;
    }
    .sticky-dropdown {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5vh 0;
      .sticky-dropdown-button {
        cursor: pointer;
        padding: 1.6vh 1.6vw;
        letter-spacing: 1.5px;
        font-size: 1rem;
        outline: none;
        color: #34495e;
      }
      .sticky-dropdown-menu {
        transition: all 0.3s ease;
        position: absolute;
        top: calc(8vh - 4px);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0.5vw;
        border-top: 4px solid #41b883;
        .sticky-dropdown-item {
          transition: all 0.3s ease;
          background: white;
          padding: 2.5vh 0.5vw;
          width: 100%;
          text-decoration: none;
          color: #34495e;
          font-weight: 500;
          font-size: 15px;
          line-height: 1;
          letter-spacing: normal;
          &:hover {
            background: #d0d6dc;
          }
        }
        .first {
          box-shadow: inset 0px 10px 10px -7px rgba(0, 0, 0, 0.2);
        }
      }
    }
    .sticky-tab + .sticky-tab {
      margin-left: 1vw;
    }
    .register-border {
      color: white;
      background: #41b883;
      font-weight: bold;
    }
    a.router-link-exact-active {
      font-weight: bold;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
