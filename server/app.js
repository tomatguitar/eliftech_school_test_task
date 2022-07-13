const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const shopsRouter = require('./routes/shopsRoutes');
const ordersRouter = require('./routes/ordersRoutes');

// Start express app
const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES
// Implement CORS
// app.use(cors());
// app.options('*', cors());
app.use(cors({ origin: 'https://webdelivery.herokuapp.com'}));

// Serving static files
app.use(express.static(path.join(__dirname, './client/build')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


// ROUTES
app.use('/api/shops', shopsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
