import type { GetStaticProps, NextPage } from 'next'
import Skills from '../src/components/organisms/welcome copy';
import Welcome from '../src/components/organisms/welcome';
import Main from '../src/components/templates/main';
import prismicClient from '../src/services/prismic';

const Home: NextPage<any> = ({ ...props }) => {
  return (
    <Main>
      <>
        <Welcome userPhoto={props.app[0]?.data?.userPhoto} />
        <Skills/>
      </>
    </Main>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  /*const projectResponse = await prismic.query(
    [prismic.predicate.at("document.type", "portfolio-custom-type")],
    { orderings: "[document.createdAt desc]" }
  );*/

  //console.log(await prismicClient().getByType("portfolio-custom-type"));

  //console.log(await prismicClient().get());

  return {
    props: {
      app: (await prismicClient().get()).results,
    },
    //revalidate: 86400,
  };
};