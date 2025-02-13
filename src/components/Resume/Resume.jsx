import React from "react";
import pdf from "../../assets/pdf/Resume_DaiDong.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div style={{ justifyContent: "center", position: "relative" }}>
      <iframe src={pdf} width="70%" height="700px" />
    </div>
  );
}

export default Resume;
