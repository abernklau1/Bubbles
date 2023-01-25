import express from "express";

const PORT = process.env.PORT || 5001;

const app = express();

app.get("/api", (req, res) => {
  res.json(JSON.stringify({ message: "Hello from the server!" }));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
