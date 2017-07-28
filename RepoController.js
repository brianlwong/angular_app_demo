var myApp = angular.module("myApp");

var RepoController = function($routeParams, github) {
  var rc = this;
  var onRepo = function(data) {
    rc.repos = data;
  };

  var onError = function(reason) {
    rc.error = reason;
  };

  var onUser = function(user) {
    github.getRepos(user)
      .then(onRepo, onError);
  };

  rc.username = $routeParams.username;
  github.getUser(rc.username)
    .then(onUser, onError);
};

myApp.controller("RepoController", RepoController);

myApp.component('repo', {
  templateUrl: "repoTable.html",
  controller: RepoController,
  controllerAs: "rc"
});