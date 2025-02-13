import { v4 as uuid } from 'uuid';
import { dispatch } from './toastStore';
import { ToastType } from '../types/toast';

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
