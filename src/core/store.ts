import { useState, useEffect } from "react";
import { ToastType } from "@/types/toast";

type Action =
  | { type: "ADD_TOAST"; payload: ToastType }
  | { type: "REMOVE_TOAST"; payload: string };

const listeners: Array<(state: ToastType[]) => void> = [];

let memoryToast = [] as ToastType[];

const reducer = (toasts: ToastType[], action: Action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return [...toasts, { ...action.payload }];
    case "REMOVE_TOAST":
      return toasts.filter((toast) => toast.id !== action.payload);
  }
};

export const dispatch = (action: Action) => {
  memoryToast = reducer(memoryToast, action);
  listeners.forEach((listener) => {
    listener(memoryToast);
  });
};

const useStore = () => {
  const [toasts, setToasts] = useState<ToastType[]>(memoryToast);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [toasts]);

  return {
    toasts,
  };
};

export default useStore;
