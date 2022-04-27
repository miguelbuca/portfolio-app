import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import Portfolio from '../src/components/organisms/portfolio';
import Skills from '../src/components/organisms/skills';
import Welcome from '../src/components/organisms/welcome';
import Worked from '../src/components/organisms/worked';
import Main from '../src/components/templates/main';
import prismicClient from '../src/services/prismic';

const Home: NextPage<any> = ({ worked, project }) => {
  return (
    <Main>
      <Welcome />
      <Skills />
      <Worked data={worked} />
      <Portfolio data={project} />
    </Main>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const client = prismicClient()

  const linkCkeck = (key: string, obj: any) =>
    Object.keys(obj[key]).includes("url") && obj[key].url;

  const worked = (
    await client.getByType("job", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    })
  ).results.map(({ data }: any) => {
    return {
      ...data,
      link: linkCkeck("link", data),
      image: linkCkeck("image", data),
    } as Job;
  });

  const project = (
    await client.getByType("portfolio-project", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    })
  ).results.map(({ data }: any) => {
    return {
      ...data,
      link: linkCkeck("link", data),
      image: linkCkeck("image", data),
      github: linkCkeck("github", data),
      figma: linkCkeck("figma", data),
    } as Job;
  });

  return {
    props: {
      worked,
      project,
    },
    //revalidate: 86400,
  };
};