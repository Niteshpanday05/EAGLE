import HeroApi from "../api/hero.api";

class HeroService {
  async getHeroes() {
    return HeroApi.getHeroes();
  }
}

export default new HeroService();