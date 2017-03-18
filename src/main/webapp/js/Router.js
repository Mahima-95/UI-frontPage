var scotchApp = angular.module('myApp', ['ngCookies', 'ngRoute',
    'ui.bootstrap', 'UserValidation',
    'angularUtils.directives.dirPagination', 'ngSanitize'
]);

scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: '/html/Index_Slider.html',
        controller: 'indexSlider'
    });

});