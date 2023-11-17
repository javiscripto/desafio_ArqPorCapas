import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose"

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import config from "../config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port = config.PORT;








//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.mongoString);

  console.log("********conectado a la base de datos*******")
}


//rutes
import cartRouter from "./routes/carts.router.js";
import productRouter from "./routes/products.router.js"


app.use("/api/carts",cartRouter);
app.use("/api/products",productRouter)



app.get("/",(req, res)=>{
  res.send("ok")
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
