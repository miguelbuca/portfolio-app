import { NextPage } from "next";
import Link from "next/link";
import { HTMLAttributes } from "react";

export interface Details {
  job?: Job;
  project?: Project;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: "Job" | "Project";
  details: Details;
}

export const Card: NextPage<Props, any> = ({ variant, details, ...args }) => {
  return variant === "Job" ? (
    <div {...args} className="flex flex-col justify-center items-center">
      <div className="mb-2">
        <img alt="cardPhoto" src={details.job?.image} className="h-[100px]" />
      </div>
      <div className="flex flex-row">
        <strong className="mr-1">
          <a href={details.job?.link} target={'_blank'} className="underline">
            {details.job?.name}
          </a>
        </strong>
        <span className="text-gray-200 text-[11pt]">
          {details.job?.description}
        </span>
      </div>
      <div>
        <span className="text-blue-200 capitalize text-[11pt]">
          {details.job?.title}
        </span>
      </div>
      <div className="flex flex-row">
        <svg
          className="mr-1 fill-[rgba(255,255,255,.4)]"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          x="0px"
          y="0px"
          viewBox="0 0 297 297"
          xmlSpace="preserve"
        >
          <g>
            <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645   c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645   C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892   c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />
            <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614   c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901   c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104   C179.265,127.948,165.464,141.901,148.5,141.901z" />
          </g>
        </svg>
        <small className="text-[rgba(255,255,255,.4)]">
          {details.job?.country}
        </small>
      </div>
    </div>
  ) : (
    <div className="flex-1 rounded-2xl bg-[rgba(255,255,255,.06)] flex flex-col p-[.3rem] min-h-[280px]">
      <div className="flex-1 p-0 rounded-2xl cursor-pointer relative">
        {details.project?.website ? (
          <Link href={"/projects/" + details.project.uuid}>
            <a>
              <img
                className="w-full h-full rounded-2xl"
                src={details.project?.preview}
                alt="preview"
              />
              <span className="absolute overflow-hidden flex flex-row items-center h-[30px] w-[30px] hover:transition-all hover:w-[70px] rounded-[4px] bg-white p-[.3rem_.5rem] text-[10pt] text-black top-[1rem] right-[1rem]">
                <span>
                  <svg
                    className="fill-[rgba(0,0,0,.8)] mr-[.5rem]"
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.6 122.88"
                    x="0px"
                    y="0px"
                  >
                    <g>
                      <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"></path>
                    </g>
                  </svg>
                </span>
                <span className="left-[-1rem] text-[rgba(0,0,0,.8)] capitalize">
                  view
                </span>
              </span>
            </a>
          </Link>
        ) : (
          <>
            <img
              className="w-full h-full rounded-2xl"
              src={details.project?.preview}
              alt="preview"
            />
          </>
        )}
      </div>
      <div className="flex p-[1rem] flex-row">
        <div className="flex-1">
          <strong className="mr-1">{details.project?.name}</strong>
        </div>
        <div className="flex flex-row">
          {details.project?.github && (
            <a
              target={"_blank"}
              title="See repository"
              href={details.project.github}
              className="flex flex-row items-center mr-[1rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          )}
          {details.project?.figma && (
            <a
              target={"_blank"}
              title="See UI/UX"
              href={details.project.figma}
              className="flex flex-row items-center underline"
            >
              <svg
                className="ml-1"
                height={20}
                viewBox="0 0 200 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                  fill="#0acf83"
                />
                <path
                  d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                  fill="#a259ff"
                />
                <path
                  d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                  fill="#f24e1e"
                />
                <path
                  d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
                  fill="#ff7262"
                />
                <path
                  d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                  fill="#1abcfe"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
