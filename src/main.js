const express = require("express")
const app = express()
const port = 5000

const aeroporto_router = require("./routers/aeroporto_router.js")
const caneta_router = require("./routers/caneta_router.js")
const moto_router = require("./routers/moto_router.js")
const refrigerante_router = require("./routers/refrigerante_router.js")

app.use(express.json())

app.use("/aeroporto", aeroporto_router)
app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/refrigerante", refrigerante_router)

app.listen(port, () => console.log("Servidor escutando na porta " + port))