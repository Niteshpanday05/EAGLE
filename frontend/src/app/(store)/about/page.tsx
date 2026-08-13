import {
  AboutCTA,
  AboutHero,
  AboutMission,
  AboutStats,
  AboutStory,
  AboutValues,
  AboutWhyChooseUs,
} from "@/features/about";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about our story, mission, values, and commitment to providing a better shopping experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      <AboutStory />

      <AboutMission />

      <AboutValues />

      <AboutStats />

      <AboutWhyChooseUs />

      <AboutCTA />
    </main>
  );
}