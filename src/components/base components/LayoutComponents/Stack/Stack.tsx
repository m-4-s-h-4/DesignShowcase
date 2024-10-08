import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";
import { spacingMap } from "../../../../utils/spacingMap";

export interface StackProps {
  direction?: "horizontal" | "vertical";
  gap?: keyof typeof spacingMap;
  children?: React.ReactNode;
}

const directionMap = {
  horizontal: "row",
  vertical: "column",
};

const StackContainer = styled(Box)<StackProps>`
  display: flex;
  flex-direction: ${(props) => directionMap[props.direction || "vertical"]};
  gap: ${(props) => spacingMap[props.gap || "SpacingSpacing0"]};
`;

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ direction = "vertical", gap = "SpacingSpacing0", children }, ref) => {
    return (
      <StackContainer direction={direction} gap={gap} ref={ref}>
        {children}
      </StackContainer>
    );
  }
);

export default Stack;
