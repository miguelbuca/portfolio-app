import { Client } from "@prismicio/client";

const prismicClient = () => {
  const prismic = new Client(`${process.env.PRISMIC_API_ENDPOINT}`, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return prismic;
};

export default prismicClient;
