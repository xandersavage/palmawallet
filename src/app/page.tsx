import { Hero } from "@/components/sections/Hero";
import { AboutTimeline } from "@/components/sections/About";
import Container from "@/components/layout/cointainer/Container";

const page = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <AboutTimeline />
    </>
  );
};
export default page;
