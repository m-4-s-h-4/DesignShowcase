import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import Heading from "../../base components/TypographyComponents/Heading/Heading";

const HeadingWrapper = styled.div`
  max-width: 60vw;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 90vw;
  }
`;

const wordVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px 0px" });

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
      variants={containerVariants}
    >
      <HeadingWrapper>
        <Heading level={"h3"} align="center">
          <p className="flex flex-wrap p-5 text-center">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="relative mx-1 lg:mx-2.5 text-black dark:text-white"
              >
                {word} {/* Render each word */}
              </motion.span>
            ))}
          </p>
        </Heading>
      </HeadingWrapper>
    </motion.div>
  );
};

export default TextRevealByWord;
