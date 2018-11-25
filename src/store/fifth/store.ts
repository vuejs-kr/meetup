const baseUrl = process.env.BASE_URL;

export const registrationUrl = 'https://meetgo.kr/#/userEventDetail/vuetiful05';

export const colors = {
  green: '#42b883',
  navy: '#35495e'
};

export const generalInfo = {
  date: '2018. 08. 08 (수)',
  time: '19:30 ~ 21:15',
  location: '@구글 캠퍼스 서울 메인 이벤트 홀',
  intro: `Vuetiful Korea(뷰티풀 코리아)는 Vue.js에 대한 관심주제 발표를 듣고 서로 관련 경험을 공유하며
    네트워킹하는 모임으로, 2017년 4월 19일에 개최된 Vue.js 한국어 사용자 모임에서 시작하였습니다.`
};

export const presentations = [
  {
    time: '19:35',
    title: 'NUXT로 Art하게 프론트 설계해보기',
    presenter: {
      imgUrl: `${baseUrl}static/fifth/img/presenters/namedboy.jpg`,
      fileUrl: `${baseUrl}static/fifth/pdf/01.pdf`,
      name: '김선종',
      affiliation: '아티프렌즈',
      keywords: 'Vue, nuxt, 초보, 설계, 프론트엔드',
      description: '항상 새로움을 찾아 다니는 괴짜 개발자'
    }
  },
  {
    time: '20:00',
    title: '스프링 부트에서 뷰 맛보기',
    presenter: {
      imgUrl: `${baseUrl}static/fifth/img/presenters/sam.png`,
      fileUrl: `${baseUrl}static/fifth/pdf/02.pdf`,
      name: '박새미',
      affiliation: 'Notiplus',
      keywords: 'springboot, thymeleaf',
      description: '잠만보입니다!!'
    }
  },
  {
    time: '20:25',
    title: '더퀴즈라이브 웹 버전 개발기',
    presenter: {
      imgUrl: `${baseUrl}static/fifth/img/presenters/sknam.jpg`,
      fileUrl: `${baseUrl}static/fifth/pdf/03.pdf`,
      name: '남상균',
      affiliation: 'NBT',
      keywords: '더퀴즈라이브, Vue.js, RxJS, Firebase.js, socket.io',
      description: '만능일꾼이 되고 싶은 일개미'
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
  presentations[2],
  {
    time: '21:00',
    title: '라이트닝 토크'
  },
  {
    time: '21:15',
    title: '폐회 및 정리'
  }
];

export const sponsors = [
  {
    pageUrl: 'https://youtube.com/ahastudio',
    imgUrl: `${baseUrl}static/fifth/img/sponsors/ashal.jpg`,
    name: '아샬'
  }
];

export const volunteers = [
  {
    pageUrl: 'http://seungmin.kr',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/smilee.jpg`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/smilee.jpg`,
    name: '이승민',
    description: '@smilee'
  },
  {
    pageUrl: 'https://www.facebook.com/kkd927',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/kkd927.png`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/kkd927b2.png`,
    name: '권경덕',
    description: 'kkd927'
  },
  {
    pageUrl: 'https://wickso.me/',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/wicksome.png`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/vue.jpeg`,
    name: '김영준',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/kelly.png`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/vue.jpeg`,
    name: '우경화',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/imsukmin',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/ngenius.png`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/ngenius.jpg`,
    name: '임석민',
    description: '@nGenius'
  },
  {
    pageUrl: 'https://jicjjang.github.io/blog',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/june.png`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/june.png`,
    name: '최준석',
    description: '카카오페이에서 프론트/백엔드 개발자 채용합니다 :D'
  },
  {
    pageUrl: 'https://github.com/Vallista',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/gwm.jpg`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/gwm.jpeg`,
    name: '마광휘',
    description: '디자이너님 찾습니다 ㅠ.ㅠ'
  },
  {
    pageUrl: '',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/no-profile.jpg`,
    backgroundImageUrl: `${baseUrl}static/fifth/img/volunteers/background-image/vue.jpeg`,
    name: '성현우',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'https://twitter.com/re_you_cat',
    imgUrl: `${baseUrl}static/fifth/img/volunteers/profile/reyoucat.jpg`,
    backgroundImageUrl: 'https://pbs.twimg.com/profile_banners/781803661/1520209479/1500x500',
    name: '최재현',
    description: '@re_you_cat'
  }
];

export const participantSponsors = ['이선협', '이재호'];

export const regularParticipants = [
  '이범두',
  '문지환',
  '김병주',
  'bangshinch',
  '진성주',
  '안정우',
  '김현태',
  'yujeong',
  '김인숙',
  '김비치',
  '김소라',
  '이동춘',
  '한인규',
  '임진호',
  '오민근',
  '전일주',
  '남탱이',
  '전현우',
  '이원민',
  '김수진',
  '권승곤',
  '이상오',
  '김태규',
  '김상렬',
  '최재용',
  '이현경',
  '박한수',
  '이수진',
  '김영득',
  '박은혜',
  '이치웅',
  '박종훈',
  '김응길',
  '신동주',
  '문대일',
  '김성범',
  '장기석',
  '오강훈',
  '김윤수',
  '원치영',
  '장재현',
  '유근수',
  '신기훈',
  '임희동',
  '김동민',
  '유성실',
  '김도은',
  '황경록',
  '김슬기',
  '김소연',
  '김현철',
  '이지희',
  '최지혜',
  '김희철',
  '이가람',
  '송유진',
  '김정용',
  '차정윤',
  '이상은',
  '임성광',
  '배은선',
  '권동현',
  '김종훈',
  '김간디',
  '김재혁',
  '김영진',
  '강희창',
  '노태진',
  '이치형',
  '황정민',
  '이재현',
  '김상훈',
  '김효성',
  '김지은',
  '정진호',
  '조용준',
  '이종찬',
  '김민호'
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
  },
  {
    name: 'Vuetiful Korea 4회',
    pageUrl: 'http://vuejs.kr/meetup/fourth'
  }
];

export const sns = [
  {
    name: 'Facebook',
    pageUrl: 'https://www.facebook.com/groups/vuejs.korea',
    faImg: `${baseUrl}static/sns/facebook.svg`
  },
  {
    name: 'Slack',
    pageUrl: 'https://vuejs-korea.herokuapp.com',
    faImg: `${baseUrl}static/sns/slack.svg`
  },
  {
    name: 'Github',
    pageUrl: 'https://github.com/vuejs-kr',
    faImg: `${baseUrl}static/sns/github.svg`
  }
];

export const MEETUP_ID = 'IlluatGALcrPjt07nOLY';
export const /* enum */ loginStates = {
    INTERMIDIATE: 0,
    BEFORE_LOGIN: 1,
    MAIL_SENT: 2,
    IN_PROGRESS: 3,
    LOGGED_IN: 4
  };
