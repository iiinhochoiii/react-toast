import { SVGProps } from "react";

type ToastCloseIconProps = SVGProps<SVGSVGElement>;

const CloseIcon = (props: ToastCloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.421 7.42167C7.69437 7.1483 8.13758 7.1483 8.41095 7.42167L16.5776 15.5883C16.851 15.8617 16.851 16.3049 16.5776 16.5783C16.3042 16.8517 15.861 16.8517 15.5877 16.5783L7.421 8.41162C7.14763 8.13825 7.14763 7.69504 7.421 7.42167Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5776 7.42167C16.851 7.69504 16.851 8.13825 16.5776 8.41162L8.41095 16.5783C8.13758 16.8517 7.69437 16.8517 7.421 16.5783C7.14763 16.3049 7.14763 15.8617 7.421 15.5883L15.5877 7.42167C15.861 7.1483 16.3042 7.1483 16.5776 7.42167Z"
        fill="white"
      />
    </svg>
  );
};

export default CloseIcon;
