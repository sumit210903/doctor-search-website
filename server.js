const express = require('express');
const cors = require('cors');
require('./db_connect');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow specific frontend origins
app.use(cors({
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'https://sumit210903.github.io'], // Add all allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('CareRadar Backend is running ✅');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/contact', require('./routes/contact'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

