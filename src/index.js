import express from "express"
import indexRoutes from "./routes/rutas.js"

const app = express();
const puerto = 3000;

app.use(indexRoutes);

app.listen(puerto, () => {
    console.log("Servidor activo en el puerto 3000");
    console.log(`http://localhost:${puerto}/`);
})