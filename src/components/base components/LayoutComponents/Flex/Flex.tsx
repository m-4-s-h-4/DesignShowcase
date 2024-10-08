import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";
import { spacingMap } from "../../../../utils/spacingMap";

export interface FlexProps {
  grow?: number;
  shrink?: number;
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  xAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  yAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: keyof typeof spacingMap;
  children?: React.ReactNode;
}

const FlexContainer = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow ?? 0};
  flex-shrink: ${(props) => props.shrink ?? 1};
  align-items: ${(props) => props.yAlign || "stretch"};
  justify-content: ${(props) => props.xAlign || "flex-start"};
  gap: ${(props) => spacingMap[props.gap || "SpacingSpacing0"]};
  width: 100%;
  height: 100%;
`;

const Flex: React.FC<React.PropsWithChildren<FlexProps>> = ({
  grow = 0,
  shrink = 1,
  direction = "row",
  wrap = "nowrap",
  xAlign = "flex-start",
  yAlign = "stretch",
  gap = "SpacingSpacing0",
  children,
}) => {
  return (
    <FlexContainer
      grow={grow}
      shrink={shrink}
      direction={direction}
      wrap={wrap}
      xAlign={xAlign}
      yAlign={yAlign}
      gap={gap}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
