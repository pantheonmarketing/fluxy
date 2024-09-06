const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// Use the routes module
app.use('/', routes);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});

// Add this to catch any unhandled errors
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
