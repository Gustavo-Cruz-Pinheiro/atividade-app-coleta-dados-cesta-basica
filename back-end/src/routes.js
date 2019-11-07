const express = require("express");
const routes = express.Router();
const UsuarioController = require("./controller/UsuarioController");

routes.post("/usuario", UsuarioController.store);
routes.get("/usuario", UsuarioController.list);
routes.get("/usuario/:id", UsuarioController.index);
routes.put("/usuario/:id", UsuarioController.update);
routes.delete("/usuario/:id", UsuarioController.destroy);

module.exports = routes;
