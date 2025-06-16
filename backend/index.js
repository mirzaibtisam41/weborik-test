require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {authRoutes} = require('./routes');
const {initDB} = require('./db');
const {errorHandler, responseHandler} = require('./middlewares');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(responseHandler);
app.use(errorHandler);

initDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize DB:', err);
    process.exit(1);
  });
