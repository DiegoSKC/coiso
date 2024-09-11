const caneta = require("../models/caneta_model.js")

const store = async (req, res) => {
    await caneta.create(req.body)
    res.json() 
}

const index = async (req, res) => {
    const content = await caneta.find(req.query).exec();
    res.json(content)
}

const show = async (req, res) => {
    const content = await caneta.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    await caneta.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = async (req, res) => {
    await caneta.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}