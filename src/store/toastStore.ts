import { useState, useEffect } from 'react';
import { ToastType } from '../types/toast';
import { ActionType } from './type';

let globalToasts: ToastType[] = [];
let setGlobalToasts: (toasts: ToastType[]) => void = () => {};

const reducer = (state: ToastType[], action: ActionType): ToastType[] => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, { ...action.payload }];
    case 'REMOVE_TOAST':
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
};

export const dispatch = (action: ActionType) => {
  globalToasts = reducer(globalToasts, action);
  setGlobalToasts(globalToasts);
};

export const useToastState = () => {
  const [toasts, setToasts] = useState<ToastType[]>(globalToasts);

  useEffect(() => {
    setGlobalToasts = setToasts;

    return () => {
      setGlobalToasts = () => {};
    };
  }, []);

  return toasts;
};
