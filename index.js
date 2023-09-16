// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/customer/user');
const adminRouter = require('./routes/admin/admin')
const app = express();
const PORT =  3001;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/crud-api';
const cors = require('cors');

(async () => {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  })();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', usersRouter);
app.use('/api/admin',adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
