"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";

let PDFDownloadLink: any = null;
let PDFDocument: any = null;

if (typeof window !== "undefined") {
  import("@react-pdf/renderer").then((mod) => {
    PDFDownloadLink = mod.PDFDownloadLink;
  });
  import("./PDFCV").then((mod) => {
    PDFDocument = mod.default;
  });
}

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.125rem;
  }
`;

const DownloadCVButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [PDFComponents, setPDFComponents] = useState<{
    PDFDownloadLink: any;
    PDFDocument: any;
  } | null>(null);

  useEffect(() => {
    setIsClient(true);
    Promise.all([
      import("@react-pdf/renderer"),
      import("./PDFCV"),
    ]).then(([pdfRenderer, pdfDoc]) => {
      setPDFComponents({
        PDFDownloadLink: pdfRenderer.PDFDownloadLink,
        PDFDocument: pdfDoc.default,
      });
    });
  }, []);

  if (!isClient || !PDFComponents) {
    return (
      <Button disabled>
        <FontAwesomeIcon icon={faSpinner} spin />
        Loading...
      </Button>
    );
  }

  const { PDFDownloadLink: Link, PDFDocument: Doc } = PDFComponents;

  return (
    <Link
      document={<Doc />}
      fileName="Chiara_Ferrara_CV.pdf"
      className="pdf-download-link"
      style={{ textDecoration: "none" }}
    >
      {({ loading }: { loading: boolean }) => (
        <Button disabled={loading}>
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin />
              Generating PDF...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faFileDownload} />
              Download CV PDF
            </>
          )}
        </Button>
      )}
    </Link>
  );
};

export default DownloadCVButton;
