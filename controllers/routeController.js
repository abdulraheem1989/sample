'use strict';

var myApp=angular.module("myApp",['ngRoute']);

myApp.config(['$routeProvider','$locationProvider',
function ($routeProvider,$locationProvider){
   $locationProvider.hashPrefix('');
  $routeProvider.when('/home', {templateUrl:'pages/home.html',controller:'homectrl'})
  .when('/mytech', {templateUrl:'pages/technology.html',controller:'techtctrl'})
  .when('/contact', {templateUrl:'pages/contact.html',controller:'contactctrl'})
  .when('/exp', {templateUrl:'pages/exp.html',controller:'blogctrl'})
  .when('/utility', {templateUrl:'pages/utility.html',controller:'weatherCtrl'})
  .otherwise('/home');
}
]);

myApp.component('navMenu',
{template:
  '<nav class="navbar navbar-dark bg-dark navbar-expand-sm">'+
  '<div class="container">'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
          '<div class="collapse navbar-collapse" id="navbarToggleExternalContent">'+
          '<div class="navbar-nav">'+
            '<a class="nav-item nav-link" href="#">'+'Home'+'</a>'+
            '<a class="nav-item nav-link" href="#/exp">'+'Experience'+'</a>'+
            '<a class="nav-item nav-link" href="#/mytech">'+'Technology'+'</a>'+
            '<a class="nav-item nav-link" href="#/contact">'+'Contact me'+'</a>'+
            '<a class="nav-item nav-link" href="#/utility">'+'Utilities'+'</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</nav>'
});

var controllers={};
myApp.controller(controllers);
controllers.blogctrl=function ($scope){
    $scope.text="Welcome to my blog!!!";
};
controllers.contactctrl=function ($scope){
    $scope.text="Fill the information below. I will contact you rightaway. Thanks!";
};
controllers.techtctrl=function($scope,$http){
      $http.get('data/lang.json').then(
        function(response){
          $scope.languages=response.data;
        });
      $http.get('data/qatools.json').then(
          function(response){
            $scope.qatools=response.data;
        });
      $http.get('data/dev.json').then(
            function(response){
              $scope.devtools=response.data;
        });
};

controllers.weatherCtrl= function ($scope,$http) {

$scope.getWeather=function() {

  $http.get("http://api.openweathermap.org/data/2.5/forecast?zip=" + $scope.zip + "&appid=" + $scope.key)
  .then(function(response){
            $scope.weatherdata=response.data;

          });
  $scope.f_max=((9/5)*((weatherdata.list[0].main.temp_max) - 273) + 32);


  };


  };
