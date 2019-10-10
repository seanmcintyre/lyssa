import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Star = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M6.942 11.567a.77.77 0 0 1 .268.838l-1.468 4.751 3.791-2.896a.77.77 0 0 1 .934 0l3.791 2.896-1.468-4.751a.77.77 0 0 1 .268-.838l3.898-2.978h-4.777a.77.77 0 0 1-.735-.542L10 3.374 8.556 8.047a.77.77 0 0 1-.735.542H3.044l3.898 2.978zM.304 8.43c-.585-.446-.27-1.38.467-1.38h6.483L9.265.542c.223-.723 1.247-.723 1.47 0l2.011 6.509h6.483c.736 0 1.052.934.467 1.38l-5.278 4.032 2.02 6.538c.222.715-.606 1.293-1.201.838l-5.237-4-5.237 4c-.595.455-1.423-.123-1.201-.838l2.02-6.538L.304 8.431z"
        fill="#1A2E3B"
      />
    </svg>
  ),
);