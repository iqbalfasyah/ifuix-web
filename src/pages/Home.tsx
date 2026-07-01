import { Hero } from '../sections/home/Hero';
import { FeaturedProduct } from '../sections/home/FeaturedProduct';
import { Values } from '../sections/home/Values';
import { Vision } from '../sections/home/Vision';
import { Roadmap } from '../sections/home/Roadmap';
import { CTA } from '../sections/home/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Values />
      <FeaturedProduct />
      <Vision />
      <Roadmap />
      <CTA />
    </>
  );
};
