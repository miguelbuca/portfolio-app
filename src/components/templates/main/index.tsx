import { NextPage } from 'next'
import Head from 'next/head';
import Header from '../../organisms/header';

interface Props {
  children: JSX.Element | string;
}

const Main: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Miguel Buca - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="fixed overflow-y-auto left-0 top-0 h-full w-full bg-[#141414] text-white">
        <Header />
        <div className="container md:container md:mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Main