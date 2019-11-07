const Usuario = require("../model/Usuario");
module.exports = {
  async store(req, res) {
    const usuario = await Usuario.create(req.body);
    return res.json(usuario);
  },
  async list(req, res) {
    const usuarios = await Usuario.find({});
    return res.json(usuarios);
  },
  async index(req, res) {
    const usuario = await Usuario.findOne({ _id: req.params.id });
    return res.json(usuario);
  },
  async update(req, res) {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(usuario);
  },
  async destroy(req, res) {
    await Usuario.deleteOne({ _id: req.params.id });
    return res.json({
      mensagem: "Exclusão realizada com sucesso!"
    });
  }
};
