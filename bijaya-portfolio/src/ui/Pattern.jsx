import React from "react";
import styled from "styled-components";

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="grid-wrapper">
        <div className="grid-background" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  display: block;
  /* Color Palette */
  --primary-accent: #21aec0;
  --bg-cream: #fff7ec;
  
  /* responsive grid variables: width, height, and line thickness */
  --grid-w: clamp(28px, 8vw, 60px);
  --grid-h: clamp(42px, 12vw, 90px);
  --line: clamp(1px, 0.3vw, 2px);

  .grid-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: var(--bg-cream);
  }

  .grid-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.95;
    background-image: linear-gradient(
        to right,
        rgba(33, 174, 192, 0.12) var(--line),
        transparent var(--line)
      ),
      linear-gradient(to bottom, rgba(33, 174, 192, 0.12) var(--line), transparent var(--line));
    background-size: var(--grid-w) var(--grid-h);
    -webkit-mask-image: radial-gradient(
      ellipse 70% 60% at 50% 0%,
      #000 60%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 70% 60% at 50% 0%,
      #000 60%,
      transparent 100%
    );
  }


  /* Responsive adjustments for the grid spacing */
  /* keep mask adjustments but let clamp() control sizes; this media rule reduces opacity slightly */
  @media (max-width: 640px) {
    .grid-background {
      opacity: 0.78;
      -webkit-mask-image: radial-gradient(
        ellipse 80% 70% at 50% 0%,
        #000 50%,
        transparent 100%
      );
      mask-image: radial-gradient(
        ellipse 80% 70% at 50% 0%,
        #000 50%,
        transparent 100%
      );
    }
  }

  @media (min-width: 1024px) {
    .grid-background {
      opacity: 1;
    }
  }
`;

export default Pattern;
