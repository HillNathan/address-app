
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a GET route
require("./routes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


