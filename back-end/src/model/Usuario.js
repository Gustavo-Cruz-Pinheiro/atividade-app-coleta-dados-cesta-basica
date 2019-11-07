const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema(
  {
    nome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    senha: {
      type: String,
      require: true
    },
    token: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Usuario", UsuarioSchema);
