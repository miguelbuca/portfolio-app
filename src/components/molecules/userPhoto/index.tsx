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
      className="relative hover:after:w-full cursor-pointer flex rounded-[50%] overflow-hidden justify-center items-center h-[315px] w-[315px] before:content-[''] before:absolute before:h-[315px] before:w-[315px] before:bg-[rgba(255,255,255,.06)] before:rounded-[50%]
    after:content-[''] after:animate-spin-rotate after:absolute after:transition-all after:h-[315px] after:bg-gradient-to-bl from-violet-800 to-yellow-400 after:w-[100px]
    "
    >
      <div className="relative bg-[#141414] h-[300px] z-10 rounded-[50%] border-[18px] border-[#141414] w-[300px]">
        <Image
          alt="userPhoto"
          src={url}
          className="w-full m-[.5rem] rounded-[50%] h-full"
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
