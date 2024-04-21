import PDFDocument from "pdfkit"

export function buildPDF(dataCallback, endCallback){ //Crear PDF
    const doc = new PDFDocument()

    doc.on("data", dataCallback)
    doc.on("end", endCallback)

    doc.fontSize(30).text("Hola mundo");

    doc.font('Helvetica'); // establishes the default font


    doc.end()
}