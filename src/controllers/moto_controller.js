const moto = require("../models/moto_model.js")

const store = async (req, res) => {
    await moto.create(req.body)
    res.json() 
}

const index = async (req, res) => {
    const content = await moto.find(req.query).exec();
    res.json(content)
}

const show = async (req, res) => {
    const content = await moto.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    await moto.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = async (req, res) => {
    await moto.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}