const db = require("../db.js");

const Schema = db.Schema;

const canetaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: false
  }
});

const caneta = db.model("caneta", canetaSchema);

module.exports = caneta;