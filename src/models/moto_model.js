const db = require("../db.js");

const Schema = db.Schema;

const motoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: false
  }
});

const moto = db.model("moto", motoSchema);

module.exports = moto;