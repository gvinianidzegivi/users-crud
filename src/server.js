require("./database/connection");
const express = require("express");
const router = require("./routes");

const PORT = 8081;

const app = express();

app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
