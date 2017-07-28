var myApp = angular.module('myApp');
var MainController = function($location) {
  var vm = this;
  var temp = function(username) {
    $location.path("/user/" + username);
  };
  vm.search = temp;
};

myApp.controller('MainController', MainController);

myApp.component('main', {
  templateUrl: "main.html",
  controller: MainController,
  controllerAs: "vm"
});