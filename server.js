
const express = require('express');
const cors = require('cors');
require('./db_connect');

const app = express();
const PORT = 3000;

app.use(cors());
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
    console.log(`Server running on http://localhost:${PORT}`);
});
