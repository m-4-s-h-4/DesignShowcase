import React from "react";
import Text from "../../Primatives/Text/Text";
import { TextColorDark, TextColorLight } from "../../../../tokens/js/variables";
import { spacingMap } from "../../../../utils/spacingMap";

type HeadingLevel = "display" | "h1" | "h2" | "h3";

export interface HeadingProps {
  level: HeadingLevel;
  color?: "dark" | "light";
  align?: "center" | "left";
  paddingTop?: keyof typeof spacingMap;
  paddingBottom?: keyof typeof spacingMap;
  paddingLeft?: keyof typeof spacingMap;
  paddingRight?: keyof typeof spacingMap;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const colorMap = {
  dark: TextColorDark,
  light: TextColorLight,
};

const Heading: React.FC<HeadingProps> = ({
  level,
  color = "dark",
  align = "left",
  paddingTop = "SpacingSpacing0",
  paddingBottom = "SpacingSpacing0",
  paddingLeft = "SpacingSpacing0",
  paddingRight = "SpacingSpacing0",
  style,
  children,
}) => {
  const textColor = colorMap[color];
  const paddingTopValue = spacingMap[paddingTop];
  const paddingBottomValue = spacingMap[paddingBottom];
  const paddingLeftValue = spacingMap[paddingLeft];
  const paddingRightValue = spacingMap[paddingRight];

  return (
    <Text
      as={level}
      style={{
        color: textColor,
        textAlign: align,
        paddingTop: paddingTopValue,
        paddingBottom: paddingBottomValue,
        paddingLeft: paddingLeftValue,
        paddingRight: paddingRightValue,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default Heading;
