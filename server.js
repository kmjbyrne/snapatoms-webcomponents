const express = require('express');
const app = express();
app.use(express.static('demo'));
app.use(express.static('dist'));
console.log(process.env.PORT);
app.listen(8888);