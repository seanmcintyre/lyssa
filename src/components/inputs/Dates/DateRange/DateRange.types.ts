import { ReactElement } from 'react';
import { IrisInputProps } from '../../../../utils';

export type Props = IrisInputProps<{
  /**
   * A date object that defines the minimum date a user must select
   */
  minDate?: Date;
  /**
   * A date object that defines the maximum date a user must select
   */
  maxDate?: Date;
  /**
   * In what direction should the calendar viewport open?
   *
   * [default = 'left']
   */
  attach?: 'left' | 'right' | 'bottom';
  /**
   * Pass a callback function to run when date changes are applied.
   * Use to get the `Date` objects that define the selected calendar range
   */
  onChange?: (range: [Date, Date]) => void;
  children: ReactElement;
}>;

export interface DateRangeState {
  startLabel: string | null;
  startDateError: string | null;
  endLabel: string | null;
  endDateError: string | null;
  range: [Date, Date];
  draft: [Date | null, null] | [Date, Date | null];
  hoverDraft: [Date | null, Date | null];
  viewportDate: Date;
  open: boolean;
}

export const initialState: DateRangeState = {
  startLabel: null,
  startDateError: null,
  endLabel: null,
  endDateError: null,
  range: [null, null],
  draft: [null, null],
  hoverDraft: [null, null],
  viewportDate: null,
  open: false,
};