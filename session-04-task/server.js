const express = require("express");
const productRoutes = require("./routers/productRoutes");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", productRoutes);

app.listen(port, () => {
    console.log("server is running");
});
