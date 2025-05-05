const express = require('express');
const { checkCode, resetGame } = require('./gameLogic');
const app = express();

const PORT = 3000;
app.use(express.static('public'));
app.use(express.json());

app.post('/disarm-code', (req, res) => {
  console.log('Request Body:', req.body);
  const { code } = req.body;
  const result = checkCode(code); 
  console.log('Response:', result);
  res.json(result);
});

app.post('/reset', (req, res) => {
  resetGame(); 
  res.json({ message: 'Game has been reset.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
