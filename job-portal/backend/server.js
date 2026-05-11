const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
