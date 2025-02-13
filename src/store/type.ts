import { ToastType } from '../types/toast';

export type ActionType =
  | { type: 'ADD_TOAST'; payload: ToastType }
  | { type: 'REMOVE_TOAST'; payload: string };
