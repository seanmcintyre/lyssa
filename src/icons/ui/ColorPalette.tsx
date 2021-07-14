import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ColorPalette = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...props} ref={ref}>
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M10 0C15.5222 0 20 3.97778 20 8.88889C20 11.8841 17.6297 14.3257 14.6626 14.4402L14.4444 14.4444H12.4778C11.8201 14.4436 11.2235 14.8295 10.9546 15.4297C10.7064 15.9837 10.7803 16.6246 11.138 17.1055L11.2333 17.2222C11.6704 17.7109 11.7804 18.4105 11.5144 19.0097C11.2483 19.6089 10.6556 19.9965 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.1682 5.18772 17.5918 9.24929 17.9661L9.316 17.971L9.25167 17.8581C8.74878 16.9301 8.66541 15.8175 9.04688 14.8117L9.12938 14.612C9.69274 13.3545 10.9102 12.5245 12.2724 12.4499L12.4778 12.4444H14.4444C16.4081 12.4444 18 10.8526 18 8.88889C18 5.1392 14.4677 2 10 2ZM8 13.5C8 14.3284 7.32843 15 6.5 15C5.67157 15 5 14.3284 5 13.5C5 12.6716 5.67157 12 6.5 12C7.32843 12 8 12.6716 8 13.5ZM14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11ZM14 5.5C14 6.32843 13.3284 7 12.5 7C11.6716 7 11 6.32843 11 5.5C11 4.67157 11.6716 4 12.5 4C13.3284 4 14 4.67157 14 5.5ZM7.5 7C8.32843 7 9 6.32843 9 5.5C9 4.67157 8.32843 4 7.5 4C6.67157 4 6 4.67157 6 5.5C6 6.32843 6.67157 7 7.5 7ZM6.5 9.5C6.5 10.3284 5.82843 11 5 11C4.17157 11 3.5 10.3284 3.5 9.5C3.5 8.67157 4.17157 8 5 8C5.82843 8 6.5 8.67157 6.5 9.5Z"
        fill="#1A2E3B"
      />
    </svg>
  )
);