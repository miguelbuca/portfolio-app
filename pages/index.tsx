import type { GetStaticProps, NextPage } from 'next'
import Portfolio from '../src/components/organisms/portfolio';
import Skills from '../src/components/organisms/skills';
import Welcome from '../src/components/organisms/welcome';
import Worked from '../src/components/organisms/worked';
import Main from '../src/components/templates/main';
import prismicClient from '../src/services/prismic';

const Home: NextPage<any> = ({ worked }) => {
  return (
    <Main>
      <Welcome userPhoto={""} />
      <Skills />
      <Worked data={worked} />
      <Portfolio />
    </Main>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const worked = (
    await prismicClient().getByType("job", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    })
  ).results.map(({ data }: any) => {
    return {
      ...data,
      link: data.link.url,
      image: data.image.url,
    } as Job;
  });

  return {
    props: {
      worked
    },
    //revalidate: 86400,
  };
};