const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🏸 Badminton Group App</h1>
    <p>DevOps Portfolio Project</p>
    <p>Status: Running from Node.js</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
