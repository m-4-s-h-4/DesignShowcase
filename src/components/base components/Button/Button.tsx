import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Box from "../Primatives/Box/Box";

import {
  BackgroundColorDark,
  SpacingSpacing1,
  SpacingSpacing2,
} from "../../../tokens/js/variables";
import Link from "../TypographyComponents/Link/Link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  link?: string;
}

const StyledButton = styled(Box)`
  cursor: pointer;
  background-color: ${BackgroundColorDark};
  border-radius: 5px;
  padding: ${SpacingSpacing1} ${SpacingSpacing2};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: lighten(${BackgroundColorDark}, 10%);

    .linkUnderline {
      width: 100%;
      transition: width 0.3s ease-in-out;
    }
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <StyledButton onClick={handleClick}>
      <Link align="center" color="light" href="#">
        {text}
      </Link>
    </StyledButton>
  );
};

export default Button;
