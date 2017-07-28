var myApp = angular.module('myApp');

var UserController = function(github, $routeParams, $location) {

  var uc = this;
  var onUserComplete = function(data) {
    uc.user = data;
    github.getRepos(uc.user).then(onRepos, onError);
  };

  var onRepos = function(data) {
    uc.repos = data;
  };

  var onError = function(response) {
    uc.error = "Could not fetch the data";
  };

  uc.repoClick = function() {
    $location.path("/repos/" + uc.user.login);
  };
  uc.username = $routeParams.username;
  uc.repoSortOrder = "+name";
  github.getUser(uc.username).then(onUserComplete, onError);
};

myApp.controller('UserController', UserController);

myApp.component('user', {
  templateUrl: "card.html",
  controller: UserController,
  controllerAs: "uc"
});