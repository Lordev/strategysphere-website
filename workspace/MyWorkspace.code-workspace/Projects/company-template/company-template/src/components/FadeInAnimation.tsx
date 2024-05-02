"use client";

import { keyframes } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 200px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function CustomAnimation({ children }: PropsWithChildren) {
    return (
        <Reveal triggerOnce keyframes={customAnimation} duration={600}>
            {children}
        </Reveal>
    );
}
