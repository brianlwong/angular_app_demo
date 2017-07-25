(function() {
  var module = angular.module("myApp");
  var RepoController = function($scope, $routeParams, github) {

    var onRepo = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = reason;
    };
    
    var onUser = function(user){
      github.getRepos(user)
        .then(onRepo, onError);
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username)
      .then(onUser, onError);
  };

  module.controller("RepoController", RepoController)
}());