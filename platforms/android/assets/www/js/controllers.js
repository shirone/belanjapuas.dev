angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AdminCtrl',[
	'$scope', 'resAndroid','$ionicPopup',
	function($scope,resAndroid,$ionicPopup) {
		var defaultForm = {
			nama :'',
			email : '',
			lvl : '',
			alamat : '',
			username : ''
		}
		$scope.forms = angular.copy(defaultForm);
		$scope.admin = [];
		resAndroid.akunAdmin({username:'admin',password:'admin'},function(response){
			$scope.forms = response.account[0];
		});

		$scope.saveAdminPro = function(){
			resAndroid.saveAdmin($scope.forms,function(response){
				if(response.success==1){
					var alertPopup = $ionicPopup.alert({
				     title: 'Update Profile',
				     template: 'Update Succesful'
				   });
				}
			});
		}

		var defaultPass = {
			passwordlama : '',
			passwordbaru : '',
			passwordbaruretype : '',
			kode_spr_admn : '1'
		}
		$scope.formspass = angular.copy(defaultPass);
		$scope.savePassword = function(){
			resAndroid.savePass($scope.formspass,function(response){
				console.log(response)
				if(response.success==1){
					var alertPopup = $ionicPopup.alert({
				     title: 'Update password',
				     template: 'Update Succesful'
				   });
				   $scope.formspass = [];
				}else{
					var alertPopup = $ionicPopup.alert({
				     title: 'Update password',
				     template: 'Update Not Succesful'
				   });
				}
			});
		}

	}
])

.controller('homeCtrl', [
	'$scope','$location','$ionicLoading','$timeout', 'resAndroid','$http','$ionicPopup',
	function ($scope,$location,$ionicLoading,$timeout,resAndroid,$http,$ionicPopup) {

		var defaultForm = {
			username : '',
			password : ''
		}
		$scope.forms = angular.copy(defaultForm);
		$scope.login = function(){
			$ionicLoading.show();
			resAndroid.getLogin($scope.forms,function(response){
				if (response.success == 1){
					$timeout(function(){
						$ionicLoading.hide();
						$location.path('/tab/menu');

					}, 3000);
				}else{
					$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
				     title: 'Wrong username or password ',
				     template: 'Fill the correct username and password'
				   });
				   alertPopup.then(function(res) {
				     console.log('Thank you for not eating my delicious ice cream cone');
				   });
				}
			});
			// $http({
		 //        method : 'POST',
		 //        url : 'http://belanjapuas.dev/android/login',
		 //        headers: {'Content-Type': 'application/json'},
		 //        data : $scope.forms
		 //    }).
			//   success(function(data, status, headers, config) {
			//     console.log(data);
			//   });
		}

		$scope.admin = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/admin');
			}, 3000);
		}
		$scope.menuproduct = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/menu-product');
			}, 3000);
		}

		$scope.menumember = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/list-member');
			}, 3000);
		}

		$scope.menukonfirmasi = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/konfirmasi-pembayaran');
			}, 3000);
		}

		$scope.menulaporan = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/laporan-transaksi');
			}, 3000);
		}

		$scope.kirimbarang = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/kirim-barang');
			}, 3000);
		}
	}
])
.controller('ProductCtrl', [
	'$scope','$ionicLoading','$timeout','$location','$stateParams', 'resAndroid','$stateParams','$ionicPopup',
	function ($scope,$ionicLoading,$timeout,$location,$stateParams,resAndroid,$stateParams,$ionicPopup) {
		var defaultForm = {
			kode_produk : '',
			gbr_besar : '',
			harga : '',
			produk : '',
			kategori : '',
			deskripsi : '',
			stok : ''
		}

		$scope.forms = angular.copy(defaultForm);
		$scope.tambahproduct = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/tambah-product');
			}, 3000);
		}

		$scope.product = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/list-product');
			}, 3000);
		}

		$scope.kategoriEc = function(){
			$ionicLoading.show();
			$timeout(function(){
				$ionicLoading.hide();
				$location.path('/tab/menukategori');
			}, 3000);
		}

		$scope.produk = [];
		resAndroid.getProduk({},function(response){
			$scope.produk = response.produk;
		});
		var id;
		if (angular.isDefined($stateParams.id)) {
			resAndroid.getProdukDetail({'kode_produk':$stateParams.id},function(response){
				$scope.forms =  $scope.produkdetail = response.produk[0];
			});
		}

		resAndroid.getKategori({},function(response){
			$scope.kategorilistAll = response.kategori;
		});
		resAndroid.getKategoriList({},function(response){
			$scope.kategorilist = response.kategori;
		});
		$scope.selectKategori = function(name){
			$scope.forms.kategori = name.nama_kategori;
		}

		$scope.ImageURI = '';$scope.forms.gbr_upload = '';
		$scope.picData = 'img/favicon.png';
    	function UploadPicture(imageURI) {
	      // $scope.ImageURI =  imageURI;
	      $scope.forms.gbr_upload = $scope.picData = "data:image/jpeg;base64," +imageURI;
	      // $scope.picCool = dataURItoBlob("data:image/jpeg;base64," +imageURI);
	      $scope.$apply();
	      // alert($scope.picCool);
    	}
    	$scope.ShowPictures = function() {
        	navigator.camera.getPicture(UploadPicture, function(message) {
                // alert('get picture failed');
            }, {
                quality: 50,
                destinationType: 0,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            }
        	);
    	};
    	$scope.selectKategori1 = function(name){
			$scope.forms.kategori1 = name.id_kategori;
		}
		$scope.selectKategori2 = function(name){
			$scope.forms.kategori2 = name.nama_kategori;
		}
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

		$scope.save = function(){
			resAndroid.saveProduk($scope.forms,function(response){
				$scope.resSave = response;
				if(response.success){
					var alertPopup = $ionicPopup.alert({
				     	title: 'Insert Product',
				     	template: 'Succesfull Insert Produk'
				   });
			   }else{
			   	var alertPopup = $ionicPopup.alert({
				     	title: 'Insert Product',
				     	template: 'Unsuccesfull Insert Produk'
				   });
			   }
			});
		}

		$scope.saveupdateProduk = function(){
			resAndroid.updateProduk($scope.forms,function(response){
				$scope.updateProduk = response;
				if(response.success){
					var alertPopup = $ionicPopup.alert({
				     	title: 'Update Product',
				     	template: response.message
				   });
			   }else{
			   	var alertPopup = $ionicPopup.alert({
				     	title: 'Insert Product',
				     	template: 'Unsuccesfull Insert Produk'
				   });
			   }
			});
		}

	}
])
.controller('MemberCtrl', [
	'$scope','$ionicLoading','$timeout','$location','$stateParams','resAndroid','$ionicPopup',
	function ($scope,$ionicLoading,$timeout,$location,$stateParams,resAndroid,$ionicPopup) {
		resAndroid.getMember({},function(response){
			$scope.member = response.member;
		});

		$scope.status = [
			{
				id_status : '1',
 				name : 'Aktif'
			},
			{
				id_status : '0',
 				name : 'Non-Aktif'
			}
		]
		var defaultMember = {
			email : '',
			alamat: '',
			kode_pos : '',
			nama : '',
			propinsi : '',
			stts : '',
			telpon : '',
			tgl_lahir : '',
			username_user : ''
		}
		$scope.forms = angular.copy(defaultMember);
		if (angular.isDefined($stateParams.id)) {
			resAndroid.getMemberDetail({'kode_user':$stateParams.id},function(response){
				$scope.forms = response.member[0];
			});
		}
		$scope.selectStatus = function(name){
			$scope.forms.stts = name.id_status;
			console.log(name.id_status);
		}
		$scope.saveMember = function(){
			resAndroid.saveMember($scope.forms,function(response){
				if(response.success){
					var alertPopup = $ionicPopup.alert({
				     	title: 'Update Member',
				     	template: response.message
				   });
			   }else{
			   	var alertPopup = $ionicPopup.alert({
				     	title: 'Update Member',
				     	template: response.message
				   });
			   }
			});	
		}
		// $stateParams.id;
	}
])
.controller('KnfirmCtrl', ['$scope', function ($scope) {
	
}])

.controller('ReportCtrl', ['$scope', function ($scope) {
	
}])
.controller('SendCtrl', ['$scope', function ($scope) {
	
}])
.controller('CategoryCtrl', ['$scope','$ionicLoading','$timeout','$location', function ($scope,$ionicLoading,$timeout,$location) {
	$scope.tambahkategori = function(){
		$ionicLoading.show();
		$timeout(function(){
			$ionicLoading.hide();
			$location.path('/tab/tambah-kategori');
		}, 3000);
	}

	$scope.listkategori = function(){
		$ionicLoading.show();
		$timeout(function(){
			$ionicLoading.hide();
			$location.path('/tab/list-kategori');
		}, 3000);
	}
}])
;
