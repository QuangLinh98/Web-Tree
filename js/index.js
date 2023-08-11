var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./views/home.html",
    })
    .when("/shop", {
      templateUrl: "./views/shop.html",
    })
    .when("/contact", {
      templateUrl: "./views/contact.html",
    })
    .when("/about", {
      templateUrl: "./views/about.html",
    })
    .when("/detail", {
      templateUrl: "./views/detail.html",
    });
});

// controller home
myApp.controller("homeCtrl", function ($scope) {
  let fade = document.querySelectorAll(".fade");

  let index = 0;

  $scope.next = function () {
    fade[index].classList.remove("show");
    index = (index + 1) % fade.length;
    fade[index].classList.add("show");
  };

  $scope.prev = function () {
    fade[index].classList.remove("show");
    index = (index - 1 + fade.length) % fade.length;
    fade[index].classList.add("show");
  };
});
