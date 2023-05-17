const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
//aplicação pelo método get vai buscar a rota 
// localhost:3000/
// Configura o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');
const autores = require('./routes/autores');
const editoras = require('./routes/editoras');


//identificação da rota e da const (require) associada
//localhost:3000/livros
//a rota /livros retorna a lista dos livros cadastrados em formato json
app.use('/livros',livros);
app.use('/autores',autores);
app.use('/editoras',editoras);
app.use(express.json())

app.get('/', (req, res) => {
  res.send('teste Rhaisa!')
})
//exemplo relacionado a filmes localhost:3000/filmes
app.use(express.json()); //começa a receber json
app.post('/filmes',(req,res) => {
//const titulo = req.body.titulo;
//const genero = req.body.genero;
const {titulo, genero} = req.body;
res.send(`Filme: ${titulo} - Genero: ${genero}, recebido`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})