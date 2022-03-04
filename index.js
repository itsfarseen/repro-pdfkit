import PDFDocument from "pdfkit";
import blobStream from "blob-stream";
import fs from "fs"

let doc = new PDFDocument({ size: 'A4' });
let stream = doc.pipe(blobStream());
let iframe = document.getElementById("iframe");

doc.registerFont("MyFont", fs.readFileSync("./DejaVuSans.ttf"))
doc.fontSize(18);
doc.font("MyFont").text("Hello World");

doc.end();
stream.on("finish", () => {
  iframe.src = stream.toBlobURL("application/pdf");
});
