import { NextPage } from 'next';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: NextPage<Props> = ({ className, variant, children, ...args }) => {
  return (
    <button
      className={`p-[.7rem_2rem] lg:p-[.7rem_2rem] md:p-[.5rem_1rem] border-solid border hover:opacity-50 transition-all border-red-50 ${className} ${
        variant === "secondary" && "bg-white text-black"
      }`}
      {...args}
    >
      {children}
    </button>
  );
};
