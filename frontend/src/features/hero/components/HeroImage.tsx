import Image from "next/image";
import { Hero } from "../types/hero.types";

interface Props {
  hero: Hero;
}

export default function HeroImage({ hero }: Props) {
  return (
    <div className="absolute inset-0">
    <div className="absolute inset-0 scale-105">
  <Image
    src={hero.image}
    alt={hero.title}
    fill
    priority
    unoptimized
    className="object-cover transition-transform duration-[3000ms] hover:scale-110"
  />
</div>
    </div>
  );
}