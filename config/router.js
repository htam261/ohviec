exports.index = function(req, res) {
 res.sendFile('/partials/index.html');
}

exports.signup	 = function(req, res)	{
  res.render('signup', {
    title: 'signup member'
  });
}

exports.signup_post = function(req, res) {
 	res.send(req.params);
}

exports.main = function (req, res) {
	res.render('index');
}


