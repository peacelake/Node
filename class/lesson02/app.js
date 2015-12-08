var express =  require('express');
var utility = require('utility');
var app = express();
app.get('/', function(req, res) {
	var q =  req.query.q;
	if(q === undefined) {
		res.send('need query string q\r\n');
	}
	else	{
		var md5 = utility.md5(q+'\r\n');
                res.send(md5);
	}
});

app.listen(3000, function(req, res) {
	console.log('app is running at port 3000');
});

