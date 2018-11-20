import { Component, Vue } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    windowWidth: number;
    windowHeight: number;
    windowScrollY: number;
  }
}

@Component
export default class FourthFifthMixin extends Vue {
  public windowWidth = window.innerWidth;
  public windowHeight = window.innerHeight;
  public windowScrollY = window.scrollY;

  public mounted() {
    window.addEventListener('resize', this.getWindowWidth);
    window.addEventListener('scroll', this.handleScroll);
  }

  public beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('scroll', this.handleScroll);
  }

  get mobile() {
    return this.windowWidth < 375;
  }
  get smartphone() {
    return this.windowWidth >= 375 && this.windowWidth < 600;
  }
  get tablet() {
    return this.windowWidth >= 600 && this.windowWidth < 1280;
  }
  get laptop() {
    return this.windowWidth >= 1280 && this.windowWidth < 1920;
  }
  get desktop() {
    return this.windowWidth >= 1920;
  }
  get pageOne() {
    return this.windowScrollY < this.windowHeight;
  }

  private getWindowWidth() {
    if (window.innerWidth) {
      this.windowWidth = window.innerWidth;
    }
    if (window.innerHeight) {
      this.windowHeight = window.innerHeight;
    }
  }

  private handleScroll() {
    if (window.scrollY) {
      this.windowScrollY = window.scrollY;
    }
  }
}
