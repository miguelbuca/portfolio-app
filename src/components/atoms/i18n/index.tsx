import { NextPage } from 'next';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {

}

export const I18n: NextPage<Props> = ({ ...args }) => {
  return (
    <button
      title="Change language"
      className="fixed rounded-full h-[50px] w-[50px] z-10 bg-white text-black flex  items-center justify-center lg:right-[8rem] md:right-[4rem] sm:right-[2rem] bottom-[2rem]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 48 48"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06h5.86v-4.01h-14v-4h-4v4h-14v3.98h22.34c-1.35 3.86-3.46 7.52-6.34 10.72-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12l-10.17 10.05 2.83 2.83 10-10 6.22 6.22 1.52-4.07zm11.26-10.15h-4l-9 24h4l2.25-6h9.5l2.25 6h4l-9-24zm-5.25 14l3.25-8.67 3.25 8.67h-6.5z" />
      </svg>
    </button>
  );
};
