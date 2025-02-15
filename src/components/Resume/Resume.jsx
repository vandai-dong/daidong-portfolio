import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../assets/pdf/Resume_DaiDong.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "100vh", // Full viewport height
        marginTop: "5%",
        marginBottom: "7%",
      }}
    >
      <iframe src={pdf} width="70%" height="700px" />
    </div>
  );
}

export default Resume;
