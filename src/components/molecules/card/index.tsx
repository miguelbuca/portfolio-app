import { NextPage } from "next";
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
        <img
          alt="cardPhoto"
          src={details.job?.image}
          className="h-[100px]"
        />
      </div>
      <div className="flex flex-row">
        <strong className="mr-1">
          <a href={details.job?.link} className="underline">
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
    <div>ola</div>
  );
};
