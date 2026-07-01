import { Hero } from '../sections/home/Hero';
import { FeaturedProduct } from '../sections/home/FeaturedProduct';
import { Trust } from '../sections/home/Trust';
import { Values } from '../sections/home/Values';
import { Principles } from '../sections/home/Principles';
import { Roadmap } from '../sections/home/Roadmap';
import { CTA } from '../sections/home/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Trust />
      <Values />
      <Principles />
      <Roadmap />
      <CTA />
    </>
  );
};
