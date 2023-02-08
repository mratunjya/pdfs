import Head from "next/head";
import PDF from "@common/pdf";
import { pdfPageTitle } from "@meta/MCA/Sem-4/Mid-Sem/pdfPageTitle";

const Syllabus = () => {
  return (
    <>
      <Head>
        <title>NIT Raipur MCA Mid Sem Examination of 4th Sem 2023</title>
        <meta
          name="description"
          content="NIT Raipur MCA Mid Sem Examination of 4th Sem 2023"
        />
      </Head>
      <PDF
        fileUrl="/assets/pdf/MCA IV Sem Mid Sem Examination Schedule.pdf"
        pdfPageTitle={pdfPageTitle}
      />
    </>
  );
};

export default Syllabus;
