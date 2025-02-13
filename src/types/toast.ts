export interface ToastType {
  id?: string;
  message?: string;
  type?: 'success' | 'error' | 'warn' | 'default';
  duration?: number;
  isClosable?: boolean;
  variants?: 'filled' | 'outlined';
  custom?: () => React.ReactNode;
  position?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left';
}

export type Position =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';
