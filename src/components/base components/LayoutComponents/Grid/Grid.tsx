import React from "react";
import styled from "styled-components";
import { spacingMap } from "../../../../utils/spacingMap";
import Box from "../../Primatives/Box/Box";

// Define interface for Grid component props
export interface GridProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  gridHeight?: string; // Optional custom height
  gap?: keyof typeof spacingMap; // Gap size for the grid
}

// Styled component for the Grid container with responsive width adjustments
const GridContainer = styled(Box)<{
  gridHeight?: string;
  gap: keyof typeof spacingMap;
}>`
  display: grid;
  width: 60%; /* Default width set to 60% for desktop */
  height: ${(props) =>
    props.gridHeight || "85vh"}; /* Default height is set to 80vh */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  /* Responsive width adjustments */
  @media (max-width: 1024px) {
    width: 100%; /* Set width to 100% on tablet and smaller screens */
  }

  & > :nth-child(1) {
    grid-area: 1 / 1 / 5 / 3; /* Occupies rows 1-4 and columns 1-2 */
  }
  & > :nth-child(2) {
    grid-area: 1 / 3 / 3 / 5; /* Occupies rows 1-2 and columns 3-4 */
  }
  & > :nth-child(3) {
    grid-area: 3 / 3 / 5 / 5; /* Occupies rows 3-4 and columns 3-4 */
  }

  /* Responsive adjustments for grid areas */
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr); /* Switch to 2 columns */
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 20px;

    & > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 3; /* Occupies rows 1 and all columns */
    }
    & > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 2; /* Occupies row 2, column 1 */
    }
    & > :nth-child(3) {
      grid-area: 2 / 2 / 3 / 3; /* Occupies row 2, column 2 */
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Switch to 1 column */
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 15px;

    & > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 2; /* Stack each child in one column */
    }
    & > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    & > :nth-child(3) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }
`;

// Grid component with a single layout configuration
const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  style,
  children,
  gridHeight, // Allows custom height if needed
  gap = "SpacingSpacing2",
}) => {
  return (
    <GridContainer style={style} gridHeight={gridHeight} gap={gap}>
      {children}
    </GridContainer>
  );
};

export default Grid;
