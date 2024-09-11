const aeroporto = require("../models/aeroporto_model.js")

const store = async (req, res) => {
    await aeroporto.create(req.body)
    res.json() 
}

const index = async (req, res) => {
    const content = await aeroporto.find(req.query).exec();
    res.json(content)
}

const show = async (req, res) => {
    const content = await aeroporto.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    await aeroporto.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = async (req, res) => {
    await aeroporto.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}