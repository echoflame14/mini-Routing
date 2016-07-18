angular.module("app").controller("productsCtrl",function($scope, productService, $stateParams){
	console.log($stateParams);
	console.log("in the products controller");
	if($stateParams.id === "socks"){
		$scope.productData = productService.sockData;
	}
	if($stateParams.id === "shoes"){
		$scope.productData = productService.shoeData;
	}
});
