const express = require('express');
const routes = require('./app/routes')
const { PORT } = require('./config');

const app = express();
app.use(express.json())
app.use(routes);


app.listen(PORT, () => {
    console.log("vaina port 3000");
});