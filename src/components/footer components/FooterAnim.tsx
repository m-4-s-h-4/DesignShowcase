import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import {
  H2HeadingMainFontFamily,
  H2HeadingMainFontSize,
  H2HeadingMainFontWeight,
  H2HeadingMainLineHeight,
  TextColorLight,
} from "../../tokens/js/variables";

const slide = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;

const SlidingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${slide} 30s linear infinite;
  margin: 0;
  color: ${TextColorLight};
  font-family: ${H2HeadingMainFontFamily};
  font-weight: ${H2HeadingMainFontWeight};
  line-height: ${H2HeadingMainLineHeight};
  font-size: ${H2HeadingMainFontSize};
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

const FooterAnim: React.FC = () => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideContentRef.current) {
      const width = slideContentRef.current.scrollWidth;
      slideContentRef.current.style.animationDuration = `${(width * 2) / 100}px`;
    }
  }, []);

  return (
    <SliderWrapper>
      <SlideContent ref={slideContentRef}>
        <SlidingText>
          CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME ·
          CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME ·
          CONTACT ME · CONTACT ME ·
        </SlidingText>
        <SlidingText>
          CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME ·
          CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME · CONTACT ME ·
          CONTACT ME · CONTACT ME ·
        </SlidingText>
      </SlideContent>
    </SliderWrapper>
  );
};

export default FooterAnim;
