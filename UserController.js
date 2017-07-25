(function() {
  var myApp = angular.module('myApp');

  var UserController = function($scope, github, $routeParams, $location) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };
    
    var onError = function(response) {
      $scope.error = "Could not fetch the data";
    };

    $scope.repoClick = function() {
      $location.path("/repos/" + $scope.user.login);
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "+name";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  myApp.controller('UserController', UserController);

}());