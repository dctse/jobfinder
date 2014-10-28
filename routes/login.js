router.get('/login', function(req, res) {
    res.render('login')
});
router.post('/login', function (req, res) {
    if (req.body.username === req.body.password) {
        req.session.user = {isAuthenticated:true, username: req.body.username};
        res.redirect('/private');
    } else {
        res.redirect('/login');
    }
});

router.get('/public', function(req, res) {
    res.send('Public access');
});

router.get('/private', function(req, res) {
    res.send('Welcome to Private Access' + req.session.user.username);
});
