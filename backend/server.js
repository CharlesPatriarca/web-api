const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/servicos', (req, res) => {
  res.json(require('./services.json'));
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
