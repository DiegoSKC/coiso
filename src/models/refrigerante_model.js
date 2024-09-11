const db = require("../db.js");

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: false
  }
});

const refrigerante = db.model("refrigerante", refrigeranteSchema);

module.exports = refrigerante;