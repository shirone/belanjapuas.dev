angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl',['$scope', function($scope) {
		$scope.ImageURI = 'Select Image';
		$scope.picData = "";
    	function UploadPicture(imageURI) {
	      // $scope.ImageURI =  imageURI;
	      $scope.picData = "data:image/jpeg;base64," +imageURI;
	      $scope.picCool = dataURItoBlob("data:image/jpeg;base64," +imageURI);
	      $scope.$apply();
	      alert($scope.picCool);
    	}

    	$scope.ShowPictures = function() {
        	navigator.camera.getPicture(UploadPicture, function(message) {
                alert('get picture failed');
            }, {
                quality: 50,
                destinationType: 0,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            }
        	);
    	};

		function dataURItoBlob(dataURI) {
		// convert base64/URLEncoded data component to raw binary data held in a string
			 var byteString = atob(dataURI.split(',')[1]);
			 var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

			 var ab = new ArrayBuffer(byteString.length);
			 var ia = new Uint8Array(ab);
			 for (var i = 0; i < byteString.length; i++)
			 {
			    ia[i] = byteString.charCodeAt(i);
			 }

			 var bb = new Blob([ab], { "type": mimeString });
		 return bb;
		}
	}
])

.controller('homeCtrl', [
	'$scope','$location','$ionicLoading','$timeout', 
	function ($scope,$location,$ionicLoading,$timeout) {
		$scope.login = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/menu');
			}, 3000);		
		}

		$scope.admin = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/account');
			}, 3000);
		}
	}
])

.controller('adminCtrl', [
	'$scope', 
	function ($scope) {
	
	}
]);
