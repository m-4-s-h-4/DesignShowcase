import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Heading from "../base components/TypographyComponents/Heading/Heading";

interface HyperTextProps {
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
  level?: "display" | "h1" | "h2" | "h3";
  align?: "left" | "center";
  color?: "dark" | "light"; // Added color prop
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  animateOnLoad = true,
  level = "h3", // Default heading level
  align = "center", // Default text alignment
  color = "dark", // Default color
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    iterations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (iterations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= iterations.current
                  ? text[i]
                  : alphabets[getRandomInt(26)]
            )
          );
          iterations.current += 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.length * 10)
    );
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div onMouseEnter={triggerAnimation}>
      <AnimatePresence mode="wait">
        <motion.div {...framerProps}>
          <Heading level={level} align={align} color={color}>
            {displayText.join("")}
          </Heading>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
