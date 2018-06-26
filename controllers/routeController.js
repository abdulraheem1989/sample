'use strict';

var myApp=angular.module("myApp",['ngRoute']);

myApp.config(['$routeProvider','$locationProvider',
function ($routeProvider,$locationProvider){
   $locationProvider.hashPrefix('');
  $routeProvider.when('/home', {templateUrl:'pages/home.html',controller:'homectrl'})
  .when('/mytech', {templateUrl:'pages/mytech.html',controller:'techtctrl'})
  .when('/contact', {templateUrl:'pages/contact.html',controller:'contactctrl'})
  .when('/blog', {templateUrl:'pages/blog.html',controller:'blogctrl'})
  .when('/utility', {templateUrl:'pages/utility.html',controller:'weatherCtrl'})
  .otherwise('/home');
}
]);

myApp.component('navMenu',
{template:
  '<nav class="d-flex justify-content-center">'+
    '<ul class="nav nav-pills">'+
      '<li >'+'<a class="btn btn-outline-primary" href="#">'+'Home'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/mytech">'+'What I know'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/contact">'+'Contact me'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/blog" >'+'Blog'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/utility" >'+'Utilities'+'</a>'+'</li>'+
    '</ul>'+
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

  $http.get("http://api.openweathermap.org/data/2.5/forecast?zip=" + $scope.zip + "&appid=8b9f3ac07ed74b0c0150058e4150f8df")
  .then(function(response){
            $scope.weatherdata=response.data;

          });
  $scope.f_max=((9/5)*((weatherdata.list[0].main.temp_max) - 273) + 32);


  };


  };
