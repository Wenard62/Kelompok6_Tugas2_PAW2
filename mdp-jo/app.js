var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require("express-ejs-layouts");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/aboutus');
var menuRouter = require('./routes/menu');
var reservasiRouter = require('./routes/reservasi');
var contactRouter = require('./routes/contact');
var namaRouter = require('./routes/nama');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aboutus', aboutRouter);
app.use('/nama', namaRouter);
app.use('/contact', contactRouter);
app.use('/menu', menuRouter);
app.use('/reservasi', reservasiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
