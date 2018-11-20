<template lang="html">
  <el-container id="program" class="container" direction="vertical">
    <div>
      <h2 class="heading">Program</h2>
      <span class="subheading">프로그램</span>
      <ul class="timeline">
        <li class="event" v-for="session of program" v-bind:key="session.time">
          <div class="image">
            <div>
              <img v-if="session.presenter != null" :src="session.presenter.imgUrl" />
              <div class="container-img" v-else><div class="img"></div></div>
              <span :class="{ 'regular-event': session.presenter == null }">{{ session.time }}</span>
            </div>
          </div>
          <div class="details">
            <div>
              <h3 :class="{ 'regular-event': session.presenter == null }">{{ session.title }}</h3>
              <a v-if="session.presenter && session.presenter.fileUrl" :href="session.presenter.fileUrl" target="_blank">
                <el-button
                  v-if="session.presenter"
                  type="primary"
                  size="mini"
                  icon="el-icon-download"
                  circle></el-button>
              </a>
              <p v-if="session.presenter != null">{{ session.presenter.keywords}}</p>
              <p v-else></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

import { program } from '@/store/fifth/store';
import Session from '@/components/Fifth/program/Session.vue';

@Component({
  components: {
    Session
  }
})
export default class Program extends Vue {
  private program = program;
}
</script>

<style lang="scss" scoped>
#program {
  background: url('~@/assets/fourthFifth/img/gridtile-dark.png'), #35495e;
}
.heading {
  text-shadow: 1px 1px black;
}
.subheading {
  color: white;
}
.timeline {
  background: #35495e;
  color: #ffffff;
  font-family: arial, sans-serif;
  padding: 50px 0;
}
.event:first-child .details::before {
  height: 90px;
  top: 53px;
}
.event:last-child .details::before {
  height: 55px;
}
.event {
  display: flex;
  max-width: 920px;
  margin: 0 auto;

  .image {
    position: relative;
    padding: 1em 2em;
    z-index: 1;

    > div {
      position: relative;
      text-align: center;
      font-size: 0.8em;

      // &::after {
      //   content: '';
      //   width: 100%;
      //   height: 0;
      //   border-bottom: 1px solid rgba(255,255,255,0.75);
      //   position: absolute;
      //   top: 2.9em;
      //   left: 3em;
      //   z-index: 0;
      // }
    }

    img {
      margin: auto 0;
      border-radius: 50%;
      height: 5em;
      border: 0.3em solid #42b883;
    }
    .container-img {
      padding: 33px 0;
    }
    .img {
      margin: auto;
      border-radius: 50%;
      width: 0.75em;
      height: 0.75em;
      background: #42b883;
    }
    span {
      display: block;
      clear: both;
      width: 6em;
      padding: 0.25em 0;
      margin: 0.5em 0;
      color: #42b883;
    }
    span.regular-event {
      position: relative;
      top: -24px;
      padding: 0;
      margin: 0;
    }
  }
  .details {
    position: relative;
    flex-grow: 1;
    text-align: left;
    > div {
      padding: 1em;
      margin: 1em 0;

      h3 {
        display: inline-block;
        color: white;
        font-size: 1.4em;
        margin: 0;
        padding: 0 0 0.5em 0;
        letter-spacing: 0.1em;
        line-height: 1.2em;
      }
      h3.regular-event {
        margin-top: 10px;
        padding: 0;
      }

      button {
        margin-top: -5px;
      }

      p {
        margin: 0;
        padding: 0;
        line-height: 150%;
        color: #aaa;
      }
    }

    &::before {
      content: '';
      width: 0;
      height: 100%;
      border-left: 1px solid rgba(255, 255, 255, 0.75);
      position: absolute;
      top: 0;
      left: -4.43em;
      z-index: 0;
    }
  }
}
</style>
