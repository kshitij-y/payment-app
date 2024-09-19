const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index")
app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000 ;
console.log("Server running on " + port);
app.listen(port)
