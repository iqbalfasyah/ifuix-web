import { Hero } from '../sections/home/Hero';
import { FeaturedProduct } from '../sections/home/FeaturedProduct';
import { Values } from '../sections/home/Values';
import { Vision } from '../sections/home/Vision';
import { Roadmap } from '../sections/home/Roadmap';
import { CTA } from '../sections/home/CTA';
import { Trust } from '../sections/home/Trust';
import { Principles } from '../sections/home/Principles';

export const Home = () => {
  return (
    <>
      <Hero />
      <Values />
      <FeaturedProduct />
      <Trust />
      <Principles />
      <Vision />
      <Roadmap />
      <CTA />
    </>
  );
};
