const express = require('express')
const app = express()

// carrega css, js e todas as dependências
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get(['/', '/home'], function (req, res) {
  res.render('pages/index')
})

app.listen(3000, function () {
  console.log("Aplicação rodando na porta 3000 ")
});
