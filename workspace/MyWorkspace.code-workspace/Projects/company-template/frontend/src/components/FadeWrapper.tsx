"use client";

import React, { PropsWithChildren } from "react";
import { Fade, FadeProps } from "react-awesome-reveal";

interface FadeWrapperProps extends PropsWithChildren {
    fadeProps: FadeProps & { direction: string }; // Include direction in fadeProps
}

export default function FadeWrapper({ fadeProps, children }: FadeWrapperProps) {
    return <Fade {...fadeProps}>{children}</Fade>; // Pass otherFadeProps to Fade
}
