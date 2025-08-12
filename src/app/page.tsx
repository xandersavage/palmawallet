import { Hero } from "@/components/sections/Hero";
import { AboutTimeline } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Map } from "@/components/sections/Map";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadCTA } from "@/components/sections/downloadCTA";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/cointainer/Container";

const page = () => {
  return (
    <>
      <Hero />
      <Container className="lg:pt-40 pt-20">
        <AboutTimeline />
      </Container>
      <Container className="lg:pt-40 pt-20">
        <Features />
      </Container>
      <Container className="lg:pt-40 pt-20">
        <Map />
      </Container>
      <Container className="lg:pt-40 pt-20">
        <Testimonials />
      </Container>
      <Container className="lg:pt-40 pt-20">
        <DownloadCTA />
      </Container>
      <Footer />
    </>
  );
};
export default page;
