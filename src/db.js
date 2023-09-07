import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/ggyaaltube");

const db = mongoose.connection;

db.on("error", (e) => console.log("❌ DB ERROR: ", e));
db.once("open", () => console.log("✅ db Ready!"));