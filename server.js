const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "TM_Main.html"));
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(__dirname, "previous_cars.html"));
});

app.get("/avira2", (req, res) => {
  res.sendFile(path.join(__dirname, "Avira_2.html"));
});

app.get("/alumni", (req, res) => {
  res.sendFile(path.join(__dirname, "alumni-hall-of-fame.html"));
});

app.get("/uptime", (req, res) => {
  res.json({ status: "Website is running ✅" });
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});