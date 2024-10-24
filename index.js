const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('API is Running, Please add some Endpoints to Test, ALl the ');
});

// Import routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('This is the Backend for the Mica-Platform!!')
});
