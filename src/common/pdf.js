import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  thumbnailPlugin,
  RenderCurrentPageLabel,
  RenderCurrentPageLabelProps,
} from "@react-pdf-viewer/thumbnail";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import styled from "styled-components";

const PDFviewer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  background-color: #eaeaea;
`;

const PDFpage = styled.div`
  height: 100%;
  width: 70%;
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  width: 30%;
  background-color: #eaeaea;

  .rpv-thumbnail__list {
    gap: 20px;
    padding: 20px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
  }

  .rpv-thumbnail__item {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    padding: 0px;
  }
`;

const PDFthumbnailLabel = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  color: #000000;
  display: flex;
  font-size: 12px;
  justify-content: center;
  padding: 0 8px;
  min-width: 24px;
  min-height: 24px;
`;

const PDF = () => {
  const renderCurrentPageLabel = (RenderCurrentPageLabelProps) => (
    <PDFthumbnailLabel>
      {RenderCurrentPageLabelProps.pageIndex + 1}
      {` `}
      {RenderCurrentPageLabelProps.pageLabel !==
        `${RenderCurrentPageLabelProps.pageIndex + 1}` &&
        `(${RenderCurrentPageLabelProps.pageLabel})`}
    </PDFthumbnailLabel>
  );
  const thumbnailPluginInstance = thumbnailPlugin({
    renderCurrentPageLabel,
  });
  const { Thumbnails } = thumbnailPluginInstance;

  const fileUrl =
    "/assets/pdf/Operating System Concepts by Abraham Silberschatz, Peter B. Galvin, Greg Gagne.pdf";

  return (
    <main>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <PDFviewer>
          <ThumbnailsWrapper>
            <Thumbnails />
          </ThumbnailsWrapper>
          <PDFpage>
            <Viewer
              fileUrl={fileUrl}
              plugins={[thumbnailPluginInstance]}
              withCredentials={true}
            />
          </PDFpage>
        </PDFviewer>
      </Worker>
    </main>
  );
};

export default PDF;
