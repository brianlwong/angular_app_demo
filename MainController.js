(function() {
  var myApp = angular.module('myApp');

  var MainController = function($scope, $location) {

    $scope.search = function(username) {
      $location.path("/user/" + username);
    };
  };

  myApp.controller('MainController', MainController);
}());