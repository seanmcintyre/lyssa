import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const LightDark = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path d="M10 1.81818C5.48818 1.81818 1.81818 5.48818 1.81818 10C1.81818 14.5118 5.48818 18.1818 10 18.1818C14.5118 18.1818 18.1818 14.5118 18.1818 10C18.1818 5.48818 14.5118 1.81818 10 1.81818ZM10 20C4.48636 20 0 15.5136 0 10C0 4.48636 4.48636 0 10 0C15.5136 0 20 4.48636 20 10C20 15.5136 15.5136 20 10 20Z" />
      <path d="M5.51758 14.4869C7.97576 16.9442 11.9603 16.9442 14.4185 14.4869C16.8757 12.0296 16.8757 8.04418 14.4185 5.58691L5.51758 14.4869Z" />
    </svg>
  ),
);