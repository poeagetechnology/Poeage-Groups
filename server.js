const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let leads = [];

app.post("/api/leads", (req, res) => {
  const lead = req.body;
  leads.push(lead);

  console.log("New Lead:", lead);

  res.json({ success: true });
});

app.get("/api/leads", (req, res) => {
  res.json(leads);
});

app.listen(5000, () => console.log("Server running on 5000"));