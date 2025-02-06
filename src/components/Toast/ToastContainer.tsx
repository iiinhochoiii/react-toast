import React, { useRef } from "react";

import ReactDOM from "react-dom";

interface PortalProps {
  createElement: React.ReactNode;
}

const Container = ({ createElement }: PortalProps) => {
  const elementRef = useRef(document.body);

  if (typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(createElement, elementRef.current);
};

export default Container;
