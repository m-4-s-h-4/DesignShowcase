import React from "react";
import Container from "../../components/base components/Container/Container";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import TextRevealByWord from "../../components/about components/TextRevealByWord/TextRevealByWord";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";
import MashaImage from "/Masha.svg";

const About: React.FC = () => {
  return (
    <Container height="auto" direction="column">
      <Flex xAlign="center" yAlign="center">
        <Stack>
          {/* Centered SVG */}
          <img
            src={MashaImage}
            alt="Masha SVG"
            width="300"
            height="300"
            style={{ display: "block", margin: "0 auto" }}
          />

          <TextRevealByWord
            text="Hi, I’m Masha, a Barcelona-based designer with a background in frontend development. I specialize in digital design and motion graphics, creating engaging visual experiences online."
            className="relative z-0 h-[100vh]"
          />
        </Stack>
      </Flex>
    </Container>
  );
};

export default About;
