import Head from "next/head";
import PDF from "@common/pdf";
import { pdfPageTitle } from "./meta/PdfPageTitle";

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
      <PDF
        fileUrl="/assets/pdf/MCA IV Sem Syllabus.pdf"
        pdfPageTitle={pdfPageTitle}
      />
    </>
  );
};

export default Syllabus;
