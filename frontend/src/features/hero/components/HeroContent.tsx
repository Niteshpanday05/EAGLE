import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

import { Hero } from "../types/hero.types";

interface Props {
  hero: Hero;
}

export default function HeroContent({ hero }: Props) {
  return (
    <div className="space-y-8">

      <HeroBadge badge={hero.badge} />

      <div className="space-y-4">

        <h1 className="text-4xl font-black text-white/80 leading-tight md:text-6xl">

          {hero.title}

        </h1>

        <p className="text-xl text-gray-200">

          {hero.subtitle}

        </p>

        <p className="text-gray-300">

          {hero.description}

        </p>

      </div>

      <HeroActions hero={hero} />

      <HeroStats />

    </div>
  );
}