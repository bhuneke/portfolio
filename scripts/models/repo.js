(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback){
    $.ajax('https://api.github.com/user/repos', {
      method: 'GET',
      data: {
        access_token: process.env.GITHUB_TOKEN
      },
      success: function (response) {
        response.forEach(function(ele) {
          reposObj.allRepos.push(ele);
        });
        callback();
        console.log(response);
      },
      error: function(response) {
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
}(window));
