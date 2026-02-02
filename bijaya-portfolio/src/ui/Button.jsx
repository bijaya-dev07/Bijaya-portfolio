import React, { useState } from "react";
import styled from "styled-components";
import { IoMailUnread } from "react-icons/io5";

const Button = () => {
  const [copied, setCopied] = useState(false);
  const email = "kojingmoktan92@gmail.com";

  const handleClick = async () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch (e) {
        console.error("Failed to copy email to clipboard:", e);
      }
    }

    // Fallback for older browsers
    try {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
    }
  };
  return (
    <StyledWrapper>
      <div>
        <button
          type="button"
          onClick={handleClick}
          className="c-button c-button--gooey"
        >
          <span className="">
            <IoMailUnread className="mail-icon text-3xl" />
          </span>
          <span className="btn-text" role="status" aria-live="polite">
            {copied ? "Copied!" : email}
          </span>
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .c-button {
    color: #1f2937;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 0.9em 1.6em;
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
    background: transparent;
    border: 2px solid #21AEC0;
    transition: color 350ms ease, border-color 350ms ease;
    font-family: 'Inter', sans-serif;
  }

  .c-button--gooey {
    color: #1f2937;
    border-radius: 12px;
    position: relative;
    transition: all 700ms ease;
    padding: 0.8em 2em;
    min-width: 120px;
  }

  .btn-icon {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #21AEC0;
    color: #fff;
    border-radius: 8px;
    flex-shrink: 0;
    transition: background 300ms ease, color 300ms ease, transform 200ms ease;
  }

  .mail-icon {
    width: 18px;
    height: 18px;
    color: #21AEC0;
  }

  .btn-text {
    display: inline-block;
    min-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    background-color: #21AEC0;
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
    color: #fff;
    border-color: #21AEC0;
  }

  .c-button--gooey:hover .mail-icon {
    color: #fff;
  }

  .c-button--gooey:hover .btn-icon {
    background: #fff;
    color: #21AEC0;
    transform: scale(1.03);
  }

  .c-button--gooey:hover .c-button__blobs div {
    transform: scale(1.15) translateY(0) translateZ(0);
  }

  @media (max-width: 480px) {
    /* keep button readable and consistent on small screens; match Button1 sizing */
    .c-button {
      font-size: 16px;
      padding: 0.8em 2em;
    }
    .c-button--gooey {
      padding: 0.8em 2em;
      min-width: 120px;
    }
    .btn-text {
      min-width: 140px;
    }
  }
`;

export default Button;
