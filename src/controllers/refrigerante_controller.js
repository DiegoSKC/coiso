const refrigerante = require("../models/refrigerante_model.js")

const store = async (req, res) => {
    await refrigerante.create(req.body)
    res.json() 
}

const index = async (req, res) => {
    const content = await refrigerante.find(req.query).exec();
    res.json(content)
}

const show = async (req, res) => {
    const content = await refrigerante.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    await refrigerante.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = async (req, res) => {
    await refrigerante.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}