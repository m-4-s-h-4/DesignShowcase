import React from "react";
import Text from "../../Primatives/Text/Text";
import { TextColorDark, TextColorLight } from "../../../../tokens/js/variables";
import { spacingMap } from "../../../../utils/spacingMap";
import styles from "./Link.module.css";

type LinkProps = {
  href: string;
  color?: "dark" | "light";
  align?: "center";
  paddingTop?: keyof typeof spacingMap;
  paddingBottom?: keyof typeof spacingMap;
  paddingLeft?: keyof typeof spacingMap;
  paddingRight?: keyof typeof spacingMap;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const colorMap = {
  dark: TextColorDark,
  light: TextColorLight,
};

const Link: React.FC<LinkProps> = ({
  href,
  color = "dark",
  align,
  paddingTop = "SpacingSpacing0",
  paddingBottom = "SpacingSpacing0",
  paddingLeft = "SpacingSpacing0",
  paddingRight = "SpacingSpacing0",
  target = "_self",
  rel,
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
      as="note"
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
      <a href={href} target={target} rel={rel} className={styles.link}>
        {children}
        <span
          className={styles.underline}
          style={{
            backgroundColor: textColor,
          }}
        />
      </a>
    </Text>
  );
};

export default Link;
