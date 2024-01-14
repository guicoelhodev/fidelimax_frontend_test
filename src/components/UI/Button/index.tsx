import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FC<TButton> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        "mt-4 py-3 px-16 font-bold rounded-full bg-blue-dark text-white",
        buttonProps.className
      )}
    >
      {children}
    </button>
  );
};
