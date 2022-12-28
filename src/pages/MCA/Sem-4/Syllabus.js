import Head from "next/head";
import PDF from "@common/pdf";

const Syllabus = () => {
  return (
    <>
      <Head>
        <title>NIT Raipur MCA Time Table MCA 4th Sem 2023</title>
        <meta
          name="description"
          content="NIT Raipur MCA Time Table MCA 4th Sem 2023"
        />
      </Head>
      <PDF fileUrl="/assets/pdf/MCA IV Sem Syllabus.pdf" />
    </>
  );
};

export default Syllabus;
