import axios from "@/lib/axios";
import { Hero } from "../types/hero.types";

class HeroApi {
  async getHeroes(): Promise<Hero[]> {
    const response = await axios.get("/hero/");

    console.log("Hero API response:", response.data);

    return response.data;
  }
}

export default new HeroApi();