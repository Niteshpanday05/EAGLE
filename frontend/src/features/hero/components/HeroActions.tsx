import Link from "next/link";
import { Hero } from "../types/hero.types";

interface Props {
  hero: Hero;
}

export default function HeroActions({ hero }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      <Link
        href={hero.primary_button_url}
        className="rounded-lg bg-white px-8 py-4 text-black"
      >
        {hero.primary_button_text}
      </Link>

      <Link
        href={hero.secondary_button_url}
        className="rounded-lg  bg-white text-black border px-8 py-4"
      >
        {hero.secondary_button_text}
      </Link>

    </div>
  );
}