import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    element?: 'p' | 'span' | 'label';
    size?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4';
    format?: 'basic' | 'soft' | 'alternative';
    status?: 'positive' | 'negative';
  },
  HTMLParagraphElement
>;
