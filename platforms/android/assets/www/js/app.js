angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.constant('$ionicLoadingConfig', {
  template : '<span class="ion-loading-c fa-3x"></span>'
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab.login', {
      url: '/login',
      views: {
        'tab-dash': {
          templateUrl: 'templates/login.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-friends': {
          templateUrl: 'templates/menu.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })
    .state('tab.admin', {
      url: '/admin',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-admin.html',
          controller: 'AdminCtrl'
        }
      }
    })
    .state('tab.product', {
      url: '/menu-product',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-menu-product.html',
          controller: 'ProductCtrl'
        }
      }
    })
    .state('tab.tambahproduct', {
      url: '/tambah-product',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tambah-product.html',
          controller: 'ProductCtrl'
        }
      }
    })
    .state('tab.listproduct', {
      url: '/list-product',
      views: {
        'tab-friends': {
          templateUrl: 'templates/listproduct.html',
          controller: 'ProductCtrl'
        }
      }
    })
    .state('tab.editproduct', {
      url: '/edit-product/:id',
      views: {
        'tab-friends': {
          templateUrl: 'templates/editproduct.html',
          controller: 'ProductCtrl'
        }
      }
    })
     .state('tab.listmember', {
      url: '/list-member',
      views: {
        'tab-friends': {
          templateUrl: 'templates/listmember.html',
          controller: 'MemberCtrl'
        }
      }
    })
    .state('tab.editmember', {
      url: '/edit-member/:id',
      views: {
        'tab-friends': {
          templateUrl: 'templates/editmember.html',
          controller: 'MemberCtrl'
        }
      }
    })
    .state('tab.menu-konfirmasi-pembayaran', {
      url: '/menu-konfirmasi-pembayaran',
      views: {
        'tab-friends': {
          templateUrl: 'templates/menu-konfirmasi.html',
          controller: 'KnfirmCtrl'
        }
      }
    })
    .state('tab.konfirmasi-pembayaran', {
      url: '/konfirmasi-pembayaran',
      views: {
        'tab-friends': {
          templateUrl: 'templates/konfirmasi-pembayaran.html',
          controller: 'KnfirmCtrl'
        }
      }
    })
    .state('tab.cek-konfirmasi-pembayaran', {
      url: '/cek-konfirmasi-pembayaran',
      views: {
        'tab-friends': {
          templateUrl: 'templates/cek-konfirmasi-pembayaran.html',
          controller: 'KnfirmCtrl'
        }
      }
    })
    .state('tab.laporan-transaksi', {
      url: '/laporan-transaksi',
      views: {
        'tab-friends': {
          templateUrl: 'templates/laporan-transaksi.html',
          controller: 'ReportCtrl'
        }
      }
    })
    .state('tab.kirim-barang', {
      url: '/kirim-barang',
      views: {
        'tab-friends': {
          templateUrl: 'templates/kirim-barang.html',
          controller: 'SendCtrl'
        }
      }
    })
    .state('tab.menukategori', {
      url: '/menukategori',
      views: {
        'tab-friends': {
          templateUrl: 'templates/menukategori.html',
          controller: 'CategoryCtrl'
        }
      }
    })
    .state('tab.listkategori', {
      url: '/list-kategori',
      views: {
        'tab-friends': {
          templateUrl: 'templates/listkategori.html',
          controller: 'CategoryCtrl'
        }
      }
    })
    .state('tab.tambah-kategori', {
      url: '/tambah-kategori',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tambah-kategori.html',
          controller: 'CategoryCtrl'
        }
      }
    })
    .state('tab.edit-kategori', {
      url: '/edit-kategori/:id',
      views: {
        'tab-friends': {
          templateUrl: 'templates/edit-kategori.html',
          controller: 'CategoryCtrl'
        }
      }
    })
    ;
    $urlRouterProvider.otherwise('/tab/login');

});

