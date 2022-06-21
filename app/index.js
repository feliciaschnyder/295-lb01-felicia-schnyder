const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const apprentice = require('./models/model.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.Promise = global.Promise;
const connectionUrl = "mongodb://localhost/repair";
mongoose.connect(connectionUrl, {});

//import routes
const routes = require('./routes/routes.js');

//register the route
routes(app);

app.listen(port, () => {
    console.log(`RESTful API server running on ${port}`);
});
