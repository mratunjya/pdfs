import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) router.push("/MCA/Sem-4/Syllabus");
  }, [router]);

  return (
    <>
      <Head>
        <title>PDFs</title>
        <meta name="description" content="PDFs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
