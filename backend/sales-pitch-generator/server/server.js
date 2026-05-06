require("dotenv").config();

const express = require("express");
const cors = require("cors");

const pitchRoutes = require("./routes/pitchRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pitch", pitchRoutes);

app.get("/", (req, res) => {
  res.send("🚀 SmartPitch AI Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});