angular.module("app").controller("ctrl",function($scope,srvc, $stateParams){
	$scope.test = "hey momma";
	var id = $stateParams.id;
	console.log(id);
});
