import express from "express";
import { read } from "./crud/read.js";
import { create } from "./crud/create.js";
import { show } from "./crud/show.js";
import { update } from "./crud/update.js";
import { destroy } from "./crud/delete.js";
const app = express();
const port = 3000;

app.use(express.json())


app.get("/", async (req, res) => {
  res.send("Bienvenido")
});

//registro o crearción de usuarios
app.post("/usuarios",async (req, res, next) => {
  const usuario = req.body
  const [estado, message, result] = await create(usuario.username, usuario.email, usuario.password)
  const response = {
    "status:": estado,
    "message": message,
    "data": result,
  }
  res.json(response)
});

//listar usuarios
app.get("/usuarios", async (req, res) => {
  let result = await read();
  res.json(result);
});

//ver irnformación de un solo usuario por id
app.get("/usuarios/:id", async (req, res) => {
  let id = req.params.id;
  let result = await show(id);
  res.json(result[0]);
});

//actualizar información de usuario
app.put("/usuarios/:id", async (req, res) => {
  let id = req.params.id;
  let {username, email} = req.body;
  let result = await update(id, username, email);
  res.json(result);
});

app.delete("/usuarios/:id", async (req, res) => {
  let id = req.params.id;
  let result = await destroy(id);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Mi app funciona en el puerto ${port}`);
});

