const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./modules/router");

const exphbs = require("express-handlebars");

// hbs
const hbs = exphbs.create({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views/partials")
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(PORT, "0.0.0.0", () => console.log(`Backend running on port ${PORT}`));
