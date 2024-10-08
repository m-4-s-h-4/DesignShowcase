import About from "../../sections/About/About";

import Work from "../../sections/Work/Work";
import Container from "../../components/base components/Container/Container";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";
import Footer from "../../sections/Footer/Footer";

function MainPage() {
  return (
    <SmoothScroll slideDuration={5}>
      <Container height="auto" paddingLeftRight="SpacingSpacing4">
        <About />
        <Work />
      </Container>
      <Footer />
    </SmoothScroll>
  );
}

export default MainPage;
