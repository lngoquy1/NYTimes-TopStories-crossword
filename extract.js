// need more dynamic programming 
var myArgs = process.argv.slice(2);
 
console.log(myArgs)
for (var k=0; k<(myArgs.length);k++){
	const arg = myArgs[k];
	const path = myArgs[k]+".json";
	var request = require('request');
	request.get({
	  url: "https://api.nytimes.com/svc/topstories/v2/"+path,
	  qs: {
	    'api-key': "1a604124c15c41c287f90ae2c5ff42cf"
	  }, 
	}, extract(path))
}

function extract(path){
	var request = require('request');
	request.get({
	  url: "https://api.nytimes.com/svc/topstories/v2/"+path,
	  qs: {
	    'api-key': "1a604124c15c41c287f90ae2c5ff42cf"
	  }, 
	 }, function(err, response, body) {
 	  body = JSON.parse(body);
	  var result = {};
	  var key = 'Title and abstract';
	  result[key] = [];
	  for (var i=0; i < body["num_results"]; i++){
	  	result[key].push({
	  		url: body["results"][i]["url"],
	  		title: body["results"][i]["title"],
	  		abstract: body['results'][i]["abstract"]});
	  }
	  console.log("completes");
	  var fs = require('fs');
	  var json = JSON.stringify(result);
	  fs.writeFile(path, json, 'utf8', function(err){
	    if(err) throw err;
	  })
    })
}


// var PythonShell = require('python-shell');
// PythonShell.run('summarize.py', function (err) {
//   if (err) throw err;
// });
// console.log("completes");



