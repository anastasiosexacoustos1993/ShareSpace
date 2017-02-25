angular.module('myApp')

 // Register controller
.controller('RegisterCtrl', function($scope, AuthService, $state) {
  	$scope.user = {
    	username: '',
    	password: ''
  	};

  	$scope.signup = function() {
    	AuthService.register($scope.user).then(function(msg) {
      	$state.go('outside.login');
      	alert("Register Success!");
    	}, function(errMsg) {
      	alert("Register Failed!");
    	});
  	};
});
