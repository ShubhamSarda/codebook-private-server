import express from "express";

const app = express();
const port = 8000;
app.use("/", (req, res) => {
  res.json({message: "Hello"})
})
;
app.listen(8000, () => {
  console.log("Starting...");
});
