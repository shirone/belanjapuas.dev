angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
    ;
    $urlRouterProvider.otherwise('/tab/login');

});

