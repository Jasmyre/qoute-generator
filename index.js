// Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Define the path to the public directory
const publicPath = path.join(__dirname, 'src');

// Define the route for serving HTML
app.get('/', (req, res) => {
  // Read the contents of the index.html file
  const indexPath = path.join(publicPath, 'index.html');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Serve static files from the public directory
app.use(express.static(publicPath));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});