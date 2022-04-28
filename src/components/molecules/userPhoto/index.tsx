import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { HTMLAttributes } from "react";
import prismicClient from "../../../services/prismic";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  url: string;
}

export const UserPhoto: NextPage<Props, any> = ({
  className,
  url,
  ...args
}) => {
  return (
    <div
      {...args}
      className="before:box-content('') before:rounded-2xl before:bottom-[60%] before:right-[30%] before:absolute before:border-[rgba(255,255,255,.06)] before:border-solid before:border-[.3rem] before:-z-10 before:h-[200px] before:w-[200px]"
    >
      <div className="p-[4rem]">
        <Image
          alt="userPhoto"
          src={url}
          className="w-full h-full"
          layout="fill"
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  /*const projectResponse = await prismic.query(
    [prismic.predicate.at("document.type", "portfolio-custom-type")],
    { orderings: "[document.createdAt desc]" }
  );*/

  //console.log(await prismicClient().getByType("portfolio-custom-type"));

  console.log(await prismicClient().get());

  return {
    props: {},
    //revalidate: 86400,
  };
};
