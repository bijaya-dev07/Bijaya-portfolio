import React from "react";
import styled from "styled-components";

const ShowMore = ({
  onClick,
  type = "button",
  children = "Show more",
  className = "",
  icon = null,
}) => {
  return (
    <Styled>
      <div>
        <button
          type={type}
          className={`c-button c-button--gooey ${className}`}
          onClick={onClick}
        >
          <span className="btn-text">{children}</span>
          {icon ? <span className="btn-icon">{icon}</span> : null}
          <div className="c-button__blobs">
            <div />
            <div />
            <div />
          </div>
        </button>

        <svg
          style={{ display: "block", height: 0, width: 0 }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                result="blur"
                stdDeviation={10}
                in="SourceGraphic"
              />
              <feColorMatrix
                result="goo"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                mode="matrix"
                in="blur"
              />
              <feBlend in2="goo" in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  .c-button {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 0.85em 2.25rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 12px;
    background: #21aec0;
    border: 1px solid transparent;
    transition: color 350ms ease, border-color 350ms ease;
    font-family: 'Inter', sans-serif;
  }

  .c-button--gooey {
    color: #fff;
    border-radius: 12px;
    position: relative;
    transition: all 700ms ease;
    padding: 0.85em 1.6rem;
    min-width: 120px;
  }

  .btn-text {
    display: inline-block;
    min-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .c-button--gooey .c-button__blobs {
    height: 100%;
    filter: url(#goo);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -3px;
    right: -1px;
    z-index: -1;
    pointer-events: none;
  }

  .c-button--gooey .c-button__blobs div {
    background-color: #fff;
    width: 34%;
    height: 100%;
    border-radius: 18px;
    position: absolute;
    transform: scale(1.15) translateY(110%) translateZ(0);
    transition: all 700ms ease;
  }

  .c-button--gooey .c-button__blobs div:nth-child(1) {
    left: -5%;
  }

  .c-button--gooey .c-button__blobs div:nth-child(2) {
    left: 30%;
    transition-delay: 60ms;
  }

  .c-button--gooey .c-button__blobs div:nth-child(3) {
    left: 66%;
    transition-delay: 25ms;
  }

  .c-button--gooey:hover {
    color: #21aec0;
    border-color: #21aec0;
  }

  .c-button--gooey:hover .c-button__blobs div {
    transform: scale(1.15) translateY(0) translateZ(0);
  }

  @media (max-width: 480px) {
    .c-button {
      font-size: 15px;
      padding: 0.6em 0.8rem;
    }
    .c-button--gooey {
      padding: 0.6em 0.8rem;
      min-width: 88px;
    }
    .btn-text {
      min-width: 72px;
    }
  }
`;

export default ShowMore;
