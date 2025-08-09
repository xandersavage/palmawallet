import { Hero } from "@/components/sections/Hero";
import { AboutTimeline } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Map } from "@/components/sections/Map";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/cointainer/Container";

const page = () => {
  return (
    <>
      <Hero />
      <AboutTimeline />
      <Container className="pt-40">
        <Features />
      </Container>
      <Container>
        <Map />
      </Container>
      <Footer />
    </>
  );
};
export default page;
