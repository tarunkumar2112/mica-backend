const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Custom API is running!');
});

// Import routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
