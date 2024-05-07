"use client";

import { keyframes } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default function OpacityAnimation({ children }: PropsWithChildren) {
    return (
        <Reveal triggerOnce keyframes={customAnimation} duration={900}>
            {children}
        </Reveal>
    );
}
