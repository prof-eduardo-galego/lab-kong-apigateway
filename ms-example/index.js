const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'sucesso'
  });
});
app.listen(port);

console.log('Aplicação executando na porta ', port);