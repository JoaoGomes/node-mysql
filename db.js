const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost', 
    port: '3306',
	user: 'root',
	password: 'niphohost',
    database: 'sitepoint',
});

con.connect((err) => {
	if(err){
		console.log('Erro ao conectar ao banco de dados');
		return;
	}
	console.log('Conexão estabelecida');
});

module.exports = {
	async selectAuthors(req, res){
        con.query('SELECT * FROM authors', (err, results) => {
            if(err) throw err;
            results.forEach( (row)=> {
                console.log(`${row.name} lives in ${row.city}`);
            });
            res.json(results);
        })
	},

    async insertAuthors(req, res){
        const author = req.body;
        con.query('INSERT INTO authors SET ?', author, (err, results) => {
            if(err) throw err;
            console.log('Last insert ID', results.insertId);
            res.json(results);
        });
    },

    async updateAuthor(req, res){
        const id = req.params.id;
        const {city} = req.body;
        con.query('UPDATE authors SET city = ? where ID = ?', [city, id], (err, results) => {
            if(err) throw err;
            console.log(`Changed ${results.changedRows} row(s)`);
            res.json(results);
        })
    },

    async deleteAuthor(req,res){
        const id = req.params.id;
        con.query('DELETE FROM authors WHERE id = ?', id, (err, results) => {
            if(err) throw err;
            console.log(`Deleted ${results.affectedRows} row(s)`);
            res.json(results);
        })
    }
}
