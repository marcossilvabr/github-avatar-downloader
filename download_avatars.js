require('dotenv').config();

var input = process.argv.slice(2);
var repoOwner = input[0];
var repoName = input[1];

var fs = require("fs");
var request = require('request');


var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

var folderPath = "avatars/";

var mkdir = function () {
  fs.mkdir("avatars");
}
mkdir();

function getRepoContributors(repoOwner, repoName, cb) {

  var requestOptions = {
    url : 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      "User-Agent" : "GitHub Avatar Downloader - Student Project"
    }
  }
  request.get(requestOptions, cb)
}


function downloadImageByUrl(url, filePath){
  request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath));

}

getRepoContributors(repoOwner, repoName, function(err, result) {
  var result = JSON.parse(result.body);
  for (var i = 0; i < result.length; i++) {
    downloadImageByUrl(result[i].avatar_url, folderPath + result[i].login + '.jpg');
  };
});