"use client";

import Services from "./components/Feature";
import Team from "./components/Member";
import Testimonials from "./components/Testimonial";
import WhyUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Services />
      <WhyUs />
      <Testimonials />
      <Team />
    </>
  );
}
