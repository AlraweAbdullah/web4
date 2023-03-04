import express from "express"
import lidRouter from "./routes/lid.routes"

const app = express()

app.use("/", lidRouter)

app.listen(3000)
