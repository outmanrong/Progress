var request = require('request'),
	cheerio = require('cheerio');

request('https://www.baidu.com',function(error,response,body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		console.log($('head'));
	}
})

