import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ralphiz.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Ralph Cacho</h1>

        <p className="mt-3 text-2xl">
          Software Engineer @ <a href="https://www.tara.com">Tara AI</a>
        </p>
      </main>
    </div>
  );
};

export default Home;
