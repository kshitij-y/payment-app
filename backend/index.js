const express = require("express");
const app = express();
const corsOptions = {
  origin: 'https://payment-5vpzmv7lt-kshitij-ys-projects.vercel.app',
  optionsSuccessStatus: 200, // For legacy browser support
};

// Apply CORS middleware with the specified options
app.use(cors(corsOptions)););
app.use(express.json());

const mainRouter = require("./routes/index")
app.use("/api/v1", mainRouter);


app.listen(3000)
