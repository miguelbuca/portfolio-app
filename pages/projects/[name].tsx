import { NextPage } from "next";
import { useRouter } from "next/router";
import Frame from "../../src/components/templates/frame";

const Project: NextPage = () => {
  const { query } = useRouter();
  return <Frame url={`https://${query?.name}.netlify.app/`} />;
};

export default Project;
