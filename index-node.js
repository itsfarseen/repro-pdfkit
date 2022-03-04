import PDFDocument from "pdfkit";
import fs from "fs"

let doc = new PDFDocument({ size: 'A4' });
doc.pipe(fs.createWriteStream('test.pdf'));

doc.registerFont("MyFont", fs.readFileSync("./DejaVuSans.ttf"))
doc.fontSize(18);
doc.font("MyFont").text("Hello World");

doc.end();
