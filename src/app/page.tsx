import { Hero } from "@/components/sections/Hero";
import { AboutTimeline } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Map } from "@/components/sections/Map";
import Container from "@/components/layout/cointainer/Container";

const page = () => {
  return (
    <>
      <Hero />
      <AboutTimeline />
      <Container className="mt-20">
        <Features />
      </Container>
      <Container>
        <Map />
      </Container>
    </>
  );
};
export default page;
