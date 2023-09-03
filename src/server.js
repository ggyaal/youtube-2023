import express from "express";
import rootRouter from "./routers/rootRouter";

const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views/");

app.use("/", rootRouter);

app.listen(PORT, () => console.log("✅  Server Ready!"));