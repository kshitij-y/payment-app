const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: ["http://paytm-project-app-ksh.vercel.app"],
    methods: ["POST", "GET", "PUT", "UPDATE"],
    credentials: true
}));
app.use(express.json());

const mainRouter = require("./routes/index")
app.use("/api/v1", mainRouter);


app.listen(3000)
