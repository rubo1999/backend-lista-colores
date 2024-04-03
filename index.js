const express = require("express");
const servidor = express();
let colores = require("./datos/colores.json");//hace automáticamente el PARSE

servidor.use(express.static("./lista_colores"));

servidor.get("/colores", (peticion, respuesta) => {
    respuesta.json(colores);
});

servidor.use((peticion, respuesta) => {
    respuesta.status(404);
    respuesta.send("<h1>404 not found </h1>")
});

servidor.listen(process.env.PORT || 4000);