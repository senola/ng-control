angular.module("sn.tests", []);

angular.module("sn.tests").controller("TestPagerCtrl1", function($scope) {
	$scope.totalItems1 = 177;
	$scope.totalItems2 = 33;
	
	$scope.$on("sn.controls.pager:pageIndexChange", function(event) {
		event.stopPropagation();
		console.log(event.targetScope.currentPage);	
	})
});