const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use('/', routes);

// MongoDB connection
const mongoURL = '***************************************************************************************************';
mongoose.connect(mongoURL, {
  dbName: 'cardb'
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
