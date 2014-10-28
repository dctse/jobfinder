var express = require('express');
var session = require('express-session');
//var MongoStore = require('connect-mongo')(session);

var SendGrid = require('sendgrid').SendGrid;
var Validator = require('validator').Validator;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//var csrf = require('csurf');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session({secret: 'fengfengcrazy',store: new MongoStore({
//    db : 'sessiontable'}), cookie: {httpOnly: true} }));
app.use(session({secret: 'fengfengcrazy' }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(csrf());
app.use('/', routes);

app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler to console log
sendgrid = {
    send: function(opts, cb) {
        console.log('Email:', opts);
        cb(true, opts);
    }
};
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
