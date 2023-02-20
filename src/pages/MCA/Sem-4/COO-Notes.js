import Head from "next/head";
import PDF from "@common/pdf";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Syllabus = () => {
  const router = useRouter();

  useEffect(() => {
    // localStorage.setItem("auth", true);
    if (router.isReady && !JSON.parse(localStorage.getItem("auth")))
      router.push("/MCA/Sem-4/Syllabus");
  }, [router]);
  return (
    <>
      <Head>
        <title>NIT Raipur MCA Mid Sem Examination of 4th Sem 2023</title>
        <meta
          name="description"
          content="NIT Raipur MCA Mid Sem Examination of 4th Sem 2023"
        />
      </Head>
      <PDF fileUrl="/assets/pdf/COO Notes.pdf" />
    </>
  );
};

export default Syllabus;
