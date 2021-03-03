import React, { useRef, useState } from "react";
import { Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfLoader() {
  return (
    <Segment className="pdf-renderer-loading">
      <Dimmer active inverted>
        <Loader inverted content="Loading booklet" />
      </Dimmer>
    </Segment>
  );
}

export default function PdfRenderer({
  file,
  className,
  willGoNextPage,
  willGoPreviousPage,
}) {
  const documentWrapperRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [canDisplayButton, setCanDisplayButton] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber === 1) {
      return;
    }
    let pageChange = -1;

    if (willGoPreviousPage) {
      pageChange = willGoPreviousPage(pageNumber) ?? pageChange;
    }

    changePage(pageChange);
  }

  function nextPage() {
    if (pageNumber === numPages) {
      return;
    }
    let pageChange = 1;

    if (willGoNextPage) {
      pageChange = willGoNextPage(pageNumber) ?? pageChange;
    }

    changePage(pageChange);
  }

  const width = documentWrapperRef.current?.getBoundingClientRect().width;

  function calculateWidth() {
    if (!width) {
      return;
    }
    return width > 768 ? width * 0.5 : width * 0.7;
  }

  return (
    <div className={`pdf-renderer ${className}`} ref={documentWrapperRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-renderer-document"
        onMouseEnter={() => setCanDisplayButton(true)}
        onMouseLeave={() => {
          setCanDisplayButton(false);
        }}
        loading={PdfLoader}
      >
        <Page pageNumber={pageNumber} loading="" width={calculateWidth()}>
          {canDisplayButton && (
            <>
              <Button
                icon="left chevron"
                onClick={previousPage}
                className="pdf-renderer-left-button"
                size="small"
                basic
                inverted
              />
              <Button
                icon="right chevron"
                onClick={nextPage}
                className="pdf-renderer-right-button"
                size="small"
                basic
                inverted
              />
            </>
          )}
        </Page>
      </Document>
    </div>
  );
}
