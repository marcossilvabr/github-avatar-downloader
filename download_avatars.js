var request = require('request');
var fs = require('fs');
var https = require('https');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "marcossilvabr";
var GITHUB_TOKEN = "c261192bad9f2a50e222fb3644d7cc39de993b33";

function getRepoContributors(repoOwner, repoName, cb) {
  var urlGit = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var config = {
    url: urlGit,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    },
  };

  request(config, function(err, response, body) {
    if (err) throw err;
      console.log('Response Status Code', response.statusCode)
      console.log('Response Message: ', response.statusMessage);
      console.log('Content Type: ', response.headers['content-type']);
  });
};

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});