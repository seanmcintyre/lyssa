import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Transcript = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 25 25" ref={ref} {...props}>
      <path d="M2.04883 4.74707C2.04883 3.6425 2.94426 2.74707 4.04883 2.74707H16.0488C17.1534 2.74707 18.0488 3.6425 18.0488 4.74707V6.74707H16.0488V4.74707H4.04883V20.7471H12.0488V22.7471H4.04883C2.94426 22.7471 2.04883 21.8516 2.04883 20.7471V4.74707ZM6.04883 6.74707H13.0488V8.74707H6.04883V6.74707ZM13.0488 10.7471H6.04883V12.7471H13.0488V10.7471ZM6.04883 14.7471H9.04883V16.7471H6.04883V14.7471ZM17.0488 8.74707C15.9443 8.74707 15.0488 9.77042 15.0488 11.0328V14.4614C15.0488 15.7237 15.9443 16.7471 17.0488 16.7471C18.1534 16.7471 19.0488 15.7237 19.0488 14.4614V11.0328C19.0488 9.77042 18.1534 8.74707 17.0488 8.74707ZM13.0488 14.7471C13.0488 16.9562 14.8397 18.7471 17.0488 18.7471C19.258 18.7471 21.0488 16.9562 21.0488 14.7471H23.0488C23.0488 17.7201 20.8865 20.188 18.0488 20.6641V23.7471H16.0488V20.6641C13.2111 20.188 11.0488 17.7201 11.0488 14.7471H13.0488Z" />
    </svg>
  )
);