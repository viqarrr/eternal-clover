import Hero from "@/components/hero";
import About from "@/components/about";
import Team from "@/components/team";
import GamesSection from "@/components/games";
import BlogSection from "@/components/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GamesSection
        tagline="What We've Made"
        heading="The Games We've Built So Far"
        description="These are the games we’ve actually finished. From jam sessions to serious builds, this is our growing legacy."
        buttonText="View All Games"
        buttonUrl="/games"
      />
      <BlogSection
        tagline="Read Our Stuff"
        heading="Notes From the Eternal Clover Team"
        description="A casual mix of updates, ideas, rants, and reflections from the people behind our games."
        buttonText="View all articles"
        buttonUrl="/blogs"
      />
      <Team />
    </>
  );
}
