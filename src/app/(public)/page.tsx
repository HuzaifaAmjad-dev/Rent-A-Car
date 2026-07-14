import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCars />
      <WhyChooseUs />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  );
}