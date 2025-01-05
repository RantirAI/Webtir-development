// Generated from icons/star.svg

import { forwardRef } from "react";
import type { IconProps } from "../types";

// prettier-ignore
export const StarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 16, ...props }, forwardedRef) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props} ref={forwardedRef}><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" /></svg>
    );
  }
);

StarIcon.displayName = "StarIcon";
