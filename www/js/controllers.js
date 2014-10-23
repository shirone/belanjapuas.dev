angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('homeCtrl', ['$scope', function ($scope) {
	$scope.items = ['Dash'];
	$scope.doRefresh = function(){
		// console.log('active');
		$scope.items.push('Dash '+Math.floor(Math.random() * 1000) + 4);
		$scope.$broadcast('scroll.refreshComplete');
	}
}])
