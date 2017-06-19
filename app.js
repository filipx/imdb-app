angular.module('imdbApp',['ngRoute','homeController','moviePageController','dbService', 'tagsFilter'])
.config( function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'homePage/home.html',
    controller: 'HomeCtrl'
  })
  .when('/moviePage/:id',{
    templateUrl: 'moviePage/moviePage.html',
    controller: 'moviePageCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
})
