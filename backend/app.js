require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const app = express();
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.log(error);
  });
app.use(express.json());
app.use(helmet());
app.use(
  (req, res, next) => (
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin'),
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    ),
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    ),
    next()
  )
);
app.use(
  '/assets/images',
  express.static(path.join(__dirname, 'assets/images'))
);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
module.exports = app;
