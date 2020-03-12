import { ReactNode, ReactElement } from 'react';

import { IrisProps } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * The modal's open/close state can be controlled with this prop.
     * If not defined, it will use the internal state.
     */
    active?: boolean;
    /**
     * The `content` defines what will appear inside the portal component,
     * whereas the `children` defines what the portal component is anchored to.
     */
    content?: ReactNode;
    children?: ReactElement;
    dismissLabel?: string;
    /**
     * [default = 'md']
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the modal should be featured in lower right corner of viewport.
     *
     * [default = false]
     */
    feature?: boolean;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
  },
  HTMLDivElement
>;