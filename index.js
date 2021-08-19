const express = require("express");
const mysql = require('mysql');

const app = express();

app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3000, () => {
	console.log("Exemplo de aplicativo ouvindo porta 3000");
});
