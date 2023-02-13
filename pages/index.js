import Hero from "../components/home/hero";
import Navbar from "../components/general/navbar";
import Features from "../components/home/features";
import About from "../components/home/about";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Bri Bri's Kitchen | Home"
        description="A social media like app for publishing and finding recipes with the supplies you have in your kitchen."
      />
      <Hero />
      <Features />
      <About />
    </>
  );
};

export default Home;
