import { useState, useEffect } from 'react';
import { ToastType } from '../types/toast';
import { v4 as uuid } from 'uuid';

type ActionType =
  | { type: 'ADD_TOAST'; payload: ToastType }
  | { type: 'REMOVE_TOAST'; payload: string };

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

const dispatch = (action: ActionType) => {
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

export const addToast = (toast: ToastType) => {
  const id = uuid();
  dispatch({
    type: 'ADD_TOAST',
    payload: { ...toast, id },
  });
};

// 토스트 제거하는 함수
export const removeToast = (id: string) => {
  dispatch({ type: 'REMOVE_TOAST', payload: id });
};
