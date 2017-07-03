var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "marcossilvabr";
var GITHUB_TOKEN = "c261192bad9f2a50e222fb3644d7cc39de993b33";

function getRepoContributors(repoOwner, repoName, cb) {
  var resquestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(resquestURL);
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});