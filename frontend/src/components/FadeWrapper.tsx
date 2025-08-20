"use client";

import React, { PropsWithChildren } from "react";
import { Fade, FadeProps } from "react-awesome-reveal";

interface FadeWrapperProps extends PropsWithChildren {
    fadeProps: FadeProps & { direction: string }; 
}

export default function FadeWrapper({ fadeProps, children }: FadeWrapperProps) {
    return <Fade {...fadeProps}>{children}</Fade>; 
}
