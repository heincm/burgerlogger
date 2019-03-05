const express = require("express");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use this to override the Post method as a Put method with form submission
app.use(methodOverride('_method'));

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
