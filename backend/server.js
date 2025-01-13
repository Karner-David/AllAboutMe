const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Import path for serving static files
const mediaRoutes = require('./routes/mediaRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

// API routes
app.use('/api/media', mediaRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
