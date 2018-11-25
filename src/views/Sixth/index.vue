<template>
  <div class="content home">
    <section class="join-anchor-wrap">
      <div class="join-anchor-title bold">
        6th Meet Up
      </div>
      <p class="meetup-date bold">
        2018.12.11
      </p>
      <p class="meetup-desc ko">
        뷰티풀 코리아는 Vue.js에 대한 관심주제 발표를 듣고 서로 관련 경험을 공유하며<br>
        네트워킹하는 모임으로, 2017년 4월 19일에 개최된 Vue.js 한국어 사용자 모임에서 시작하였습니다.<br>
        이번 밋업은 딱딱한 모임이 아닌 모인 분들끼리 친해질 수 있는 자리를 만들고자 합니다.<br>
        즐겁게 참여해주시면 감사하겠습니다.<br>
      </p>
      <a class="join-btn ko bold" href="https://meetgo.kr/#/userEventDetail/vuetiful06" target='_blank'>참가신청</a>
    </section>
    <div class="session-wrap">
      <h3 class="session-header">Session</h3>
      <div class="session-list">
        <article class="session-info" v-for="article in sessionList" :key="article.id">
          <span class="session-thumb"><img :src="article.thumbUrl" alt=""></span>
          <div class="session-text">
            <h4 class="session-title ko">{{article.title}}</h4>
            <span class="session-desc ko">{{article.desc}}</span>
            <span class="session-author ko">{{article.author}}</span>
          </div>
        </article>
      </div>
    </div>
    <div class="info-wrap">
      <dl class="location">
        <dt class="location-title">Location</dt>
        <dd class="address ko">서울특별시 강남구 강남대로 382 메리츠타워 16층</dd>
        <dd class="location-name">NAVER D2 Startup Factory</dd>
      </dl>
      <a href="http://www.d2startup.com/" class="d2-link" target="_blank">
        <img :src="`${this.baseUrl}static/sixth/img/sponsors/d2-logo.jpg`" alt="Naver D2" />
      </a>
      <div id="map" ref='map'></div>
    </div>
    <div class="sponsor-wrap">
      <h3 class="sponsor-title">Sponsor</h3>
      <a href="https://linepluscorp.com/" class="sponsor-link" target="_blank">
        <img :src="`${this.baseUrl}static/sixth/img/sponsors/line-logo.png`" alt="Line corp" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const daum: any;

@Component({})
export default class Sixth extends Vue {
  private baseUrl = process.env.BASE_URL;
  private sessionList = [
    {
      title: 'Vue.js를 이용한 백오피스 구현기',
      desc: '관리자, 물류, 점포 등의 페이지를 구현하면서 생각한 컴포넌트 재사용성 이슈와 조금의 백앤드 이야기',
      author: '마광휘, 와인포인트',
      thumbUrl: `${this.baseUrl}static/sixth/img/presenters/author01.jpeg`
    },
    {
      id: 2,
      title: 'Nuxt.js vs Next.js',
      desc: 'Nuxt.js vs Next.js',
      author: '임석민',
      thumbUrl: `${this.baseUrl}static/sixth/img/presenters/author02.jpeg`
    },
    {
      id: 3,
      title: 'Deep dive into Vue.js',
      desc:
        '사용법만 알았던 Vue.js, 이번 기회에 Vue.js가 어떻게 만들어졌는지 어떠한 원리로 동작하는지 깊게 알아봅시다.',
      author: '이선협, Cobalt. Inc',
      thumbUrl: `${this.baseUrl}static/sixth/img/presenters/author03.jpeg`
    }
  ];

  private mounted() {
    // console.log(process.env.BASE_URL);
    const map = new daum.maps.Map(this.$refs.map, {
      center: new daum.maps.LatLng(37.497145, 127.028567),
      level: 3
    });

    const marker = new daum.maps.Marker({
      position: new daum.maps.LatLng(37.497145, 127.028567),
      image: new daum.maps.MarkerImage(`${this.baseUrl}logo.png`, new daum.maps.Size(50, 50), {
        offset: new daum.maps.Point(20, 40)
      })
    }).setMap(map);

    new daum.maps.InfoWindow({
      position: new daum.maps.LatLng(37.4975, 127.02863),
      content: `<div style="padding:5px;background-color: #62BC7F;color: #3C475E;font-weight:
        bold;width: 150px;">Hello Vuers!!</div>`
    }).open(map, marker);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sixth/css/scheme';

.content {
  text-align: center;
  margin: 65px auto 0px;
  .join-anchor-wrap {
    .join-anchor-title {
      font-size: 1.2rem;
      line-height: 2;
      letter-spacing: 1px;
      color: $VueGreen;
      text-transform: uppercase;
    }
    .meetup-date {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .meetup-desc {
      margin: 30px auto;
      font-size: 0.85rem;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.8;
      letter-spacing: -0.4px;
      word-break: keep-all;
    }
    .join-btn {
      width: 129px;
      height: 56px;
      background-color: $Dark;
      color: white;
      font-size: 1.25rem;
      letter-spacing: -0.4px;
      color: #ffffff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
  .session-wrap {
    margin-top: 65px;
    background-color: $VueGreen;
    padding-bottom: 65px;
    .session-header {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      padding: 45px 0px 24px;
      color: white;
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 1.8rem;
    }
    .session-list {
      .session-info {
        background-color: #ffffff;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        margin: 21px auto;
        padding: 15px 20px;
        max-width: 530px;
        .session-thumb {
          flex: 0 0 120px;
          img {
            width: 100%;
          }
        }
        .session-text {
          display: flex;
          flex-direction: column;
          margin-left: 25px;
          width: 100%;
          text-align: left;
          .session-title {
            font-size: 1.2rem;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 40px;
            vertical-align: middle;
            letter-spacing: -0.5px;
            color: $Dark;
          }
          .session-desc {
            font-size: 13px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: -0.3px;
            flex: 0 0 55px;
            color: $Dark;
          }
          .session-author {
            font-size: 13px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: -0.3px;
            color: $VueGreen;
          }
        }
      }
    }
  }
  .info-wrap {
    // padding: 80px 0px 65px;
    padding: 80px 0px 0px;
    .location {
      .location-title {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 1.6px;
        text-align: center;
        color: $Dark;
        margin-bottom: 30px;
      }
      .address {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: -0.3px;
        text-align: center;
        color: $Dark;
      }
      .location-name {
        font-size: 13px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.15;
        letter-spacing: 0.4px;
        text-align: center;
        margin-bottom: 25px;
        color: $Dark;
      }
    }
    #map {
      width: 100%;
      height: 300px;
    }
  }
  .sponsor-wrap {
    background-color: $Dark;
    padding: 85px 0px;
    .sponsor-title {
      color: #ffffff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 1.6px;
      margin-bottom: 42px;
    }
    // .sponsor-link {
    // }
  }
}
</style>

