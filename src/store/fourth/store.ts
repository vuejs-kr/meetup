const baseUrl = process.env.BASE_URL;

export const registrationUrl = 'https://tumblbug.com/vuetiful';

export const colors = {
  green: '#42b883',
  navy: '#35495e'
};

export const generalInfo = {
  date: '2018. 04. 17 (화)',
  time: '19:30 ~ 21:30',
  location: '@구글 캠퍼스 서울 메인 이벤트 홀',
  intro: `Vuetiful Korea(뷰티풀 코리아)는 Vue.js에 대한 관심주제 발표를 듣고 서로 관련 경험을 공유하며 네트워킹하는 모임으로,
    2017년 4월 19일에 개최된 Vue.js 한국어 사용자 모임에서 시작하였습니다.`
};

export const presentations = [
  {
    time: '19:35',
    title: '아뇨, 난 Vue.js 사용할건데요?',
    presenter: {
      imgUrl: `${baseUrl}static/fourth/presenters/hax0r.jpg`,
      name: '우영준',
      affiliation: 'Logispot',
      keywords:
        '새로운 패러다임, 이전 코드의 문제점, vue.js 를 도입하기전 신경써야하는 부분, 실제 서비스에 적용해본 vue.js, 느낀점',
      description: '로지스팟에서 리드 개발을 하고 있는 24 우영준입니다!'
    }
  },
  {
    time: '20:00',
    title: 'Vue.js와 Electron으로 데스크탑 앱 만들기',
    presenter: {
      imgUrl: `${baseUrl}static/fourth/presenters/irodong.jpg`,
      name: '고은정',
      affiliation: 'NHN Bugs',
      keywords: 'electron, desktop, chromium, node.js, cross-platform',
      description: '게임과 개발을 좋아하는 웹개발자입니다.'
    }
  },
  {
    time: '20:30',
    title: 'Apollo로 알아보는 Vue in the GraphQL',
    presenter: {
      imgUrl: `${baseUrl}static/fourth/presenters/june.png`,
      fileUrl: 'https://jicjjang.github.io/blog/slides/vue-apollo-graphql/',
      name: '최준석',
      affiliation: 'NHN Bugs',
      keywords: 'graphql, api, apollo, vue',
      description: `[3회 발표자료](https://github.com/seouldrinker/seoulDrinkerGraphql)를
      ~~재탕(?)~~ 확장시켜서 최대한 쉽게 발표할 예정이에요 :) 잘부탁드립니다.<br/>**본 세션은 GraphQL에 대한 약간의 사전 지식이 필요로 하며,
      Server feature에 대한 설명이 포함될 수 있습니다.**`
    }
  }
];

export const program = [
  {
    time: '19:30',
    title: '소개'
  },
  presentations[0],
  presentations[1],
  {
    time: '20:25',
    title: '휴식'
  },
  presentations[2],
  {
    time: '20:55',
    title: '스폰서 광고'
  },
  {
    time: '21:00',
    title: '뷰티풀 코리아 일주년 기념 이벤트 feat 에반 유'
  },
  {
    time: '21:05',
    title: '네트워킹 파티'
  },
  {
    time: '21:25',
    title: '경품 추첨'
  },
  {
    time: '21:30',
    title: '폐회 및 정리'
  }
];

export const sponsors = [
  {
    pageUrl: 'http://www.logi-spot.com',
    imgUrl: `${baseUrl}static/fourth/sponsors/logispot.png`,
    name: 'Logispot'
  },
  {
    pageUrl: 'http://coinone.co.kr',
    imgUrl: `${baseUrl}static/fourth/sponsors/coinone.png`,
    name: 'Coinone'
  }
];

export const volunteers = [
  {
    pageUrl: 'http://seungmin.kr',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/smilee.jpg`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/smilee.jpg`,
    name: '이승민',
    description: '@smilee'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/sam.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '박새미',
    description: '잠만보'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/chris.jpg`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '양성민',
    description: '조금 큰 사진요정'
  },
  {
    pageUrl: 'https://www.hax0r.info',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/hax0r.jpg`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/hax0r.jpg`,
    name: '우영준',
    description: 'a.k.a hax0r'
  },
  {
    pageUrl: 'https://www.facebook.com/kkd927',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/kkd927.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/kkd927b2.png`,
    name: '권경덕',
    description: 'kkd927'
  },
  {
    pageUrl: 'https://wickso.me/',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/wicksome.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '김영준',
    description: 'SGkgZ3V5cyEgSSdtIHdpY2tzb21lIHNvZnR3YXJlIGVuZ2luZWVyISA6RA=='
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/chayeoi.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '김찬연',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/no-profile.jpg`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '김범연',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/kelly.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '우경화',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/no-profile.jpg`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '고예슬',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'https://github.com/kciter',
    imgUrl: `${baseUrl}static/fourth/volunteers/profile/kciter.png`,
    backgroundImageUrl: `${baseUrl}static/fourth/volunteers/background-image/vue.jpeg`,
    name: '이선협',
    description: '화이팅!'
  }
];

export const participantSponsors = [
  '이선협',
  '정주리',
  '김치균',
  '함수원',
  '소동섭',
  '장기효',
  '최윤정',
  '김대용',
  '김혜우',
  '한승훈',
  '김수진',
  '정주리',
  '이희송',
  '유창민',
  '임성민',
  '김현기',
  '백창열',
  '김비치',
  '김민수',
  '박해주'
];

export const regularParticipants = [
  '진유정',
  '김인숙',
  '신동주',
  '신기훈',
  '이승현',
  '송인호',
  '김진경',
  '김희철',
  '마광휘',
  '이유운',
  '안연상',
  '이진석',
  '임일순',
  '하정훈',
  '이동춘',
  '임호성',
  '오지환',
  '강은주',
  '김창균',
  '이명종',
  '한남일',
  '이영규',
  '김태훈',
  '조성원',
  '고세민',
  '김영준',
  '이승민',
  '승형수',
  '강형원',
  '최승현',
  '정보람',
  '이상은',
  '임규산',
  '김의태',
  '심재완',
  '정현식',
  '유원영',
  '박재명',
  '우창희',
  '김지섭',
  '박정환',
  '김상렬',
  '이치웅',
  '조지훈',
  '구본익',
  '김성광',
  '정영태',
  '강효선',
  '김희준',
  '김기현',
  '임초이',
  '오세훈',
  '강병학',
  '김대호',
  '이상철',
  '엄재영',
  '차현진',
  '안병은',
  '김태균',
  '이진문',
  '장현석',
  '허성룡',
  '나윤호',
  '박종훈',
  '김성헌',
  '황병대',
  '김바다',
  '백재연',
  '이성균',
  '김세환',
  '한동선',
  '조정연',
  '오강훈',
  '박근우',
  '이정훈',
  '김다운',
  '김호영',
  '이성한',
  '구본한',
  '오지혜',
  '김정용',
  '변우진',
  '문지환',
  '서동구',
  '박선희',
  '송지은',
  '김윤성',
  '노현관',
  '안승철',
  '류성탁',
  '김세경',
  '유원곤',
  '김희천',
  '이현수',
  '최민호',
  '홍호택',
  '조연우',
  '성슬기',
  '김낙현',
  'Do Kenzy',
  '정재훈',
  '장나희',
  '석민호',
  '서맹관',
  '송준호',
  '홍단비',
  '김병주',
  '이동욱',
  '박승용',
  '현지혜',
  '남상균',
  '신국정',
  '김예닮',
  '김주인',
  '김다솜',
  '전옥현',
  'lazy****',
  '박원영',
  '무키',
  '푸른움',
  '변용훈',
  '김해연',
  'dlwo1****',
  '이혜진',
  '박주혁'
];

export const prevMeetups = [
  {
    name: 'Vuetiful Korea 1회',
    pageUrl: 'http://vuejs.kr/meetup/first'
  },
  {
    name: 'Vuetiful Korea 2회',
    pageUrl: 'http://vuejs.kr/meetup/second'
  },
  {
    name: 'Vuetiful Korea 3회',
    pageUrl: 'http://vuejs.kr/meetup/third'
  }
];

export const sns = [
  {
    name: 'Facebook',
    pageUrl: 'https://www.facebook.com/groups/vuejs.korea',
    faImg: `${baseUrl}sns/facebook.svg`
  },
  {
    name: 'Slack',
    pageUrl: 'https://vuejs-korea.herokuapp.com',
    faImg: `${baseUrl}sns/slack.svg`
  },
  {
    name: 'Github',
    pageUrl: 'https://github.com/vuejs-kr',
    faImg: `${baseUrl}sns/github.svg`
  }
];
