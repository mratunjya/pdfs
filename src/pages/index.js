import Head from "next/head";
import PDF from "@common/pdf";

export default function Home() {
  return (
    <>
      <Head>
        <title>PDFs</title>
        <meta name="description" content="PDFs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PDF />
    </>
  );
}
