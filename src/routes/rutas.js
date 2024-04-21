import { Router } from "express"
import { buildPDF } from "../libs/manejoPDF.js";

const router = Router()

router.get("/invoice", (req, res) => {
    
    const stream = res.writeHead(200, {
        "Content-type": "application/pdf",
        "Content-Disposition": "attachment; filename=documento.pdf",
    })

    buildPDF((data) => stream.write(data), 
    () => stream.end()
    );
    
    res.send("Invoice");
})

export default router;