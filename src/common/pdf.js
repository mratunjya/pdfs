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
  width: 80%;

  .rpv-core__inner-pages {
    padding: 20px 0;
    background-color: #4c4c4c;
  }

  .rpv-core__inner-page {
    background-color: #4c4c4c;
  }
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  width: 20%;
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

  .rpv-thumbnail__container {
    & > img {
      border-radius: 6px;
    }
  }

  .rpv-thumbnail__item {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 2px;
  }

  .rpv-thumbnail__item--selected {
    background-color: #4c4c4c;
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

const PDF = ({ fileUrl }) => {
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

  return (
    <main>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        {(fileUrl && (
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
        )) || <div>PDF not found</div>}
      </Worker>
    </main>
  );
};

export default PDF;
