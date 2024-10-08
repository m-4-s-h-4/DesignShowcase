import React, { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  slideDuration?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  slideDuration = 7,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      let scrollAmount = 0;
      const scrollStep = event.deltaY / slideDuration;

      // Smoothly animate the scroll
      const smoothScroll = () => {
        if (Math.abs(scrollAmount) < Math.abs(event.deltaY)) {
          scrollAmount += scrollStep;
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [slideDuration]);

  return <div ref={scrollContainerRef}>{children}</div>;
};

export default SmoothScroll;
