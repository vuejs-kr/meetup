<template lang="html">
  <el-container id="contributors" class="container" direction="vertical" v-bind:class="{ 'is-focused' : focused}">
    <div id="dim-of-contributors"></div>
    <el-container class="container-sponsor">
      <el-row class="sponsors" :gutter="20" type="flex" justify="center">
        <el-col :xs="10" :sm="12" :lg="12" v-for="sponsor in sponsors" :key="sponsor.name">
          <sponsor :sponsor="sponsor"></sponsor>
        </el-col>
      </el-row>
    </el-container>
    <div class="container-volunteers" v-show="!mobile && !smartphone">
      <volunteer v-for="volunteer in volunteers" :volunteer="volunteer" :key="volunteer.name" :data-id="volunteer.name" @focusOnVolunteer="focusOnVolunteer" @unFocusOnVolunteer="unFocusOnVolunteer"></volunteer>
    </div>
    <p class="participants">
      <span class="participant-sponsor" v-for="(participantSponsor, index) in participantSponsors" :key="index">
        {{ participantSponsor }}
        <span v-if="index != participantSponsors.length - 1">, </span>
      </span>
      외 {{ regularParticipants.length }}명의 기부천사
    </p>
  </el-container>
</template>

<script>
import { sponsors, volunteers, participantSponsors, regularParticipants } from '@/store/fourth/store';
import Sponsor from '@/components/Fourth/contributors/Sponsor';
import Volunteer from '@/components/Fourth/contributors/Volunteer';

export default {
  data() {
    return {
      sponsors,
      volunteers,
      participantSponsors,
      regularParticipants,
      focused: false,
      intervalIds: [],
      assignedPositions: {},
      trespasser: []
    };
  },
  components: {
    Sponsor,
    Volunteer
  },
  methods: {
    spreadOut() {
      for (const volunteerContainer of document.querySelectorAll('.container-volunteers > *')) {
        this.injection(volunteerContainer);
      }
    },
    removeVolunteers() {
      return new Promise((resolve, reject) => {
        this.focused = false;
        for (const key of this.intervalIds) {
          document.querySelector('.container-volunteers > *[data-id=' + key + ']').style.display = 'none';
          document.querySelector('.container-volunteers > *[data-id=' + key + ']').style.transform = null;

          clearInterval(this.intervalIds[key]);
          if (i + 1 === Object.keys(this.intervalIds).length) {
            this.intervalIds = [];
            this.assignedPositions = {};
            resolve(true);
          }
        }
      });
    },
    injection(el) {
      const intervalId = setInterval(() => {
        const moveOn = this.moveOn(el);
        if (typeof this.assignedPositions[el.getAttribute('data-id')] === 'undefined') {
          this.assignedPositions[el.getAttribute('data-id')] = moveOn;
        }
      }, Math.floor(Math.random() * (500 - 300 + 1) + 300));

      this.intervalIds[el.getAttribute('data-id')] = intervalId;
      setTimeout(() => {
        this.painting(el);
      }, 800);
    },
    getAbleScopeOfActivity(maximumScopeOfActivityX, maximumScopeOfActivityY, el) {
      const sponsorFirstRect = document.querySelectorAll('.container-sponsor > * img')[0].getBoundingClientRect();
      const sponsorLastRect = document.querySelectorAll('.container-sponsor > * img')[1].getBoundingClientRect();
      const sponsorExtraSpace = 120;
      const volunteerExtraSpace = 100;

      let x =
        (maximumScopeOfActivityX / Object.keys(this.volunteers).length) * Object.keys(this.assignedPositions).length;
      let y = Math.floor(Math.random() * (maximumScopeOfActivityY - 100 + 1) + 100);

      if (maximumScopeOfActivityY <= y + volunteerExtraSpace) {
        y = y - volunteerExtraSpace;
      }

      if (x >= sponsorFirstRect.x - sponsorExtraSpace && x <= sponsorLastRect.x + sponsorExtraSpace) {
        x =
          Math.floor(Math.random() * (500 - 300 + 1) + 300) +
          (x - (sponsorFirstRect.x - sponsorExtraSpace) <= x - (sponsorLastRect.x + sponsorExtraSpace)
            ? x + (x - (sponsorFirstRect.x - sponsorExtraSpace))
            : x - (x - (sponsorLastRect.x + sponsorExtraSpace)));
      }

      /* tslint:disable */
      for (let i = 0; i < Object.keys(this.assignedPositions).length; i++) {
        const assignedPosition = this.assignedPositions[Object.keys(this.assignedPositions)[i]];
        if (x >= assignedPosition[0] && x <= assignedPosition[0] + sponsorExtraSpace) {
          x =
            maximumScopeOfActivityX <= assignedPosition[0] + sponsorExtraSpace + 100
              ? x - 100
              : assignedPosition[0] + sponsorExtraSpace + 100;
        }
        if (y >= assignedPosition[1] && y <= assignedPosition[1] + sponsorExtraSpace) {
          y =
            maximumScopeOfActivityY <= assignedPosition[1] + sponsorExtraSpace + 50
              ? y - 50
              : assignedPosition[1] + sponsorExtraSpace + 50;
        }
      }

      return [x, y];
    },
    assignPosition(el) {
      const maximumScopeOfActivityX = parseInt(document.querySelector('.container-volunteers').offsetWidth, 10) - 150;
      const maximumScopeOfActivityY = parseInt(document.querySelector('.container-volunteers').offsetHeight, 10) - 150;

      const maxScopeX = 15;
      const maxScopeY = 15;

      const ableScope = this.getAbleScopeOfActivity(maximumScopeOfActivityX, maximumScopeOfActivityY, el);
      let scopeOfActivityX = ableScope[0];
      let scopeOfActivityY = ableScope[1];

      if (getComputedStyle(el)['transform'] !== 'none' && getComputedStyle(el)['transform'] != null) {
        const currentScopeOfActivityX =
          parseInt(
            /\(\s*([^)]+?)\s*\)/
              .exec(getComputedStyle(el)['transform'])[0]
              .split(/\s*,\s*/)[4]
              .replace(/\)/g, ''),
            10
          ) + 1;
        const currentScopeOfActivityY =
          parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[5], 10) + 1;

        const jumpToX = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        const jumpToY = Math.floor(Math.random() * (2 - 1 + 1) + 1);

        scopeOfActivityX =
          currentScopeOfActivityX < maximumScopeOfActivityX
            ? el.getAttribute('arithmetics') === 'plus'
              ? currentScopeOfActivityX - jumpToX
              : currentScopeOfActivityX + jumpToX
            : currentScopeOfActivityX - jumpToX;
        scopeOfActivityY =
          currentScopeOfActivityY < maximumScopeOfActivityY
            ? el.getAttribute('arithmetics') === 'plus'
              ? currentScopeOfActivityY - jumpToY
              : currentScopeOfActivityY + jumpToY
            : currentScopeOfActivityY - jumpToY;

        if (
          typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' &&
          this.assignedPositions[el.getAttribute('data-id')][0] + maxScopeX <= scopeOfActivityX
        ) {
          scopeOfActivityX = this.assignedPositions[el.getAttribute('data-id')][0];
        }

        if (
          typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' &&
          this.assignedPositions[el.getAttribute('data-id')][1] + maxScopeY <= scopeOfActivityY
        ) {
          scopeOfActivityY = this.assignedPositions[el.getAttribute('data-id')][1];
        }
      }
      el.style.transform =
        'matrix3d(1, 1.74533e-06, 0, 0, -1.74533e-06, 1, 0, 0, 0, 0, 1, 0, ' +
        scopeOfActivityX +
        ', ' +
        scopeOfActivityY +
        ', 0, 1)';
      return [scopeOfActivityX, scopeOfActivityY];
    },
    painting(el) {
      const widths = [65, 70, 75, 80];
      const maxWidth = widths[Math.floor(Math.random() * widths.length)];
      el.style.display = 'block';

      for (let i = 0; i <= maxWidth; i++) {
        setTimeout(() => {
          el.style.width = i.toString() + 'px';
        }, 10);
      }
    },
    moveOn(el) {
      const scopeOfActivity = this.assignPosition(el);
      el.setAttribute('arithmetics', el.getAttribute('arithmetics') === 'minus' ? 'plus' : 'minus');
      return scopeOfActivity;
    },
    lightUp(node) {
      let radius = 0;
      const interval = window.setInterval(() => {
        node.style.webkitMask =
          '-webkit-gradient(radial, 17 17, ' +
          radius +
          ', 17 17, ' +
          (radius + 15) +
          ', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))';
        radius++;
        if (node.offsetWidth + 15 === radius) {
          window.clearInterval(interval);
        }
      }, 10);
    },
    checkVisible(elm, threshold, mode) {
      threshold = threshold || 0;
      mode = mode || 'visible';

      const rect = elm.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      const above = rect.bottom - threshold < 0;
      const below = rect.top - viewHeight + threshold >= 0;

      return mode === 'above' ? above : mode === 'below' ? below : !above && !below;
    },
    focusOnVolunteer(volunteer, event) {
      this.focused = true;
      event.currentTarget.style.opacity = 1;
      clearInterval(this.intervalIds[volunteer.name]);
      document.getElementById('dim-of-contributors').style.backgroundImage =
        'url(' + volunteer.backgroundImageUrl + ')';
    },
    unFocusOnVolunteer(volunteer, event) {
      this.focused = false;
      event.currentTarget.style.opacity = null;
      this.injection(document.querySelector('.container-volunteers > *[data-id=' + volunteer.name + ']'));
      document.getElementById('dim-of-contributors').style.backgroundImage = 'none';
    }
  },
  mounted() {
    const contributorsElm = document.getElementById('contributors');
    const scrollDist = parseInt(contributorsElm.offsetHeight, 10);
    const ExtraDist = document.getElementById('program').offsetHeight / 3;
    const scrollMode = 'above';
    let alreadySeen = false;

    window.onscroll = () => {
      if (this.checkVisible(contributorsElm, scrollDist + ExtraDist, scrollMode) && !alreadySeen) {
        alreadySeen = true;
        this.spreadOut();
        const sponsorImages = document.querySelectorAll('.container-sponsor img');
        for (const sponsorImage of sponsorImages) {
          this.lightUp(sponsorImage);
        }
      }
    };

    window.onresize = () => {
      this.removeVolunteers().then(() => {
        this.spreadOut();
      });
    };
  }
};
</script>

<style lang="scss">
#contributors.is-focused {
  #dim-of-contributors {
    z-index: 98;
  }
  .container-volunteers {
    z-index: 99;
  }
  .container-volunteers > .el-container > a {
    opacity: 0.3;
  }
}

#contributors {
  padding: 50px 0 75px;
  background: url('~@/assets/fourth/img/gridtile-dark.png'), #35495e;
  width: 100%;
  overflow: hidden;

  #dim-of-contributors {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
  }

  .container-sponsor {
    position: relative;
    z-index: 11;
    margin: auto;
  }
  .container-sponsor > .sponsors {
    position: relative;
    max-width: 400px;

    a {
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      background: #eee;
    }

    a:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      background: #fff;
    }

    img {
      max-width: 100%;
    }

    > .el-col > .el-container h3 {
      font-size: 1.2em;
      margin-top: 12px;
      color: #42b883;
    }
  }

  .container-volunteers {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 85%;
    display: block;

    > .el-container {
      display: none;
      width: 20px;
      position: absolute;
      opacity: 0.6;
      transition: 300ms linear;

      a {
        display: block;
        position: relative;
        border: 1px solid #ccc;
        border-radius: 50%;
      }
      > a > img {
        width: 100%;
        border-radius: 50%;
      }
      .name {
        position: absolute;
        top: 75%;
        width: 100%;
        left: 0;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 2px #35495e;
        font-size: 80%;
        font-weight: 500;
        transform: translateY(-50%);
      }
    }
  }

  p.participants {
    position: relative;
    margin-top: 20px;
    font-size: 0.8em;
    text-align: center;
    color: #fff;
    padding: 20px;
    z-index: 9;
    line-height: 1.5;
  }
}
</style>
