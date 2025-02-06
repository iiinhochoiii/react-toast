export interface ToastType {
  id?: string;
  message?: string;
  type?: "success" | "error" | "default";
  duration?: number;
  isClosable?: boolean;
  variants?: "filled" | "outlined";
  render?: (props: Omit<ToastType, "render">) => React.ReactNode;
  position?:
    | "top"
    | "top-right"
    | "top-left"
    | "bottom"
    | "bottom-right"
    | "bottom-left";
  transition?: "bounce" | "slide" | "fade";
}
