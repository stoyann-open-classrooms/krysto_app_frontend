import { Link } from "react-router-dom";

import HomeHero from "../../../components/home/HomeHero";
import HeroDetails from "../../../components/home/HeroDetails";
import HomeSlider from "../../../components/home/HomeSlider";
import HeroCollect from "../../../components/home/HeroCollect";
import HeroMaterial from "../../../components/home/HeroMaterial";
import HeroMethod from "../../../components/home/HeroMethod";
import ProblemHero from "../../../components/home/ProblemHero";
import HeroSunglasses from "../../../components/home/HeroSunglasses";

function Home() {
  return (
    <>
      <HomeHero />
      <ProblemHero />
      <HeroDetails />
      <HomeSlider />
      <HeroCollect />
      <HeroMaterial />
      <HeroSunglasses />

      <HeroMethod />
    </>
  );
}

export default Home;
