const express = require("express");
const {PORT} = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();

app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
