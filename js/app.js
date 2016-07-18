angular.module("app", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "home/homeTmpl.html",
				controller: "homeCtrl"
			})
			.state("settings",{
				url: "/settings",
				templateUrl: "settings/settingsTmpl.html",
				controller: "settingsCtrl"
			})
			.state("products",{
				url: "/products/:id",
				templateUrl: "products/productTmpl.html",
				controller: "productsCtrl"
			});

		$urlRouterProvider
			.otherwise("/");
});
