var app = angular.module('myApp', []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('myCtrl', function($scope, $http, $http) {

    $scope.myStocks = []

    $scope.myStock1 = {
    	'Symbol': 'APLE',
    	'LastPrice': 89,
    	'High': 90,
    	'Low': 88
    }

    $scope.findStock = function(){
    	$http({
	    	method: "GET",
	    	url: "http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json",
	    	headers: {
	    	'Content-Type': 'application/jsonp'
	  		},
	  		params: { input: $scope.searchStock}
	    }).then(function Success(response) {
	    	console.log("Success",response);
	    	$scope.searchResults = response.data;
	    }, function Error(response){
	    	console.log("Error", response);
	    });
	    $scope.searchStock = '';
    }

    $scope.addStock = function(index) {
    	console.log("Clicked", $scope.searchResults[index].Name);
    	$scope.getQuote($scope.searchResults[index].Symbol);
    }

    $scope.getQuote = function(stock) {
    	$http({
    		method: "GET",
    		url: "http://dev.markitondemand.com/Api/v2/Quote/json",
    		headers: {
	    	'Content-Type': 'application/jsonp'
	  		},
	  		params: { symbol: stock}
    	}).then(function Success(response) {
    		console.log(response.data);
    		$scope.myStocks.push(response.data);
    		$scope.searchResults = [];
    	}, function Error(response){
    		console.log("Couldn't get Quote!")
    	})
    }
});
