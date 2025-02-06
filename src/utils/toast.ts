import { v4 as uuid } from "uuid";
import { dispatch } from "@/hooks/use-store";
import { ToastType } from "@/types/toast";

const toast = (toast: ToastType) => {
  const id = uuid();

  dispatch({
    type: "ADD_TOAST",
    payload: {
      ...toast,
      id,
    },
  });
};

export default toast;
